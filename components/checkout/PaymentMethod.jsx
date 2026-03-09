"use client"
import React from 'react'

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  const methods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: '💳',
      description: 'Visa, Mastercard, Amex'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🔵',
      description: 'Pay with PayPal account'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      icon: '🍎',
      description: 'Pay with Apple Pay'
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: '🟢',
      description: 'Pay with Google Pay'
    }
  ]

  return (
    <div className='w-full flex gap-4 flex-col border rounded-2xl border-primary/10 p-6'>
      <h4 className='text-mb-title font-bold'>Payment Method</h4>
      
      <div className='flex flex-col gap-3'>
        {methods.map((method) => (
          <label
            key={method.id}
            className='flex items-center gap-4 p-4 border border-primary/10 rounded-2xl cursor-pointer hover:bg-primary/5 transition-colors'
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={paymentMethod === method.id}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='w-5 h-5 text-primary focus:ring-primary/20'
            />
            <div className='flex items-center gap-3 flex-1'>
              <span className='text-2xl'>{method.icon}</span>
              <div>
                <p className='font-medium text-body'>{method.name}</p>
                <p className='text-sm text-primary/60'>{method.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {paymentMethod === 'credit-card' && (
        <div className='mt-4 flex flex-col gap-4 p-4 bg-primary/5 rounded-2xl'>
          <h5 className='font-medium text-body'>Card Details</h5>
          
          <div className='flex flex-col gap-2'>
            <label className='text-mb-body text-primary/60'>Card Number</label>
            <input
              type="text"
              placeholder='1234 5678 9012 3456'
              className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30 bg-white'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-mb-body text-primary/60'>Expiry Date</label>
              <input
                type="text"
                placeholder='MM/YY'
                className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30 bg-white'
              />
            </div>
            
            <div className='flex flex-col gap-2'>
              <label className='text-mb-body text-primary/60'>CVV</label>
              <input
                type="text"
                placeholder='123'
                className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30 bg-white'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-mb-body text-primary/60'>Cardholder Name</label>
            <input
              type="text"
              placeholder='John Doe'
              className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30 bg-white'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethod
