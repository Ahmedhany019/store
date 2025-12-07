"use client"
import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ColorFiltration from './ColorFiltration'
import SizeFiltration from './SizeFiltration'
import PriceFiltration from './PriceFiltration'
import CategoryFiltration from './CategoryFiltration'
import { useDebounce } from '@/app/utils/useDebounce'

const Filter = ({ products, setFilteredProducts }) => {
  const prices = products.map(p => p.price)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const [priceValue, setPriceValue] = useState(maxPrice)
  const debouncePrice = useDebounce(priceValue)
  const [category, setCategory] = useState([])
  const debounceCategory = useDebounce(category)
  const [color, setColor] = useState([])
  const debounceColor = useDebounce(color)
  const [size, setSize] = useState([])
  const debounceSize = useDebounce(size)

  // handle category checkbox change
  const checkCategoryChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) setCategory(prev => [...prev, value])
    else setCategory(prev => prev.filter(item => item !== value))
  }

  // here we can add color and size change handlers similarly if needed
  const handleColorChange = (value) => {
    setColor(prev => prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value])
  }

  const handleSizeChange = (value) => {
    setSize(prev => prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value])
  }

  // apply all filters
  useEffect(() => {
    let temp = [...products]
    // category filter
    if (category.length > 0) {
      temp = temp.filter(p => category.includes(p.category))
    }

    // price filter
    temp = temp.filter(p => p.price <= debouncePrice)

    // color filter (if color property exists in product)
    if (color.length > 0) {
      temp = temp.filter(p => p.colors.some(c => color.includes(c)))
    }

    // size filter (if size property exists in product)
    if (size.length > 0) {
      temp = temp.filter(p=>p.sizes.some(s => size.map(x => x.toLowerCase()).includes(s.toLowerCase())))
    }

    setFilteredProducts(temp)
  }, [debounceCategory, debouncePrice, debounceColor, debounceSize, products, setFilteredProducts])

  return (
    <div className='border rounded-xl border-primary/10 p-4 w-full'>
      {/* Upper */}
      <div className='flex border-b border-primary/10 pb-3 justify-between items-center'>
        <h3 className='text-mb-title font-bold'>Filter</h3>
        <Image src={assets.filter} alt='filter'/>
      </div>

      {/* Category */}
      <CategoryFiltration checkChange={checkCategoryChange} />

      {/* Price */}
      <PriceFiltration setPriceValue={setPriceValue} priceValue={priceValue} minPrice={minPrice} maxPrice={maxPrice}/>

      {/* Color */}
      <ColorFiltration handleColorChange={handleColorChange}/>

      {/* Size */}
      <SizeFiltration handleSizeChange={handleSizeChange} />
    </div>
  )
}

export default Filter
