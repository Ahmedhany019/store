import React from 'react'
import TitleFilter from '../ui/TitleFilter'

const SizeFiltration = ({handleSizeChange}) => {
  const sizes = [
  { label: "XX-Small", value: "XX" },
  { label: "X-Small", value: "X" },
  { label: "Small", value: "S" },
  { label: "Medium", value: "M" },
  { label: "Large", value: "L" },
  { label: "X-Large", value: "XL" },
  { label: "XX-Large", value: "XXL" },
  { label: "3X-Large", value: "3XL" },
  { label: "4X-Large", value: "4XL" }
];

  return (
    <div className='border-b border-primary/10 py-3'>
        <TitleFilter text={"Size"}/>
        <div className='flex flex-wrap gap-2'>
          {sizes.map((size,i)=>(
            <span key={i} onClick={()=>handleSizeChange(size.value)} className='rounded-xl bg-primary/10 py-1 px-2 
            cursor-pointer'>
              {size.label}
            </span>
          ))}
        </div>
      </div>
  )
}

export default SizeFiltration