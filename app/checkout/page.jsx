"use client"
import React, { useState } from 'react'
import Title from '@/components/ui/Title'
import ShippingForm from '@/components/checkout/ShippingForm'
import PaymentMethod from '@/components/checkout/PaymentMethod'
import CheckoutSummary from '@/components/checkout/CheckoutSummary'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const page = () => {
  const { cart } = useSelector(state => state.cart)
  const router = useRouter()
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notes: ''
  })
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePlaceOrder = async () => {
    // Basic validation
    if (!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.email || 
        !shippingInfo.phone || !shippingInfo.address || !shippingInfo.city || 
        !shippingInfo.state || !shippingInfo.zipCode) {
      toast.error('Please fill in all required shipping information')
      return
    }

    if (!shippingInfo.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsProcessing(true)
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Order placed successfully!')
      
      // Clear cart and redirect to success page
      setTimeout(() => {
        router.push('/order-success')
      }, 1500)
      
    } catch (error) {
      toast.error('Failed to place order. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto min-h-[calc(100dvh-143px)]'>
        <div className='flex flex-col items-center justify-center h-[60vh] gap-4'>
          <h2 className='text-mb-head text-primary'>Your cart is empty</h2>
          <p className='text-body text-primary/60'>Add some products to your cart before checkout</p>
          <button 
            onClick={() => router.push('/category')}
            className='px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors'
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto min-h-[calc(100dvh-143px)] py-8'>
      <Title text="checkout" position='start' size={"40px"} />
      
      <div className='flex flex-col lg:flex-row gap-8 items-start py-6'>
        {/* Checkout Forms */}
        <div className='w-full lg:w-[50%] flex flex-col gap-6'>
          <ShippingForm 
            shippingInfo={shippingInfo} 
            setShippingInfo={setShippingInfo} 
          />
          
          <PaymentMethod 
            paymentMethod={paymentMethod} 
            setPaymentMethod={setPaymentMethod} 
          />
        </div>
        
        {/* Order Summary */}
        <div className='w-full lg:w-[45%] lg:sticky lg:top-8'>
          <CheckoutSummary 
            onPlaceOrder={handlePlaceOrder}
            isProcessing={isProcessing}
          />
        </div>
      </div>
    </div>
  )
}

export default page