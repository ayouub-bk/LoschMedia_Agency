import React from "react";
import Button from "../Components/Ui/Button";
import Calendly from "../Components/sections/Calendly";
const Contact = () => {
  return (
    <div className="">
      <header className=" bg-custom-radial py-20 px-10  flex justify-center items-center p-4 relative">
        <div className="flex flex-col gap-[30px] items-center desktop:w-[1008px] text-center text-primary ">
          <h1 className=" text-[31px] tablet:text-[61px] font-bold   ">
            Let's Make it happen
          </h1>
          <p className=" text-[37px] tablet:text-[61px]  ">
            Partner with Us and Watch Your Customers Grow!
          </p>
          <Button />
        </div>
      </header>
      <section id="calendly">
        <Calendly />
      </section>
    </div>
  );
};

export default Contact;
