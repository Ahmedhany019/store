import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'

const TitleFilter = ({text}) => {
  return (
    <div className='flex  justify-between items-center'>
        <h3 className='text-mb-title font-bold'>{text}</h3>
        <Image src={assets.arrow} alt='arrow'/>
    </div>
  )
}

export default TitleFilter