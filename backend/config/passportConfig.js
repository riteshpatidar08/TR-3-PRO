const passport = require(passport);
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const User = require('../models/userModel');

passport.use(
  new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  }),
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const { id: googleId, displayName: name, emails } = profile;
    const email = emails[0].value;

    //check if user alread existing in the database with the googleId
    try {
      let user = await User.findOne({ googleId });

      if (!user) {
        user = await User.create({
          name,
          email,
          googleId,
        });
      }
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
);

