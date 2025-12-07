import React from 'react'
import TitleFilter from '../ui/TitleFilter'

const PriceFiltration = ({setPriceValue,priceValue,minPrice,maxPrice}) => {
  return (
    <div className='border-b border-primary/10 py-3'>
        <TitleFilter text={"Price"}/>
        <div className='flex flex-col gap-2'>
          <p className='text-mb-body text-primary/60'>
            Max Price: {priceValue} EGP
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceValue}
            onChange={(e) => setPriceValue(Number(e.target.value))}
            className='w-full'
          />
        </div>
      </div>
  )
}

export default PriceFiltration