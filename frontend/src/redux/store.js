//NOTE step1

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import productReducer from './productSlice'
import CartReducer from './cartSlice'
const store = configureStore({
    reducer : {
      user : userReducer,
      product : productReducer,
      cart : CartReducer
    }
})
 
console.log(store)

export default store