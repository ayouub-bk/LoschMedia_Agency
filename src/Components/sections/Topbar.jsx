import React from "react";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <>
      <nav className="h-[63px] flex justify-center items-center">
        <div>Logo</div>
        <ul className="flex  ">
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
        <Button />
      </nav>
    </>
  );
};

export default Topbar;
