import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const PopOver = ({icon, heading, number, cls, iconBgColorCls}) => {
  return (
    <div className="">
      {/* <div className="absolute top-[230px] left-[593px]  w-[180px] h-[72px] "> */}
      <div className={`absolute ${cls} `} >
        <div className=" flex flex-col  ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row py-1.5 shadow-2xl px-2.5 items-center justify-start gap-[12px] hover:scale-125">
            <div className={`p-2 text-2xl ${iconBgColorCls} text-white rounded-md shadow-sm`}>
              {icon}
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light" style={{margin: '-0.2em 0'}}>
                {heading}
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                {number}
              </div>
            </div>
          </div>
          <div className="flex relative justify-center -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>

    </div>
  );
};


export default PopOver
