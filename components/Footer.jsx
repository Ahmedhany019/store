import { assets } from '@/app/assets/assets'
import { Angkor } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})

const Footer = () => {

  const company= ["About","Feature","Works","Career"]
  const help= ["Customer Support","Delivery Details","Terms & Conditions","Privacy Policy"]
  const FAQ= ["Account","Manage Deliveries","Orders","Payments"]
  const resources= ["Free eBooks","Development Tutorial","How to - Blog","Youtube Playlist"]
  const social = [
    {
      className:"rounded-full bg-white border-primary/20 border-1 w-[30px] h-[30px] p-1 flex justify-center items-center",
      name:"x",
      image:assets.x,
      link:""
    },
    {
      className:"rounded-full bg-primary w-[30px] h-[30px] p-1 flex justify-center items-center",
      name:"facebook",
      image:assets.facebook,
      link:""
    },
    {
      className:"rounded-full bg-white border-primary/20 border-1 w-[30px] h-[30px] p-1 flex justify-center items-center",
      name:"instagram",
      image:assets.instagram,
      link:""
    },
    {
      className:"rounded-full bg-white border-primary/20 border-1 w-[30px] h-[30px] p-1 flex justify-center items-center",
      name:"github",
      image:assets.github,
      link:""
    },
  ]
  return (
    <footer className="w-full bg-[#F0F0F0] flex flex-col justify-center">
        <div className='px-4 sm:mx-10 lg:mx-16 xl:mx-26 2xl:mx-42 mx-auto
        grid grid-cols-2 md:grid-cols-6 justify-center gap-4 border-b border-primary/20 py-10'>
          <div className='col-span-2 w-[70%]'>
            <h1 className={`pb-1 text-mb-head ${angkor.className}`}>SHOP.CO</h1>
            <p className='py-1 text-[14px] text-primary/60'>We have clothes that suits your style and which you’re 
              proud to wear. From women to men.</p>
            <ul className='pt-2 flex gap-2'>
              {social.map((item,i)=>(
                <Link key={i} href={item.link}>
                  <Image src={item.image} alt={item.name} className={item.className}/>
                </Link>
              ))}
            </ul>
          </div>

          <ul>
            <h2>COMPANY</h2>
            {company.map((item,i)=>(
              <p key={i} className='text-mb-body pt-3 text-primary/60'>
                {item}
              </p>
            ))}
          </ul>

          <ul>
            <h2>HELP</h2>
            {help.map((item,i)=>(
              <p key={i} className='text-mb-body pt-3 text-primary/60'>
                {item}
              </p>
            ))}
          </ul>

          <ul>
            <h2>FAQ</h2>
            {FAQ.map((item,i)=>(
              <p key={i} className='text-mb-body pt-3 text-primary/60'>
                {item}
              </p>
            ))}
          </ul> 
          
          <ul>
            <h2>RESOURCES</h2>
            {resources.map((item,i)=>(
              <p key={i} className='text-mb-body pt-3 text-primary/60'>
                {item}
              </p>
            ))}
          </ul>
        </div>
        <div className='py-8 px-4 sm:mx-10 lg:mx-16 xl:mx-26 2xl:mx-42 mx-auto
        flex justify-between items-center'>
          <p>© 2000-2021, All rights reserved</p>
          <Image src={assets.methods} alt='payment methods'/>
        </div>
    </footer>
  )
}

export default Footer