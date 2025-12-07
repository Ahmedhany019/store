
import { products } from "@/app/assets/assets";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products
}

const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        
    }
})


export default ProductSlice.reducer
