"use client"
import React, { useState } from 'react'
import Filter from './Filter'
import Content from './Content'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { useSelector } from 'react-redux'

const Category = () => {
  const { products } = useSelector(state => state.products)
  const [filteredProducts, setFilteredProducts] = useState(products)

  if(products.length ===0 || !products){
    return <div className='text-center text-mb-head text-red-400'>No data found...</div>
  }
  return (
    <div className='flex gap-8 px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto'>
      <div className='w-[400px] h-[calc(100dvh-143px)] hidden md:block'>
        <Filter products={products} setFilteredProducts={setFilteredProducts}/>
      </div>
      <div className='w-full '>
        <Content products={products} filteredProducts={filteredProducts}/>
      </div>
    </div>
  )
}

export default Category
