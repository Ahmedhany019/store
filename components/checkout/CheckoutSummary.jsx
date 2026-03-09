"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../ui/Button'

const CheckoutSummary = ({ onPlaceOrder }) => {
  const { cart, totalQuantity, fee, totalPrice } = useSelector(state => state.cart)

  return (
    <div className='w-full md:w-[35%] flex gap-4 flex-col border rounded-2xl border-primary/10 p-6'>
      <h4 className='text-mb-title font-bold'>Order Summary</h4>
      
      {/* Order Items */}
      <div className='flex flex-col gap-3 max-h-48 overflow-y-auto'>
        {cart.map((item, index) => (
          <div key={index} className='flex justify-between items-center gap-2 pb-2 border-b border-primary/5'>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium truncate'>{item.name}</p>
              <p className='text-xs text-primary/60'>
                {item.size} • {item.color} • Qty: {item.quantity}
              </p>
            </div>
            <span className='text-sm font-bold text-primary'>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className='flex flex-col gap-3 w-full border-t border-primary/10 pt-4'>
        <div className='flex justify-between text-mb-body text-primary/60'>
          <span>Subtotal</span>
          <span className='text-primary font-bold'>${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className='flex justify-between text-mb-body text-primary/60'>
          <span>Delivery Fee</span>
          <span className='text-primary font-bold'>${fee.toFixed(2)}</span>
        </div>
        
        <div className='flex justify-between text-mb-body text-primary/60'>
          <span>Total Items</span>
          <span className='text-primary font-bold'>{totalQuantity}</span>
        </div>
      </div>

      {/* Total */}
      <div className='flex justify-between text-body text-primary font-bold pt-2 border-t border-primary/10'>
        <span>Total</span>
        <span>${(fee + totalPrice).toFixed(2)}</span>
      </div>

      {/* Place Order Button */}
      <Button
        text="Place Order"
        onClick={onPlaceOrder}
        className="w-full mt-4"
      />

      {/* Security Info */}
      <div className='flex items-center justify-center gap-2 text-xs text-primary/60 mt-2'>
        <span>🔒</span>
        <span>Secure Checkout</span>
      </div>
    </div>
  )
}

export default CheckoutSummary
