import React from "react";
import Logo from "../../assets/imgs/Logo.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import insta from "../../assets/icons/instagram1.png";
import fb from "../../assets/icons/fb.png";
import ButtonOffer from "../Ui/ButtonOffer";
import Button from "../Ui/Button";
const Footer = () => {
  return (
    <>
      <div className="w-full flex-col flex  desktop:flex-row justify-between items-center bg-secondary py-[24px] px-[96px] gap-10 ">
        <div className="flex flex-col  gap-6 items-center justify-between  ">
          <img
            className="rounded-lg object-fill "
            src={Logo}
            width="190px"
            height="130px"
            alt=""
          />
          <h1 className="font-bold text-primary text-[28px] xs:text-[40px]   ">
            Book a meeting now{" "}
          </h1>
          <div className="flex justify-center gap-8 ">
            <Button />
          </div>
        </div>
        <div className="flex   tablet:gap-44 gap-20">
          <div>
            <h2 className="text-primary text-[25px] mb-2 -tracking-tighter font-semibold  ">
              Links
            </h2>
            <ul className="text-primary text-[23px] flex flex-col gap-2">
              <li className="hover:text-highlight transition duration-100 text-[20px]">
                <HashLink to="/#servicesHome">Services</HashLink>
              </li>
              <li className="hover:text-highlight transition duration-100 text-[20px]">
                <HashLink to="/Pricing#offersPr">Offers</HashLink>
              </li>
              <li className="hover:text-highlight transition duration-100 text-[20px]">
                <HashLink to="/About#AboutSc">About</HashLink>
              </li>
              <li className="hover:text-highlight transition duration-100 text-[20px]">
                <HashLink to="/Contact#calendly">Contact</HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-primary text-[25px] mb-4  -tracking-tighter font-semibold ">
              Social Links
            </h2>
            <ul className="social-links flex flex-col justify-center   gap-4 items-center ">
              <li>
                <Link to="https://www.instagram.com/loschmedia/">
                  <img src={insta} alt="insta" width="40px" height="40px" />
                </Link>
              </li>

              <li>
                <Link to="https://www.instagram.com/loschmedia/">
                  <img
                    src={fb}
                    alt="facebook"
                    className="border-2 rounded-md "
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
