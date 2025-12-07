/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { assets } from '@/app/assets/assets'
import Button from '@/components/ui/Button'
import Product from '@/components/ui/Product'
import Stars from '@/components/ui/Stars'
import Title from '@/components/ui/Title'
import { addToCart, increaseQuantity } from '@/redux/slices/CartSlice'
import { Angkor } from 'next/font/google'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})

const page = () => {
  const {id} = useParams()
  const {products} = useSelector(state=> state.products)
  let product = products.filter((p)=> p.id === id)
  let relatedProducts = products.filter((p)=> p.category === product[0].category 
  && p.id !== product[0].id)
  const dispatch = useDispatch()
  const [sizeSelected,setSizeSelected] = useState("")
  const [colorSelected,setColorSelected] = useState("")

  const addProduct = ()=>{
    if(sizeSelected && colorSelected){
      dispatch(addToCart({product:product[0],color:colorSelected,size:sizeSelected}))
      toast.success("Product added to cart successfully")
    }
    else{
      return toast.error("pick a size, color")
    }
  }


  return (
    <section className='py-10'>
      <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto'>
        {/* Product details */}
        <div className='flex flex-col md:flex-row gap-40 md:items-start items-center'>
          {/* Product Image */}
          <div className='flex flex-col-reverse md:flex-row gap-4'>
            <div className='flex flex-row md:flex-col gap-2 flex-wrap '>
              {product[0].image.slice(0,3).map((p,i)=> (
                  <Image loading='lazy' key={i} src={p} alt='shirt' className='w-[120px] rounded-xl'/>
                )
              )}
            </div>
            <div>
              <Image src={product[0].image[0]} alt='product' 
              className='w-full h-full rounded-2xl object-cover'/>
            </div>
          </div>
          {/* Product Info */}
          <div>
            <div className='border-b border-b-primary/10 pb-4'>
              <h2 className={`${angkor.className} text-title`}>{product[0].name}</h2>
              <Stars />
              <span className='text-mb-head font-bold'>${product[0].price}</span>
              <p className='text-mb-body text-primary/60'>{product[0].description}</p>
            </div>
            {/* Colors */}
            <div className='border-b border-b-primary/10 py-4'>
              <h4 className='text-mb-body text-primary/60'>Select Colors:</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {product[0].colors.map((color,i)=>(
                  <div onClick={()=>setColorSelected(color)} key={i} style={{backgroundColor:color}} className={`
                  w-6 h-6 rounded-full border cursor-pointer flex justify-center items-center border-primary/10`}>
                    {colorSelected === color && <Image src={assets.correct} alt='correct' className={`${colorSelected === "white"&& "bg-black/10"}`}/>}
                  </div>
                ))}
              </div>
            </div>
            {/* Sizes */}
            <div className='border-b border-b-primary/10 py-4'>
              <h4 className='text-mb-body text-primary/60'>Choose Size:</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {product[0].sizes.map((size,i)=>(
                  <div onClick={()=>setSizeSelected(size)} key={i} className={` py-1 px-5
                  rounded-3xl cursor-pointer
                  ${sizeSelected === size ? "bg-green-200" :"bg-primary/10 "}`}>
                    {size}
                  </div>
                ))}
              </div>
            </div>
            {/* Actions */}
            <div className='py-4 flex justify-between items-center'>
              
              <div className='w-[70%]'>
                <Button variant='white' text={"Add to Cart"} onClick={addProduct}/>
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className='py-12'>
          <Title text={"You might also like"}/>
          <div className=' flex gap-8 justify-center'>
            {relatedProducts.slice(0,4).map((item)=>{
            return (
                <Product key={item.id} product={item}/>
            )
            })}
          </div>
          
        </div>
        )}
      </div>
    </section>
  )
}

export default page