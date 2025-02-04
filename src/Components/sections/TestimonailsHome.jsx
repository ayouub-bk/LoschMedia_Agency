import React from "react";
import video from "../../assets/vid/1st-testimonial.mp4";
import { Link } from "react-router-dom";
import commmas from "../../assets/icons/commas1.png";
import profile from "../../assets/imgs/Wail.jpg";
import more from "../../assets/icons/more1.png";

const TestimonailsHome = () => {
  return (
    <div className="p-6 w-full flex flex-col items-center gap-4 ">
      <h1 className="highlighted-title text-secondary tablet:text-[48px] text-[39px]  ">
        Testimonials
      </h1>
      <div className="flex flex-col desktop:flex-row   justify-center gap-12 w-full mt-6">
        <div className="desktop:w-[35%]   w-full  border-secondary border-solid  border-8 rounded-md ">
          <video className="h-full z-20 " src={video} controls></video>
        </div>
        <div className="py-[10px] px-[22px]  shadow-md relative w-full desktop:w-[55%] flex flex-col justify-between  gap-2">
          <div className="flex justify-between px-4  ">
            <img className="" src={commmas} height="43px" width="43" alt="" />
            <img height="43px" width="43" src={more} alt="..." />
          </div>
          <p className="text-[20px]">
            I want to thank LoshMedia, especially Shahid, for helping me realize
            my agency's mistake. He helped me create a new offer based on
            value, not price. LoshMedia provided a consultation day and didn't
            require upfront payment. They asked for a testimonial only and they
            deserve it. I highly recommend them for scaling your business.
          </p>
          <div className=" flex justify-between items-center  ">
            <div className="flex gap-4 ">
              <img src={profile} className="w-12 h-12 rounded-full" />
              <div className="text-secondary">
                <h2 className="text-[23px]">Wail dehar</h2>
                <p className=" opacity-50 text-[13px] object-cover  ">
                  CEO of a video editing agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonailsHome;
