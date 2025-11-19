import React from 'react'

const Product = ({item}) => {
  return (
    <div className='rounded-md max-w-[300px]'>
        <div>
            {item.image[0]}
        </div>
    </div>
  )
}

export default Product