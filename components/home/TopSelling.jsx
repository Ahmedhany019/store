"use client"
import React from 'react'
import Title from '../ui/Title'
import Button from '../ui/Button'
import Product from '../ui/Product';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const TopSelling = () => {
 const {products} = useSelector(state=> state.products)
 const filteredProducts = products.filter(item => item.bestseller)
 
  return (
    <section className="py-10">
      <div className="px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto">

        <Title text={"top selling"} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
          {filteredProducts.slice(0,4).map((product,i)=>(
            <Product key={i} product={product}/>
          ))}
        </div>

        <Link href={"/category"}>
          <div className="w-[150px] mx-auto">
            <Button text={"View all"} variant="black"/>
          </div>
        </Link>

      </div>
    </section>
  )
}

export default TopSelling
