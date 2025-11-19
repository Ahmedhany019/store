import { assets } from '@/app/assets/assets';
import Image from 'next/image';
import React from 'react';


const brands = [
    { name: 'versace', src: assets.versace },
    { name: 'zara', src: assets.zara  },
    { name: 'gucci', src: assets.gucci  },
    { name: 'prada', src: assets.prada  },
    { name: 'calvinKlein', src: assets.calvinKlein  }
  ];

const BrandsList = ({ ariaHidden = false }) => (
  <div className="flex gap-8 items-center flex-shrink-0"
      aria-hidden={ariaHidden}>
    {brands.map((brand, index)=> (
        <Image
          key={`${brand.name}-${index}`}
          src={brand.src}
          alt={ariaHidden ? '' : brand.name}
          className=" object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-[0,0,5em]"
          loading="lazy"
        />
      ))
    }
    </div>
  );

const BrandsSlider = () => {
  
  return (
    <div className="bg-primary flex py-6 absolute bottom-0 w-full overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        {/* Slider Container */}
        <div className="flex gap-8 animate-scroll">
          <BrandsList />
          <BrandsList ariaHidden={true} />
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;