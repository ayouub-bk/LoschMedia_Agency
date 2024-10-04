import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const Button = ({ click }) => {
  return (
    <>
      <button
        onClick={click}
        className="bg-highlight    z-10  text-primary hover:bg-hover1 p-2  text-[20px]  rounded-md transition-all  w-[185px] "
      >
        <HashLink to="/Contact#calendly">Book a Call</HashLink>
      </button>
    </>
  );
};

export default Button;
