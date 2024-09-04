import React from "react";
import Button from "../Components/Ui/Button";
import commas from "../assets/icons/icons8-comma-100.png";

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
      <div className="our-mission  ">
        <div className="h-[250px] tablet:h-[420px] desktop:h-[370px] bg-secondary flex justify-center items-center ">
          <h1 className=" text-primary text-[31px] tablet:text-[48px] ">
            Our Mission
          </h1>
        </div>
        <div className="flex flex-col items-center text-center justify-center p-4 gap-8  ">
          <div className="flex">
            <img src={commas} height="67" width="40" alt="" />
            <img src={commas} height="67" width="40" alt="" />
          </div>

          <p className="w-[80%] tablet:w-[70%]  tablet:text-[39px] text-[30px] text-secondary ">
            At LoschMedia, we help B2B businesses grow by acquiring new clients.
            Our founder, Chahid Kari, created a results-focused approach that
            eliminates the risks of traditional agencies
          </p>
        </div>
      </div>
      <div className="bg-secondary h-[2px] w-full my-10">
        <span className="opacity-0">.</span>
      </div>

      <div className="tablet:p-8 desktop:p-14 p-4  "></div>
    </>
  );
};

export default About;
