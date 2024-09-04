import React from "react";
import Button from "../Ui/Button";
import Logo from "../../assets/imgs/Logo.jpg";
import { Link } from "react-router-dom";
import insta from "../../assets/icons/instagram1.png";
import linkeIn from "../../assets/icons/linkedin1.png";
import youtub from "../../assets/icons/youtube.png";
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
            <button className="p-2 bg-primary  text-secondary  rounded-lg  ">
              Book a Call{" "}
            </button>
            <button className="p-2 bg-primary  text-secondary  rounded-lg  ">
              More Dettails
            </button>
          </div>
        </div>
        <div className="flex tablet:gap-44 gap-20">
          <div>
            <h2 className="text-primary text-[25px]">Links</h2>
            <ul className="text-primary text-[23px] flex flex-col gap-2 ">
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Offers</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-primary text-[25px] mb-2 ">Social Links</h2>
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
