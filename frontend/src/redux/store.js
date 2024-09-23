//NOTE step1

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'


const store = configureStore({
    reducer : {
      user : userReducer
    }
})
 
console.log(store)

export default store