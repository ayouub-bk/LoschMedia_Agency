import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <>
      <button className="bg-highlight text-primary hover:bg-hover1 p-2  text-[20px]  rounded-md transition-all  w-[185px] ">
        <Link to="/Contact#calendly">Book a Call</Link>
      </button>
    </>
  );
};

export default Button;
