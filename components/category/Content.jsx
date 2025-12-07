/* eslint-disable react/display-name */
import React, { memo, useState, useMemo } from 'react'
import Product from '../ui/Product'
import { useDebounce } from '@/app/utils/useDebounce'

const Content = memo(({ products, filteredProducts }) => {
  const [selectValue, setSelectValue] = useState("latest")
  const debounceSelect = useDebounce(selectValue)

  const sortedProducts = useMemo(() => {
    let temp = [...filteredProducts]
    if (debounceSelect === "low_price") temp.sort((a, b) => a.price - b.price)
    else if (debounceSelect === "high_price") temp.sort((a, b) => b.price - a.price)
    return temp
  }, [debounceSelect, filteredProducts])

  return (
    <div>
      <div className='flex items-center justify-between w-full mb-8 gap-2'>
        <h4 className='text-mb-head font-bold'>Casual</h4>
        <div className='flex flex-col sm:flex-row gap-4'>
          <p className='text-mb-body text-primary/60'>
            Showing {sortedProducts.length} of {products.length} Products
          </p>
          <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="low_price">Low Price</option>
            <option value="high_price">High Price</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {sortedProducts.map((product, i) => (
          <Product product={product} key={i}/>
        ))}
      </div>
    </div>
  )
})

export default Content
