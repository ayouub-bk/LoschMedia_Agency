import React, { useState } from "react";
import { FaqData } from "../../data";
import Accordion from "../Ui/Accordion";
const Faq = () => {
  return (
    <>
      <div className="p-10 w-full flex flex-col items-center justify-center gap-14">
        <h1 className="highlighted-title text-secondary tablet:text-[48px] text-[39px] font-bold">
          FAQ
        </h1>
        <div className=" p-4">
          {FaqData.map((item, index) => {
            const { question, answer } = item;
            return <Accordion Q={question} A={answer} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
