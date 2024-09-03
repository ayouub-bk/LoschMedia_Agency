import React from "react";
import { Offers } from "../../data";

const OffersHome = () => {
  return (
    <div className=" flex flex-col items-center justify-center  gap-10 ">
      <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] ">
        Offers
      </h1>
      <div className="grid tablet:grid-cols-2 gap-20 grid-cols-1 ">
        {Offers.map((offer, index) => {
          const { titel, elemet, bonus } = offer;
          return (
            <div
              className={` hover:scale-50 transition-all shadow-lg p-6  ${
                index == 0 ? `bg-secondary` : ``
              } `}
            >
              <div className="flex justify-between ">
                <h3>{titel}</h3>
                {index == 1 && (
                  <div className="bg-highlight py-[6px] px-[8px] rounded-lg text-primary  ">
                    Guaranteed
                  </div>
                )}
              </div>
              <div className=" relative ">
                <h1 className="text-[54px] font-bold  ">Free</h1>
                {index == 1 && (
                  <p className="text-highlight absolute text-[15px] font-medium -bottom-1 left-24   ">
                    3 first clients only
                  </p>
                )}
              </div>

              <div>
                {elemet.map((i) => {
                  return (
                    <div>
                      <img src="" alt="" />
                      <p>{i}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h2> Bonus </h2>
                <div>
                  {bonus.map((b) => {
                    return (
                      <div>
                        <img src="" alt="" />
                        <p>{b}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OffersHome;
