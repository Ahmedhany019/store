"use client"
import React, { useState } from 'react'

const ShippingForm = ({ shippingInfo, setShippingInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='w-full flex gap-4 flex-col border rounded-2xl border-primary/10 p-6'>
      <h4 className='text-mb-title font-bold'>Shipping Information</h4>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-mb-body text-primary/60'>First Name</label>
          <input
            type="text"
            name="firstName"
            value={shippingInfo.firstName}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
            placeholder='John'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label className='text-mb-body text-primary/60'>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={shippingInfo.lastName}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
            placeholder='Doe'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-mb-body text-primary/60'>Email Address</label>
        <input
          type="email"
          name="email"
          value={shippingInfo.email}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
          placeholder='john@example.com'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-mb-body text-primary/60'>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={shippingInfo.phone}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
          placeholder='+1 234 567 8900'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-mb-body text-primary/60'>Street Address</label>
        <input
          type="text"
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
          placeholder='123 Main Street'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-mb-body text-primary/60'>City</label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
            placeholder='New York'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label className='text-mb-body text-primary/60'>State</label>
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
            placeholder='NY'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label className='text-mb-body text-primary/60'>ZIP Code</label>
          <input
            type="text"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-primary/10 rounded-full focus:outline-none focus:border-primary/30'
            placeholder='10001'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-mb-body text-primary/60'>Order Notes (Optional)</label>
        <textarea
          name="notes"
          value={shippingInfo.notes}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-primary/10 rounded-2xl focus:outline-none focus:border-primary/30 h-24 resize-none'
          placeholder='Special instructions for delivery...'
        />
      </div>
    </div>
  )
}

export default ShippingForm
