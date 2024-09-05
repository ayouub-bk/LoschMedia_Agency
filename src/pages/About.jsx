import React from "react";
import Button from "../Components/Ui/Button";
import commas from "../assets/icons/icons8-comma-100.png";
import { SpecialData } from "../data";
import Logo from "../assets/imgs/Logo.jpg";

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

      <div className="tablet:p-8 desktop:p-20 p-4 flex flex-col items-center mb-10   ">
        <section className="w-full ">
          <h1 className="highlighted-title font-bold text-center mb-[34vh] text-[48px] text-secondary    ">
            {" "}
            Why we are special ?{" "}
          </h1>
          <div className="flex flex-col gap-6 relative p-2 ">
            {SpecialData.map((special, index) => {
              const { icon, title, others, middle } = special;
              return (
                <div className="flex justify-between  p-2 pb-4 items-center border-b-2 border-secondary h-[120px]">
                  <div className="flex gap-2 ">
                    <img src={icon} height="40px" width="40px" alt="icon" />
                    <h1 className="text-center  text-[16px] tablet:text-[25px] text-bold ">
                      {" "}
                      {title}
                    </h1>
                  </div>
                  <div className="w-[20%] text-center ">
                    <h1 className="text-[14px] tablet:text-[20px] ">
                      {others}
                    </h1>
                  </div>
                </div>
              );
            })}
            <div className="absolute flex flex-col items-center p-2   tablet:bottom-0 -bottom-0  -top-30 right-[35%] bg-primary w-[30%] gap-6 shadow-lg rounded-md  ">
              <img
                className="mb-14"
                src={Logo}
                height="71px"
                width="230px"
                alt="logo"
              />
              {SpecialData.map((mid, index) => {
                const { middle } = mid;
                return (
                  <div className="h-[120px] flex justify-center items-center  p-2  ">
                    <h6 className="text-center text-[14px] font-bold tablet:text-[20px] text-secondary ">
                      {middle}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
