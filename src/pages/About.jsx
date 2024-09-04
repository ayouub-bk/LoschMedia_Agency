import React from "react";
import Button from "../Components/Ui/Button";

const About = () => {
  return (
    <>
      <header className="bg-[url('./assets/imgs/StockImg.jpg')] bg-center   h-[700px]  flex justify-center items-center p-4 relative">
        <div className="bg-black absolute inset-0 opacity-50"></div>
        <div className="  z-10 flex flex-col gap-[30px] items-center desktop:w-[1008px] text-center text-primary ">
          <h1 className="text-[61px] font-bold   ">Who are We ?</h1>
          <p className=" text-[29px] tablet:text-[31px]  ">
            LoschMedia empowers B2B businesses with a performance-based strategy
            that ensures you only pay for signed clients. Minimize risk,
            maximize growth.
          </p>
          <Button />
        </div>
      </header>

      <div className="tablet:p-8 desktop:p-14 p-4 "></div>
    </>
  );
};

export default About;
