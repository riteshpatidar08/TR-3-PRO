const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email } = req.body;
    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return res
        .status(400)
        .send('User already exists , Please try with different Email');
    }
    const user = await User.create(req.body);
    if (user) {
      return res.status(201).json({
        message: 'User created Successfully',
        data: user,
      });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    //step1 check email if user exists
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .send('User is not registered , Please register and try again');
    }
    //step2 match the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).send('Password do not match');
    }

    //generate a token and send it to response so we can get in the frontend
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        name: user.name,
      },
      'this-is-a-string',
      { expiresIn: '30d' }
    );

    res.status(200).json({
      message: 'Login Successfull',
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// model=>controller=>routes=>app.js

exports.GoogleAuth = async (req, res) => {
  try {
    const user = req.user;
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        name: user.name,
      },
      'this-is-a-string',
      { expiresIn: '30d' }
    );
    res.redirect(
      `http://localhost:5173/auth/google/callback?token=${token}&role=${user.role}&name=${user.name}`
    );
  } catch (error) {
    next(error);
  }
};
