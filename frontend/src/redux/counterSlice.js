//step 1 
import {createSlice} from '@reduxjs/toolkit' 

//step2 -
const counterSlice = createSlice({
 name : 'count' ,
 initialState : {count : 0},
 reducers : {
    increment : (state)=>{
        state.count += 1 
    }
 }
}) ;
console.log(counterSlice)

export const {increment} = counterSlice.actions  

export default counterSlice.reducer 