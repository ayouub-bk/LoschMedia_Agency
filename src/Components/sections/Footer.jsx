import React from "react";
import Logo from "../../assets/imgs/Logo.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import insta from "../../assets/icons/instagram1.png";
import linkeIn from "../../assets/icons/linkedin1.png";
import youtub from "../../assets/icons/youtube.png";
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
            height="80"
            alt=""
          />
          <h1 className="font-bold text-primary text-[24px]  ">
            Book a meeting now{" "}
          </h1>
          <div className="flex justify-center gap-8 ">
            <Button />
          </div>
        </div>
        <div className="flex tablet:gap-44 gap-20">
          <div>
            <h2 className="text-primary text-[25px] mb-2 -tracking-tighter font-semibold  ">
              Links
            </h2>
            <ul className="text-primary text-[23px] flex flex-col gap-2 ">
              <li>
                <HashLink to="/#servicesHome">Services</HashLink>
              </li>
              <li>
                <HashLink to="/Pricing#offersPr">Offers</HashLink>
              </li>
              <li>
                <HashLink to="/About#AboutSc">About</HashLink>
              </li>
              <li>
                <HashLink to="/Contact#calendly">Contact</HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-primary text-[25px] mb-4  -tracking-tighter font-semibold ">
              Social Links
            </h2>
            <ul className="social-links flex  flex-col  gap-4 items-center ">
              <li>
                <Link to="https://www.instagram.com/karichahid/">
                  <img src={insta} alt="insta" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/chahidkari/">
                  <img src={linkeIn} alt="linkedIn" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@ChahidKari">
                  <img src={youtub} alt="youtub" />
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
