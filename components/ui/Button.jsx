import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-primary hover:bg-primary/80 duration-300 rounded-full text-white
    w-full flex justify-center text-mb-body py-2 cursor-pointer'>
        {text}
    </button>
  )
}

export default Button