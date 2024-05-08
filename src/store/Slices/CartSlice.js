import { createSlice } from '@reduxjs/toolkit'

let initialState = []

export const CartSlice = createSlice({
    name:"CartSlice",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        deleteFromCart(state,action){
           return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {addToCart,deleteFromCart} = CartSlice.actions;

export default CartSlice.reducer;

  