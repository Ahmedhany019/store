import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'

const Stars = () => {
    const stars = [
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
        assets.golden_star,
  ]
  return (
    <div className="flex gap-1">
        {stars.map((star, i) => (
            <Image src={star} alt={"star"} key={i} width={14} />
        ))}
    </div>
  )
}

export default Stars