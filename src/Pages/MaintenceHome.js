import React from "react";

export default function MaintenceHome() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 h-[100vh] w-[100vw] bg-cover text-white ">
      <div className="pt-[0px] flex">
        <div className="w-[60vw] mt-[100px] p-4 pr-[110px] pl-[100px]">
          <h1 className="text-red-300 font-semibold text-2xl ">DAPPS</h1>
          <h1 className="font-bold text-[47px] md:text-[37px]">
          Technology made easier
          </h1>
          <p className="font xl:text-[20px] md:text-[17px]">
          Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.
          </p>
        </div>
        <img
          className="w-[70vw] h-[500px] p-1"
          src="/MaintenanceIllustration.svg"
          alt=""
        />
      </div>
    </div>
  );
}
