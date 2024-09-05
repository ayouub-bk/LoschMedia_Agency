import React from "react";
import TestimonailsHome from "../Components/sections/TestimonailsHome";

const Testimonials = () => {
  return (
    <div>
      <header className="bg-[url('./assets/imgs/StockImg.jpg')]  h-[810px]  flex justify-center items-center  ">
        <h1 className=" -tracking-tight tablet:text-[61px] text-[39px]   w-[80%] desktop:w-[60%] text-center   text-primary font-bold   ">
          What Have People Said About Us?
        </h1>
      </header>
      <section className="p-20 grid grid-cols-1  gap-6">
        <TestimonailsHome />
        <TestimonailsHome />
        <TestimonailsHome />
        <TestimonailsHome />
      </section>
    </div>
  );
};

export default Testimonials;
