import React from "react";
import video from "../../assets/vid/1st-testimonial.mp4";
import { Link } from "react-router-dom";
import commmas from "../../assets/icons/commas1.png";
import profile from "../../assets/imgs/StockImg.jpg";
import more from "../../assets/icons/more1.png";

const TestimonailsHome = () => {
  return (
    <div className="p-6 w-full flex flex-col items-center gap-4 ">
      <h1 className="highlighted-title text-secondary tablet:text-[48px] text-[39px]  ">
        Testimonials
      </h1>
      <div className="flex justify-center desktop:gap-12 w-full pt-6">
        <div className="desktop:w-[35%] w-full border-secondary border-solid border-8 rounded-md ">
          <video src={video} width="100%" height="100%" controls></video>
        </div>
        <div className="p-4 shadow-md relative w-[40%] flex flex-col justify-between ">
          <img
            className="absolut top-2 left-2"
            src={commmas}
            height="56px"
            width="43"
            alt=""
          />
          <p>
            I want to thank LoshMedia, especially Shahid, for helping me realize
            my agency's mistake. He helped me create a new offer based on
            value, not price. LoshMedia provided a consultation day and didn't
            require upfront payment. They asked for a testimonial only and they
            deserve it. I highly recommend them for scaling your business.
          </p>
          <div className=" flex justify-between items-center ">
            <div className="flex gap-2 ">
              <img
                src={profile}
                height="60px"
                width="60px"
                className="rounded-xl"
              />
              <div>
                <h2>Kari chahid</h2>
                <p>LoshMedia CEO</p>
              </div>
            </div>

            <div className="self-end">
              <Link to="/testimonial">
                See all <img src={more} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonailsHome;
