import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import ProductsReducer from "./slices/ProductSlice.jsx";
import orderReducer from "./slices/OrderSlice";


export const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:ProductsReducer,
        order:orderReducer
    }
})