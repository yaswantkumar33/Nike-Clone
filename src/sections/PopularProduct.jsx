import { products } from "../constants";
import ProductCard from "../Components/ProductCard";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const PopularProduct = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="max-container max-sm:mt-12" id="products">
        <div className="flex flex-col gap-5 justify-start">
          <h2
            className="text-4xl font-palanquin font-bold"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className=" mt-2 font-montserrat lg:max-w-lg">
            Experience top-notch quality aand style with our sought-after
            selections .Discover a world of comfort,desgin,and value
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-14">
          {products.map((item, index) => {
            // console.log(item);
            return <ProductCard key={index} Product={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
