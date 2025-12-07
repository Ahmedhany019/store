import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    totalPrice:0,
    totalQuantity:0,
    fee:15
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const { product, color, size } = action.payload;
            const existingItem = state.cart.find(
                item => item.id === product.id && item.color === color && item.size === size
            );
            
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalQuantity +=1
                state.totalPrice += existingItem.price;
                return;
            }else{
                state.cart.push({
                    id:product.id,
                    image:product.image[0],
                    name:product.name,
                    size,
                    color,
                    price:product.price,
                    quantity: 1
                });
                state.totalQuantity +=1
            }
                state.totalPrice += product.price;
        },
        increaseQuantity: (state,action)=>{
            const { product} = action.payload;
            const existingItem = state.cart.find(
                item => item.id === product.id && item.color === product.color && item.size === product.size
            );
            if(existingItem){
                existingItem.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += product.price
            }
        },
        decreaseQuantity: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.cart.find(
                item =>
                item.id === product.id &&
                item.color === product.color &&
                item.size === product.size
            );
            if (!existingItem) return;
            if (existingItem.quantity === 1) {
                return alert("You cant decrease more")
            } else {
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.cart.find(
                item =>
                item.id === product.id &&
                item.color === product.color &&
                item.size === product.size
            );
            if (!existingItem) return;
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.quantity * existingItem.price;
            state.cart = state.cart.filter(
                item =>
                !(item.id === product.id &&
                    item.color === product.color &&
                    item.size === product.size)
            );
        }
    }
})


export default cartSlice.reducer
export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart} = cartSlice.actions
