import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [] ,
    totalQuantity : 0 ,
    totalPrice : 0
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            const newItem = action.payload ;
            const existingItem = state.items.find((item)=> item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    name : newItem.name,
                    price : newItem.price,
                    image: newItem.image,
                    discountPrice : newItem.discountPrice ,
                    quantity  :1 
                })
            }else{
                    existingItem.quantity++
                }
                state.totalQuantity++ ,
                state.totalPrice += newItem.discountPrice
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer