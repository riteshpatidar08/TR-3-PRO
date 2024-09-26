import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { FaLaptopHouse } from "react-icons/fa";

export const fetchProduct = createAsyncThunk('/fetchProduct', async(_ , {rejectWithValue})=>{
try {
    const res = await axios.get('http://localhost:3000/api/getproducts')
    return res.data
} catch (error) {
    return rejectWithValue(error)
}
})

const initialState = {
    product : [],
    loading : false
}


const productSlice = createSlice({
    name : "product",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProduct.pending, (state)=>{
            state.loading = true
        }).addCase(fetchProduct.fulfilled, (state,action)=>{
            state.product = action.payload.product
            state.loading =false
        }).addCase(fetchProduct.rejected,(state,action)=>{
            state.loading =false 
        })
    }
})


export default productSlice.reducer