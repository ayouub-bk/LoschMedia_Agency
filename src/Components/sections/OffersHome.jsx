import React, { useState } from "react";
import { Offers } from "../../data";

import checkIcon from "../../assets/icons/circle-check-solid.svg";
import ButtonOffer from "../Ui/ButtonOffer";

const OffersHome = () => {
  const [hover, setHover] = useState(false);
  let n = hover ? Offers[1].elemet.length : 4;
  return (
    <div className=" flex flex-col items-center justify-center  gap-10 ">
      <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] p-20 ">
        Offers
      </h1>
      <div className="grid tablet:grid-cols-2  gap-10 grid-cols-1 ">
        {Offers.map((offer, index) => {
          const { titel, elemet, bonus } = offer;
          return (
            <div
              className={`flex flex-col gap-6  p-6 rounded-lg border-[1px] border-secondary  ${
                index == 0 ? `bg-secondary text-primary ` : ``
              } `}
            >
              <div className="flex justify-between   ">
                <h3>{titel}</h3>
                {index == 1 && (
                  <div className="bg-highlight py-[6px] px-[8px] rounded-2xl text-primary  text-[13px]  ">
                    Guaranteed
                  </div>
                )}
              </div>
              <div className=" relative  ">
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
                {elemet.slice(0, n).map((i) => {
                  return (
                    <div className="flex  gap-4 items-center ">
                      <img
                        className=""
                        height="24px"
                        width="24px"
                        src={checkIcon}
                        alt="icon"
                      />
                      <p>{i.subtitle}</p>
                    </div>
                  );
                })}
              </div>
              <div className="min-h-[300px] flex flex-col gap-4 mt-10 ">
                <h2
                  className={`text-[25px] font-bold ${
                    index != 0 ? `text-secondary` : ``
                  } `}
                >
                  {" "}
                  Bonus{" "}
                </h2>
                <div className={`flex flex-col itmes-center gap-2   `}>
                  {bonus.map((b) => {
                    return (
                      <div className="flex items-center  gap-4 ">
                        <p
                          className={` font-extrabold  text-[30px] ${
                            index == 0 ? `text-primary` : `text-secondary`
                          }`}
                        >
                          +
                        </p>{" "}
                        <p>{b.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" flex justify-between ">
                <ButtonOffer
                  title="Get started"
                  BgColor="highlight"
                  Textcolor="primary"
                />
                <ButtonOffer
                  title="More dettails"
                  BgColor={index !== 0 ? "secondary" : "primary"}
                  Textcolor={index !== 0 ? "primary" : "highlight"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OffersHome;
