import React, { useRef } from "react";
import Button from "../Components/Ui/Button";
import Calendly from "../Components/sections/Calendly";

const Contact = () => {
  const section1 = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <header className=" bg-custom-radial py-20 px-10  flex justify-center items-center p-4 relative">
        <div className="flex flex-col gap-[30px] items-center desktop:w-[1008px] text-center text-primary ">
          <h1 className=" text-[31px] tablet:text-[61px] font-bold   ">
            Let's Make it happen
          </h1>
          <p className=" text-[37px] tablet:text-[61px]  ">
            Partner with Us and Watch Your Customers Grow!
          </p>
          <Button click={() => scrollToSection(section1)} />
        </div>
      </header>
      <section ref={section1} id="calendly">
        <Calendly />
      </section>
    </div>
  );
};

export default Contact;
