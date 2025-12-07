import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Banner from "./BrandsSlider";
import { Angkor } from "next/font/google";

const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})

const Hero = () => {

  return (
    <section className="bg-background md:h-[calc(100dvh-(142px))] py-8 relative">
      <div
        className="px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto 
    flex flex-col md:flex-row h-full"
      >
        {/* details */}
        <div className="flex-1 md:w-1/2 w-full flex flex-col gap-2 justify-center h-full">
          {/* Title */}
          <h3 className={`${angkor.className} text-[36px] lg:text-head `}>
            FIND CLOTHES THAT
            MATCHES YOUR STYLE
          </h3>
          {/* Paragraph */}
          <p className="w-full text-mb-body text-primary/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          {/* Button */}
          <div className="w-1/2">
            <Button text={"Shop Now"}/>
          </div>
          {/* stats */}
          <div className="flex flex-wrap w-full gap-8 py-8 justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-mb-title md:text-title font-bold">200+</span>
              <span className="text-primary/60 text-mb-body">International Brands</span>
            </div>
            <div className="flex flex-col">
              <span className="text-mb-title md:text-title font-bold">2,000+</span>
              <span className="text-primary/60 text-mb-body">High-Quality Products</span>
            </div>
            <div className="flex flex-col">
              <span className="text-mb-title md:text-title font-bold">30,000+</span>
              <span className="text-primary/60 text-mb-body">Happy Customers</span>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 md:w-1/2 flex justify-center items-center relative ">
          <Image
            src={assets.hero_section}
            alt="Fashion model"
            className="object-contain w-full"
          />
          <Image src={assets.star} alt="start"
          className="absolute top-10 right-10"/>
          <Image src={assets.star} alt="start"
          className="absolute top-1/2 left-0 -translate-y-1/2"/>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
