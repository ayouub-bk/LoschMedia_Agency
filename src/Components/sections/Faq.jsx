import React from "react";
import { FaqData } from "../../data";
const Faq = () => {
  return (
    <>
      <div className=" p-10 w-full flex flex-col items-center justify-center  gap-14  ">
        <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] ">
          Offers
        </h1>
        <div className=" w-full flex flex-col  gap-8    ">
          {FaqData.map((item) => {
            const { question, answer } = item;
            return (
              <div className="p-4 shadow-md  ">
                <p className="text-[19px] text-secondary ">{question}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
