import React from "react";
import Button from "../Ui/Button";

const Header = () => {
  return (
    <>
      <div className="bg-[url('./assets/imgs/StockImg.jpg')] flex h-[100vh] flex-col gap-4  items-center justify-center  ">
        <div className="flex flex-col items-center    px-8 text-center text-primary">
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
