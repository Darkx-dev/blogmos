/* eslint-disable @next/next/no-img-element */
import React from "react";

const LargeCard = () => {
  return (
    <div
      className="big-card flex flex-col h-full w-full relative cursor-pointer items-end rounded-xl bg-cover bg-center shadow-sm shadow-[#ffffff3c] overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url(https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg)",
      // }}
    >
      <div className="w-full h-full">
        <img src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-fit rounded-lg p-2 backdrop-blur-md min-h-[30%]">
        <h2 className="text-pretty text-lg ">How to drive a car safely</h2>
        <p className="mt-3 text-xs font-light tracking-wide text-pretty">
          Ah, the joy of the open road—it’s a good feeling. But if ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ...{" "}
        </p>
      </div>
    </div>
  );
};

export default LargeCard;