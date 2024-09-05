import React from "react";
import { Offers } from "../data";
import Button from "../Components/Ui/Button";

const Pricing = () => {
  return (
    <div className="desktop:p-20 p-10 flex flex-col justify-center items-center ">
      <div className="desktop:mb-20 mb-10 text-secondary text-center ">
        <h1 className="text-[48px] mb-2">Choose a Plan</h1>
        <h3 className="text-[39px] font-light ">to get started</h3>
      </div>
      <div className="flex  flex-col   gap-20 desktop:w-[700px] w-full  ">
        {Offers.map((offer, index) => {
          const { titel, elemet, bonus } = offer;
          return (
            <div
              className={`flex flex-col gap-6  p-6 rounded-2xl border-[1px] border-secondary  ${
                index == 0 ? `bg-secondary text-primary ` : ``
              } `}
            >
              <div className="flex justify-between   ">
                <h3 className="font-semibold">{titel}</h3>
                {index == 1 && (
                  <div className="bg-highlight py-[6px] px-[8px] rounded-lg text-primary  text-[13px]  ">
                    Guaranteed
                  </div>
                )}
              </div>
              <div className=" relative    ">
                <h1 className="text-[54px] font-bold  ">Free</h1>
                {index == 1 && (
                  <p className="text-highlight absolute text-[15px] font-medium -bottom-1 left-24   ">
                    3 first clients only
                  </p>
                )}
              </div>

              <div
                className="flex flex-col gap-4  "
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {elemet.map((i) => {
                  return (
                    <div className="">
                      <div
                        className={` ${
                          index === 0 ? `text-black ` : `text-secondary`
                        }`}
                      >
                        <img src="" alt="" />
                        <p className="text-[14px] mb-2 font-bold -tracking-tighter">
                          {i.subtitle}
                        </p>
                      </div>
                      <div className="text-[16px]">
                        <p className="font-semibold">{i.name}</p>
                        <ul className="p-2">
                          {i.description.map((descrp) => {
                            return (
                              <li
                                className={` ml-4 mb-2  ${
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
                  <h2
                    className={`text-[25px] font-bold mb-2 ml-4 text-secondary `}
                  >
                    {" "}
                    Guarunti{" "}
                  </h2>
                )}
                {offer.Guarunti?.map((G) => {
                  const { title, dettail } = G;
                  return (
                    <div className="flex flex-col  gap-4 ">
                      <div className="flex items-center gap-4 ">
                        <p className="text-[30px] text-secondary font-extrabold ">
                          +
                        </p>
                        <h2 className="font-semibold">{title}</h2>
                      </div>

                      <p className="mt-2">{dettail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="min-h-[230px] flex flex-col gap-4  ">
                <h2
                  className={` ml-4 text-[25px] font-bold ${
                    index == 0 ? `` : `text-highlight`
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
                          <p className="text-[30px] text-secondary  font-extrabold ">
                            +
                          </p>
                          <p className="font-semibold">{b.name}</p>
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

              <Button />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
