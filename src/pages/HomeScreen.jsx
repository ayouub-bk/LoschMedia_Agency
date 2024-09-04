import React from "react";
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
      <div className="flex flex-col w-screen items-center desktop:p-10  ">
        <div className="about-losch-media p-4 w-screen flex flex-col justify-center items-center mb-20 tablet:mb-0 ">
          <h1 className="highlighted-title hidden  tablet:block  tablet:text-secondary text-[48px]   ">
            About LoshMedia
          </h1>

          <h1 className="highlighted-title  tablet:hidden w-[180px]    text-secondary text-[39px] ">
            About us
          </h1>

          <div className="desktop:w-[1005px] desktop:h-[620px] w-screen h-screen  tablet:h-[531px] flex flex-col gap-6 p-6   pt-10 ">
            <div className="tablet:w-[60%]   h-[60%] tablet:self-end   ">
              <img className="w-full h-full rounded-lg " src={img1} alt="img" />
            </div>
            <div className="tablet:w-[60%] tablet:h-[60%] h-full rounded-lg  p-4  bg-primary text-center  shadow-md text-[16px] relative tablet:-mt-32   ">
              <p className="desktop:leading-7 ">
                <span className="text-secondary font-bold  ">LoschMedia</span>{" "}
                is a dynamic B2B marketing agency revolutionizing client
                acquisition. We specialize in transforming potential customers
                into loyal advocates. Our data-driven approach, combined with
                proven strategies informed by real-world business experts,
                delivers exceptional results. By harnessing the power of our
                Ultimate Client Growth Engine, we guarantee to propel your
                business to new heights. Discover how LoschMedia can be your
                partner in achieving unparalleled success. Ready to experience
                the difference? Let's discover how we can revolutionize your
                business together.
              </p>
              <Link
                className="text-highlight absolute bottom-0 right-2 text-sm desktop:text-lg "
                to="About"
              >
                Read more ...
              </Link>
            </div>
          </div>
        </div>
        <TestimonailsHome />
        <ServicesHome />
        <OffersHome />
        <Faq />
      </div>
    </>
  );
};

export default HomeScreen;
