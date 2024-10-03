import React, { useState } from "react";
import { FaqData } from "../../data";
import Accordion from "../Ui/Accordion";
const Faq = () => {
  return (
    <>
      <div className="p-10 flex flex-col items-center justify-center ">
        <h1 className="highlighted-title text-secondary tablet:text-[48px] text-[39px] my-10 font-bold">
          FAQ
        </h1>
        <div className=" flex flex-col gap-4 ">
          {FaqData.map((item, index) => {
            const { question, answer } = item;
            return <Accordion Q={question} A={answer} Index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
