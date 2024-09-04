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
      <div className="w-full  flex justify-between ">
        <div>
          <img src={Logo} alt="" />
          <h1 className="font-bold">Book a meeting now </h1>
          <div className="flex justify-center ">
            <Button />
            <Button />
          </div>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
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
          <h2>Social Links</h2>
          <ul>
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
    </>
  );
};

export default Footer;
