//NOTE step1

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js'

console.log(counterReducer)

const store = configureStore({
    reducer : {
        count : counterReducer
    }
})
 
console.log(store)

export default store