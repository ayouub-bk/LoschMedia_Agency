import React from "react";
import { useRef, useEffect } from "react";
import Header from "../Components/sections/Header";
import img1 from "../assets/imgs/aobut.jpg";
import { Link } from "react-router-dom";
import TestimonailsHome from "../Components/sections/TestimonailsHome";
import ServicesHome from "../Components/sections/ServicesHome";
import OffersHome from "../Components/sections/OffersHome";
import Faq from "../Components/sections/Faq";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-[100%] items-center desktop:p-10 p-6   ">
        <div className="about-losch-media p-4 w-screen flex flex-col justify-center items-center mb-20 tablet:mb-0 ">
          <h1 className="highlighted-title hidden  tablet:block  tablet:text-secondary text-[48px]   ">
            About LoshMedia
          </h1>

          <h1 className="highlighted-title  tablet:hidden     text-secondary text-[39px] ">
            About us
          </h1>

          <div className="desktop:w-[1005px] desktop:h-[620px] w-screen h-screen  tablet:h-[531px] flex flex-col gap-6 p-6   pt-10 ">
            <div className="tablet:w-[60%]   h-[60%] tablet:self-end   ">
              <img className="w-full h-full rounded-lg " src={img1} alt="img" />
            </div>
            <div className="tablet:w-[60%] tablet:h-[60%] h-full rounded-lg  p-4  bg-primary text-center  shadow-md text-[16px] relative tablet:-mt-32   ">
              <p className="desktop:leading-7  text-center ">
                <span className="text-secondary font-bold  ">LoschMedia</span>{" "}
                Losch Media is a customer acquisition agency that specializes in
                providing guaranteed results for B2B businesses. Through
                world-class marketing and sales strategies, we turn leads into
                loyal, paying customers. Offering a comprehensive "done-for-you"
                program, we only get paid for the clients we bring
                in—eliminating any risk for our clients. Powered by proven
                techniques from industry leaders like Russell Brunson and Alex
                Hormozi, Losch Media focuses on data-driven methods to ensure
                real business growth, all while delivering exceptional value and
                unmatched expertise
              </p>
              <Link
                className="text-highlight absolute bottom-0 desktop:bottom-2  right-2 text-sm desktop:text-lg "
                to="About"
              >
                Read more ...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <TestimonailsHome />
        </div>
        <div>
          <ServicesHome />
        </div>
        <div>
          <OffersHome />
        </div>
        <div className="w-full">
          <Faq />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
