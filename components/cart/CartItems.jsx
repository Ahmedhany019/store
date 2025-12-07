import { assets } from '@/app/assets/assets'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/slices/CartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

const CartItems = ({cart}) => {
    const dispatch = useDispatch()

  const increaseProduct = (product)=>{
    dispatch(increaseQuantity({product}))
  }
  const decreaseProduct = (product)=>{
    dispatch(decreaseQuantity({product}))
  }

  const removeProduct = (product)=>{
    dispatch(removeFromCart({product}))
  }
  
  return (
    <div className='w-full md:w-[60%] flex gap-4 flex-col border rounded-2xl border-primary/10 p-4'>
          {cart.map((p,i)=>(
            <div key={i} className='relative flex justify-between not-last:border-b border-b-primary/10 py-2'>
              <div className='flex gap-3 rounded-2xl'>
                <Image src={p.image} alt='product' className='w-[120px] rounded-2xl hidden sm:block'/>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-bold'>{p.name}</h4>
                  <span className='text-[14px]'>Size: {p.size}</span>
                  <span className='text-[14px]'>Color: {p.color}</span>
                  <span className='text-mb-title font-bold mt-3'>${p.price}</span>
                </div>
              </div>
              <div className='flex flex-col justify-between items-end'>
                <div className='cursor-pointer' onClick={()=>removeProduct(p)}>
                  <Image src={assets.trash} alt='filter' className='hover:scale-115 duration-300'/>
                </div>
                <div className='bg-primary/10 rounded-full gap-6 px-4 py-1 justify-center flex'>
                  <button className='cursor-pointer text-bold text-mb-title' onClick={()=>decreaseProduct(p)}>-</button>
                  <button>{p.quantity}</button>
                  <button className='cursor-pointer text-bold text-mb-title' onClick={()=>increaseProduct(p)}>+</button>
              </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default CartItems