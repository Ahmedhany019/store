import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

const OrderSummary = ({totalQuantity,fee,totalPrice}) => {
  return (
    <div className='w-full md:w-[35%] flex gap-4 flex-col border rounded-2xl border-primary/10 p-4'>
          <h4 className='text-mb-title font-bold'>Order Summary</h4>
          <div className='flex flex-col gap-4 w-full border-b border-b-primary/10'>
            <span className='flex justify-between text-body text-primary/60'>Subtotal <span className='text-primary text-bold'>${totalPrice}</span></span>
            <span className='flex justify-between text-body text-primary/60'>Delivery Fee <span className='text-primary text-bold'>${fee}</span></span>
            <span className='flex justify-between text-body text-primary/60 mb-2'>Total Items <span className='text-primary text-bold'>{totalQuantity}</span></span>
          </div>
            <span className='flex justify-between text-body text-primary mb-4'>Total <span className='text-primary text-bold'>${fee + totalPrice}</span></span>
            <Link href={'/checkout'} className='w-[80%] mx-auto'>
              <Button text={"Go to Checkout"}/>
            </Link>
        </div>
  )
}

export default OrderSummary