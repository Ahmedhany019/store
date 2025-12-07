const { createSlice } = require("@reduxjs/toolkit")


const initialState ={
    order:[]
}

const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        createOrder: (state,action)=>{
            const {product,shippingInfo} = action.payload
            state.order.push({
                id:product.id,
                userId:product.userId || null,
                name:product.name,
                quantity:product.quantity,
                price:product.price,
                size:product.size,
                color:product.color,
                image:product.image[0],
                address:shippingInfo.address,
                city:shippingInfo.city,
                zip:shippingInfo.zip,
            })
            console.log("Slice####"+JSON.stringify(state.order))
        }
    }
})

export default orderSlice.reducer
export const {createOrder} = orderSlice.actions