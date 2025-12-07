/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Title from '@/components/ui/Title'
import React from 'react'
import OrderSummary from '@/components/cart/OrderSummary'
import CartItems from '@/components/cart/CartItems'
import { useSelector } from 'react-redux'

const page = () => {
  const {cart,totalQuantity,fee,totalPrice} = useSelector(state=>state.cart)

  return cart.length > 0? (
    <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto min-h-[calc(100dvh-143px)]'>
      <Title text="your cart" position='start' size={"40px"}/>
      <div className='flex flex-col md:flex-row gap-4 items-start py-2'>
        {/* Products */}
        <CartItems cart={cart}/>
        {/* Order Summary */}
        <OrderSummary totalQuantity={totalQuantity} fee={fee} totalPrice={totalPrice}/>
      </div>
    </div>
  ):(
    <p className='text-center text-mb-head text-red-500 min-h-[calc(100dvh-200px)]'>Cart is empty</p>
  )
}

export default page

