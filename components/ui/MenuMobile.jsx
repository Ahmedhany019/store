"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '../../app/assets/assets';


const MobileMenu = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button 
        className='w-[18px] md:hidden'
        onClick={() => setIsOpen(true)}
      >
        <Image src={assets.menu} alt="menu" className='w-full'/>
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className='flex justify-between items-center p-6 border-b'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className='text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full'
          >
            ×
          </button>
        </div>

        {/* Menu Links */}
        <ul className='flex flex-col p-6'>
          {links.map((link, i) => (
            <Link 
              href={link.link} 
              key={i} 
              className='text-mb-body py-4 border-b border-gray-100 hover:text-gray-600 transition-colors'
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;