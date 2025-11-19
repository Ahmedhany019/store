'use client'
import Title from "../ui/Title";
import { products as items } from "@/app/assets/assets";
import Product from "../ui/Product";

const NewArrivals = () => {

  return (
    <section>
      <Title text={"New Arrivals"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
      </div>
    </section>
  );
};

export default NewArrivals;
