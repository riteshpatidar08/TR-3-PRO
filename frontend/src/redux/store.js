//NOTE step1

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import productReducer from './productSlice'

const store = configureStore({
    reducer : {
      user : userReducer,
      product : productReducer
    }
})
 
console.log(store)

export default store