import React from "react";

export default function Partner() {
  return (
    <div className=" relative h-160px w-[100vw] top-[-30px] z-50 text-white skew-y-1 ">
      <div className="absolute m-auto left-0 right-0 bg-gradient-to-r from-blue-900 via-indigo-200 to-blue-900 h-[150px] text-center p-4 w-[70vw] border-4 drop-shadow-lg rounded-xl">
        <h1 className="text-2xl font-semibold">
          Trusted by Leading Dapp Teams and Enterprises
        </h1>
        <div className="flex w-[100%] h-[40px] mt-6 justify-center">
          <img className="pl-4 pr-4 pt-2 " src="/logo1.svg" alt="" />
          <img className="pl-4 pr-4" src="/logo4.svg" alt="" />
          <img className="pl-4 pr-4" src="/logo3.svg" alt="" />
          <img className="pl-4 pr-4 pt-2" src="/logo5.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
