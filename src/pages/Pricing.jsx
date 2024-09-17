import React from "react";
import { Offers } from "../data";
import Button from "../Components/Ui/Button";
import checkIcon from "../assets/icons/circle-check-solid.svg";
import { h3 } from "framer-motion/client";

const Pricing = () => {
  return (
    <div className="desktop:p-20 p-10 flex flex-col justify-center items-center ">
      <div className="desktop:p-20 p-12   text-secondary text-center  ">
        <h1 className="text-[48px] mb-2 font-bold   ">Choose a Plan</h1>
        <h3 className="text-[39px] font-light -tracking-tighter ">
          to get started
        </h3>
      </div>
      <div
        className="flex  flex-col   gap-28 tablet:w-[700px] w-full  "
        id="offersPr"
      >
        {Offers.map((offer, index) => {
          const { titel, elemet, bonus, start, fin } = offer;
          return (
            <div
              className={`flex flex-col gap-6  p-6 rounded-2xl border-[2px] border-secondary  ${
                index == 1
                  ? `bg-secondary text-primary `
                  : `border-t-[6px] border-t-highlight `
              } `}
            >
              <div className="flex justify-between   ">
                <h3 className="font-semibold">{titel}</h3>
                {index == 0 && (
                  <div className="bg-highlight py-[6px] px-[8px] rounded-lg text-primary  text-[13px] cursor-pointer ">
                    Guaranteed
                  </div>
                )}
              </div>
              <div className=" relative    ">
                <h1 className="text-[54px] font-bold  ">Free</h1>
                {index == 0 && (
                  <p className="text-highlight absolute text-[15px] font-medium -bottom-1 left-24  cursor-pointer ">
                    3 first clients only
                  </p>
                )}
              </div>
              <div className=" leading-7 pt-4 flex flex-col gap-4 ">
                {start.map((T, idx) => {
                  return (
                    <h3
                      className={`${
                        idx == 1 ? "text-center p-2 text-[20px]  " : ""
                      }`}
                    >
                      {T}
                    </h3>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4  ">
                {elemet.map((i) => {
                  return (
                    <div className="">
                      <div
                        className={` flex gap-4 intems-center   ${
                          index === 1
                            ? `text-black font-bold`
                            : `text-secondary`
                        }`}
                      >
                        <img
                          className=""
                          height={i.subtitle ? "24px" : "0px"}
                          width={i.subtitle ? "24px" : "0px"}
                          src={checkIcon}
                          alt="icon"
                        />
                        <p className="text-[16px] py-2 font-bold -tracking-tighter cursor-pointer ">
                          {i.subtitle}
                        </p>
                      </div>
                      <div className="text-[16px]">
                        <p className="font-semibold">{i.name}</p>
                        <ul className="p-2">
                          {i.description.map((descrp) => {
                            return (
                              <li
                                className={` ml-4 my-2  ${
                                  descrp !== "" ? `list-disc` : ``
                                }`}
                              >
                                {descrp}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                {offer.Guarunti && (
                  <div>
                    <h2
                      className={`text-[25px] font-bold mb-2 ml-4 text-secondary  cursor-pointer`}
                    >
                      {" "}
                      Guarunti{" "}
                    </h2>
                    <h3 className="text-highlight text-[20px] my-4 ">
                      1 - Results-Only Guarantee
                    </h3>
                  </div>
                )}
                {offer.Guarunti?.map((G) => {
                  const { title, dettail } = G;
                  return (
                    <div className="flex flex-col  gap-4 p-2">
                      <div className="flex items-center gap-4 ">
                        <p className="text-[30px] text-secondary font-extrabold ">
                          +
                        </p>
                        <h2 className="font-semibold cursor-pointer ">
                          {title}
                        </h2>
                      </div>

                      <p className="mt-2  ">{dettail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="min-h-[230px] flex flex-col gap-4  ">
                <h2
                  className={` ml-4 text-[25px] font-bold ${
                    index == 1 ? `` : `text-highlight`
                  } `}
                >
                  {" "}
                  Bonus{" "}
                </h2>
                <div className={`flex flex-col itmes-center gap-2   `}>
                  {bonus.map((b) => {
                    return (
                      <div>
                        <div className="flex gap-4 items-center  ">
                          <p
                            className={`text-[30px] font-extrabold ${
                              index == 0 ? "text-secondary" : "text-primary"
                            }`}
                          >
                            +
                          </p>
                          <p className="font-semibold cursor-pointer ">
                            {b.name}
                          </p>
                        </div>
                        <ul className="flex flex-col mt-2 p-2">
                          {b.description &&
                            b.description.map((d) => {
                              return (
                                <li
                                  className={` ml-4 ${
                                    d !== "" ? `list-disc` : ``
                                  }`}
                                >
                                  {d}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-center leading-7 ">{fin}</h3>
              </div>
              <div className="w-full">
                <button className="bg-highlight rounded-xl w-full text-primary font-semibold text-[20px] hover:bg-hover1   duration-[.5s]   p-2">
                  Get started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
