import React from "react";
import Button from "../Ui/Button";

const Header = () => {
  return (
    <>
      <div className="bg-black/30    flex  items-center justify-center  ">
        <div className="flex flex-col items-center gap-4 max-w-[80%] p-2 text-center text-primary">
          <h1 className=" text-[39px] tablet:text-[61px] font-bold tracking-wider  ">
            <span className="hidden tablet:block ">LoshMedia: Proven</span>
            <span className="block tablet:hidden">LoshMedia</span>
            <span className="text-secondary"> Client Growth</span>, Pay When You
            See it.{" "}
          </h1>
          <h3 className=" text-[20px]  tablet:text-[31px] desktop:text-[25px]   font-light mb-8 max-w-[70%]  ">
            Your best choice for client growth, a foolproof solution with{" "}
            <span className="text-secondary">zero </span>risk{" "}
          </h3>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Header;
