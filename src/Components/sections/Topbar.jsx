import React, { useState } from "react";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.jpg";
import menu from "../../assets/icons/bars-solid.svg";
const Topbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
      <nav className=" flex justify-between items-center p-4 tablet:px-20 px-10   shadow-md ">
        <Link to="/">
          <img className="w-[154px] h-[54px]" src={logo} alt="" />
        </Link>
        <ul className="gap-12 text-secondary  text-xl hidden desktop:flex ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pricing">Offers</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden tablet:block">
          <Button />
        </div>
        <div className="tablet:hidden">
          <button onClick={() => setToggleSideBar(!toggleSideBar)}>
            <img height="22" width="32" src={menu} alt="menu" />
          </button>
        </div>
        {toggleSideBar && (
          <div className=" z-10  bg-primary fixed inset-0 tablet:hidden flex  items-center justify-center  ">
            <button
              className="fixed top-6 right-6 text-secondary text-[30px] font-bold   "
              onClick={() => setToggleSideBar(!toggleSideBar)}
            >
              X
            </button>
            <ul className="flex flex-col gap-10 text-[20px] font-bold w-full  text-center -tracking-tighter  ">
              <li className="border-b-2 border-b-secondary pb-4 text-secondary">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b-2 border-b-secondary pb-4 text-secondary">
                <Link to="/Offers">Offers</Link>
              </li>
              <li className="border-b-2 border-b-secondary pb-4 text-secondary">
                <Link to="/About">About</Link>
              </li>
              <li className="border-b-2 border-b-secondary pb-4 text-secondary">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Topbar;
