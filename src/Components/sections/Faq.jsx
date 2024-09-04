import React, { useState } from "react";
import { FaqData } from "../../data";
const Faq = () => {
  const [toggle, setToggle] = useState(null);
  const toggleIndex = (index) => {
    setToggle(toggle === index ? null : index);
  };
  return (
    <>
      <div className="p-10 w-full flex flex-col items-center justify-center gap-14">
        <h1 className="highlighted-title text-secondary tablet:text-[48px] text-[39px] font-bold">
          FAQ
        </h1>
        <div className="h-full flex flex-col gap-10">
          {FaqData.map((item, index) => {
            const { question, answer } = item;
            return (
              <div className="p-4 shadow-md" key={index}>
                <div
                  className="flex items-center  cursor-pointer"
                  onClick={() => toggleIndex(index)}
                >
                  <button className="text-[28px] text-highlight w-[5%]">
                    {toggle === index ? "-" : "+"}
                  </button>
                  <h2 className="text-secondary text-[22px]">{question}</h2>
                </div>
                <div
                  className={`${toggle === index ? "faq-open" : "faq-answer"}`}
                >
                  {answer.map((i, idx) => (
                    <p key={idx}>{i}</p>
                  ))}
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
