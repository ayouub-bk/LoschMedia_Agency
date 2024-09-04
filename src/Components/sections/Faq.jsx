import React, { useState } from "react";
import { FaqData } from "../../data";
const Faq = () => {
  const [toggle, setToggle] = useState(null);
  const toggleIndex = (index) => {
    setToggle(toggle == index ? null : index);
  };

  return (
    <>
      <div className=" p-10 w-full flex flex-col items-center justify-center  gap-14  ">
        <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] ">
          Offers
        </h1>
        <div className=" w-full flex flex-col  gap-8    ">
          {FaqData.map((item, index) => {
            const { question, answer } = item;
            return (
              <div className="p-6  shadow-md  " key={index}>
                <div className="flex  items-center ">
                  <button
                    className="text-[28px] text-highlight w-[10%] "
                    onClick={() => toggleIndex(index)}
                  >
                    {toggle == index ? "-" : "+"}
                  </button>
                  <h2>{question} </h2>
                </div>
                <div
                  className={`${toggle === index ? `faq-open` : `faq-answer`}`}
                >
                  {answer.map((i) => {
                    return <p>{i}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
