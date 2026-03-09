import React from 'react'

const Button = ({text,variant="white" ,onClick}) => {
  return (
    <button onClick={onClick} className={`transition-all duration-300 rounded-full
    ${variant==="white" ? `bg-primary hover:bg-primary/80 text-white`:
      "bg-white  text-primary border-primary/10 border-2 "}
    w-full flex justify-center text-mb-body py-2 px-4 cursor-pointer hover:scale-105`}>
        {text}
    </button>
  )
}

export default Button