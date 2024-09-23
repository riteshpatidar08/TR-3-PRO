import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    loading : false ,
    error : null
}

const userSlice = createSlice({
    name : 'user',
    initialState
})

export default userSlice.reducer