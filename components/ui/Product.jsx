import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "./Stars";

const Product = ({ product }) => {

  return (
    <Link href={"/product/"+product.id} className="max-w-[300px]">
      <div>
        <Image loading="lazy" src={product.image[0]} alt={product.name} className="rounded-xl"/>
        {/* Details */}
        <div className="flex flex-col pt-4">
          <h3 className={`text-body font-semibold`}>{product.name}</h3>
          
            <Stars />
          <p className={`font-bold text-mb-title`}>${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
