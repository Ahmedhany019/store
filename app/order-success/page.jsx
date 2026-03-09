"use client"
import React from 'react'
import Title from '@/components/ui/Title'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const page = () => {
  const { cart } = useSelector(state => state.cart)

  return (
    <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto min-h-[calc(100dvh-143px)] py-8'>
      <div className='flex flex-col items-center justify-center h-[60vh] gap-6 text-center'>
        {/* Success Icon */}
        <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center'>
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <div className='flex flex-col gap-3'>
          <Title text="Order Placed Successfully!" position='center' size={"32px"} />
          <p className='text-body text-primary/60'>
            Thank you for your order! We've received your purchase and will send you a confirmation email shortly.
          </p>
          <p className='text-mb-body text-primary/80'>
            Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
          <Link href="/category" className='w-full sm:w-auto'>
            <Button text="Continue Shopping" />
          </Link>
          
          <Link href="/profile" className='w-full sm:w-auto'>
            <Button text="View Orders" variant="white" />
          </Link>
        </div>

        {/* Order Summary */}
        <div className='w-full mt-6 p-4 border border-primary/10 rounded-2xl'>
          <h4 className='font-medium text-body mb-3'>Order Summary</h4>
          <p className='text-sm text-primary/60'>
            {cart.length} items • Total will be calculated at checkout
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
