import React from 'react'
import TitleFilter from '../ui/TitleFilter'

const ColorFiltration = ({handleColorChange}) => {

  const colorsLength = [
    {
      color:"white"
    },
    {
      color:"black"
    },
    {
      color:"gray"
    },
    {
      color:"navy"
    },
    {
      color:"red"
    },
    {
      color:"blue"
    },
    {
      color:"green"
    },
    {
      color:"yellow"
    },
    {
      color:"orange"
    },
    {
      color:"purple"
    },
  ]

  return (
    <div className='border-b border-primary/10 py-3'>
      <TitleFilter text={"Colors"}/>
      <div className='grid grid-cols-5 gap-3 py-2'>
        {colorsLength.map((color,i)=>(
          <div onClick={()=>handleColorChange(color.color)} key={i} style={{backgroundColor:color.color}}
          className={`w-8 h-8 rounded-full border border-primary/10 cursor-pointer`}></div>
        ))}
      </div>
    </div>
  )
}

export default ColorFiltration