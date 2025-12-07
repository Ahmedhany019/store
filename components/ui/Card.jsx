import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'

const Card = ({card}) => {

    const stars = [
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
      ]

  return (
    <div className='border-2 border-primary/10 shrink-0 
    rounded-2xl'>
        <div className='p-6 pb-10'>
            <div className='flex gap-2'>
            {stars.map((star,i)=>(
                    <Image key={i} src={star} alt='star'/>
            ))}
            </div>
            <h3 className='flex gap-1 text-body font-bold mt-2'>
                {card.name}
                <Image src={assets.verify} alt='verify'/>
            </h3>
            <p className='text-primary/60 w-[350px]'>
                {card.comment}
            </p>
        </div>
    </div>
  )
}

export default Card