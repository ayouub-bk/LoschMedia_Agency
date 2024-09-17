import React from "react";
import { services } from "../../data";
const ServicesHome = () => {
  console.log(services[1]);
  return (
    <div
      className="p-10 w-full flex flex-col items-center  gap-20"
      id="servicesHome"
    >
      <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] ">
        Our Services
      </h1>
      {/* services grid cards L  */}
      <div className="grid grid-cols-1  tablet:grid-cols-2 desktop:grid-cols-3 gap-20 	 ">
        {services.map((service, index) => {
          const { title, icon, dettails } = service;
          return (
            <div
              className={`shadow-md flex flex-col gap-2 p-2 transition-transform duration-300 transform hover:scale-105 ${
                index == services.length - 1 ? `` : ``
              }   `}
            >
              <div className="flex items-center justify-center gap-4 h-[100px] ">
                <img src={icon} height="95px" width="90" alt="icon" />
                <h2 className="text-[20px] font-bold ">{title}</h2>
              </div>
              <ul className=" text-[16px] pl-8  ">
                {dettails.map((dettail) => {
                  return (
                    <li className="list-disc  ">
                      <p className="p-2">{dettail}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesHome;
