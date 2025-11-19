import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'

const Search = ({placeholder}) => {
  return (
    <>
        <Image src={assets.search} alt='search' className='w-[18px] absolute top-1/2 -translate-y-1/2 left-2'/>
        <input type="search" placeholder={placeholder} className='p-3 ml-6 rounded-full w-full
        focus:ring-0 focus:outline-none'/>
    </>
  )
}

export default Search