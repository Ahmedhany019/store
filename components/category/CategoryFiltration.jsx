import React from 'react'

const CategoryFiltration = ({checkChange}) => {
  return (
    <div className='flex border-b border-primary/10 py-3 justify-between items-center'>
        <ul className='w-full flex flex-col gap-3'>
          <li className='flex justify-between items-center'>
            <span>T-shirt</span>
            <input value={'tshirt'} type='checkbox' onChange={checkChange}/>
          </li>
          <li className='flex justify-between items-center'>
            <span>Pants</span>
            <input value={'pants'} type='checkbox' onChange={checkChange}/>
          </li>
          <li className='flex justify-between items-center'>
            <span>Shorts</span>
            <input value={'short'} type='checkbox' onChange={checkChange}/>
          </li>
          <li className='flex justify-between items-center'>
            <span>Jeans</span>
            <input value={'jeans'} type='checkbox' onChange={checkChange}/>
          </li>
        </ul>
      </div>
  )
}

export default CategoryFiltration