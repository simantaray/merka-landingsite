import React from "react";

export default function Header() {
  return (
    <div className="bg-[url('/public/Header-bg.svg')] h-[96px] w-[100vw] text-white ">
      <div className="flex justify-between pr-10 pl-[150px]">
        <div className="pr-10">
          {/* logo */}
          <h1 className="text-[37px] font-semibold text-center p-[10%]">
            Merka
          </h1>
        </div>
        <div className="p-[30px] pl-[150px]">
          {/* menu */}
          <ul class="list-none flex">
            <li className="xl:pr-[70px] md:pr-[45px] cursor-pointer ">Home</li>
            <li className="xl:pr-[70px] md:pr-[45px] cursor-pointer " >Project</li>
            <li className="xl:pr-[70px] md:pr-[45px] cursor-pointer ">Service</li>
            <li className="xl:pr-[70px] md:pr-[45px] cursor-pointer ">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
