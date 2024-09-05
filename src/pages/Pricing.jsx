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
              className={`flex flex-col gap-6  p-6 rounded-md border-[1px] border-secondary  ${
                index == 0 ? `bg-secondary text-primary ` : ``
              } `}
            >
              <div className="flex justify-between   ">
                <h3>{titel}</h3>
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
                      <div>
                        <img src="" alt="" />
                        <p>{i.subtitle}</p>
                      </div>
                      <div>
                        <p>{i.name}</p>
                        {i.description.map((descrp) => {
                          return <p className="ml-2">. {descrp}</p>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="min-h-[230px] flex flex-col gap-4  ">
                <h2 className={`text-[25px] font-bold `}> Bonus </h2>
                <div className={`flex flex-col itmes-center gap-2   `}>
                  {bonus.map((b) => {
                    return (
                      <div>
                        <div>
                          <img src="" alt="" />
                          <p>{b.name}</p>
                        </div>
                        <div className="">
                          {b?.description?.map((d) => {
                            return <p className="ml-2  ">.{d}</p>;
                          })}
                        </div>
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
