import React, { useState } from "react";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.jpg";
const Topbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
      <nav className=" flex justify-between items-center p-4 px-20">
        <img className="w-[154px] h-[54px]  " src={logo} alt="" />
        <ul className="gap-12 text-secondary  text-xl hidden desktop:flex ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Offers">Offers</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>{" "}
          </li>
        </ul>
        <div className="hidden tablet:block">
          <Button />
        </div>
        <div className="tablet:hidden">
          <button onClick={() => setToggleSideBar(true)}>==+</button>
        </div>
        {toggleSideBar && (
          <div className=" p-10 bg-green-100 fixed top-0 right-0 bottom-0 left-0 tablet:hidden flex  items-center justify-center  ">
            <button
              className="fixed top-0 right-2"
              onClick={() => setToggleSideBar(false)}
            >
              X
            </button>
            <ul className="flex flex-col gap-10  ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Offers">Offers</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
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
