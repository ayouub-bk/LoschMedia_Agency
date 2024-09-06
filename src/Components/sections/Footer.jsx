import React from "react";
import Button from "../Ui/Button";
import Logo from "../../assets/imgs/Logo.jpg";
import { Link } from "react-router-dom";
import insta from "../../assets/icons/instagram1.png";
import linkeIn from "../../assets/icons/linkedin1.png";
import youtub from "../../assets/icons/youtube.png";
import ButtonOffer from "../Ui/ButtonOffer";
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
            <ButtonOffer
              BgColor="highlight"
              Textcolor="primary"
              title="Book a Call"
            />
            <ButtonOffer
              BgColor="primary"
              Textcolor="black"
              title="More Details"
            />
          </div>
        </div>
        <div className="flex tablet:gap-44 gap-20">
          <div>
            <h2 className="text-primary text-[25px] mb-2 -tracking-tighter font-semibold  ">
              Links
            </h2>
            <ul className="text-primary text-[23px] flex flex-col gap-2 ">
              <li>
                <Link to="#Services">Services</Link>
              </li>
              <li>
                <Link to="Pricing">Offers</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
              <li>
                <Link to="Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-primary text-[25px] mb-4  -tracking-tighter font-semibold ">
              Social Links
            </h2>
            <ul className="social-links flex  flex-col  gap-4 items-center ">
              <li>
                <Link>
                  <img src={insta} alt="insta" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={linkeIn} alt="linkedIn" />
                </Link>
              </li>
              <li>
                <Link>
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
