import React from "react";
import Button from "../Ui/Button";
import videoBG from "../../assets/vid/videoBG.mp4";

const Header = () => {
  return (
    <>
      <div className=" flex h-[100vh] overflow-hidden  flex-col gap-4  items-center justify-center relative bg-black
       ">
       
         
        <div className="flex flex-col items-center  z-10   text-center text-primary">
          <h1 className=" text-[39px] tablet:text-[61px]  ">
            <span className="hidden tablet:inline ">LoshMedia: Proven</span>
            <span className="block tablet:hidden">LoshMedia </span>
            <span className="text-secondary"> Client Growth</span>, Pay When You
            See it.{" "}
          </h1>
          <h3 className=" text-[20px]  tablet:text-[31px] desktop:text-[25px]   font-light mb-8 max-w-[70%]  ">
            Your best choice for client growth, a foolproof solution with{" "}
            <span className="text-secondary">zero </span>risk{" "}
          </h3>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Header;
