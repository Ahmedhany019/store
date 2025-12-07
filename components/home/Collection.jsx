import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'

const Collection = () => {

  const collection = [
    
    {
      category:"Gym",
      image:assets.banner3,
      cols:2,
    },
    {
      category:"Formal",
      image:assets.banner2,
      cols:3,
    },
    {
      category:"Party",
      image:assets.banner1,
      cols:3,
    },
    {
      category:"Casual",
      image:assets.banner4,
      cols:2,
    },
  ]

  return (
    <div className='py-12 '>
      <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto'>
        <div className=' bg-[#F0F0F0] rounded-3xl py-10'>
          <Title text={"BROWSE BY dress STYLE"}/>
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-4 px-4 md:px-12'>
            {collection.map((item, i) => {
              let colClass = item.cols === 1 ? "sm:col-span-1" : item.cols === 2 ? "sm:col-span-2" : "sm:col-span-3";
              return (
                <div key={i} className={`${colClass} relative`}>
                  <Image 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover rounded-2xl" 
                  />
                  <p className='text-mb-head absolute z-100 top-6 left-10'>{item.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection