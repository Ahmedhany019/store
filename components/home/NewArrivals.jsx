"use client"

import Title from "../ui/Title";
import Product from "../ui/Product";
import Button from "../ui/Button";
import Link from "next/link";
import { assets } from "@/app/assets/assets";
import { useSelector } from "react-redux";

const NewArrivals = () => {

  const {products} = useSelector(state=>state.products)

  const stars = [assets.golden_star,assets.golden_star,assets.golden_star
    ,assets.golden_star,assets.golden_star,]

  return (
    <section className="py-10 border-b border-b-primary/10">
      <div className="px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto">
      <Title text={"New Arrivals"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
          {products.slice(0,4).map((product,i)=>(
            <Product product={product} stars={stars} key={i}/>
          ))}
        </div>
        <Link href={"/category"} >
        <div className="w-[150px] mx-auto">
          <Button text={"View all"} variant="black"/>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
