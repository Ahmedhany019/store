"use client"
import Link from 'next/link'
import React from 'react'
import Search from './ui/Search'
import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import MobileMenu from './ui/MenuMobile'
import { Angkor } from 'next/font/google'
import { useSelector } from 'react-redux'

const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})

const links = [
  {
    label:"Shop",
    link:"/category"
  },
  {
    label:"On Sale",
    link:"/category"
  },
  {
    label:"New Arrivals",
    link:"/category"
  },
  {
    label:"Brands",
    link:"/category"
  },
]

const Navbar = () => {

  const {cart} = useSelector(state =>state.cart)

  return (
    <nav className='py-8 border-b border-primary/10'>
      <div className='px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto flex justify-between items-center'>
        <div className='flex gap-2'>
          {/* Menu */}
          <MobileMenu links={links}/>
          {/* logo */}
          <Link href={'/'}>
            <h1 className={`text-[32px] text-bold ${angkor.className}`}>SHOP.CO</h1>
          </Link>
        </div>
        {/* Nav */}
        <ul className='md:flex items-center justify-center gap-4 hidden'>
          {links.map((link,i)=>(
            <Link href={`${link.link}`} key={i} className='text-mb-body'>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className='flex gap-4 justify-end w-1/2'>
          {/* Search */}
          <div className='relative bg-[#F0F0F0] rounded-full md:block hidden lg:w-[85%] md:w-[80%]'>
            <Search placeholder={"Search For Product"}/>
          </div>
          <Image src={assets.search} alt="menu" className='md:hidden'/>
          {/* Profile & Cart */}
          <div className='flex justify-center gap-4 items-center lg:w-[15%] md:w-[20%]'>
            <Link href={`/cart`} className='cursor-pointer relative'>
              <Image src={assets.cart} alt="cart"/>
                {cart.length > 0 && (
                  <div className='absolute text-[14px] p-2 w-2 h-2 rounded-full bg-primary/60 text-white
                  flex justify-center items-center -top-3 -right-1'>
                    {cart.length}
                  </div>
                )}
            </Link>
            <Link href={`/profile`} className='cursor-pointer'>
              <Image src={assets.profile} alt="cart" className=''/>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar