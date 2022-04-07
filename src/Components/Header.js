import React from "react";

export default function Header() {
  return (
    <div className="bg-[url('/public/Header-bg.svg')] h-[96px] w-[100vw] text-white ">
      <div className="flex justify-center">
        <div className="pr-10">
          {/* logo */}
          <h1 className="text-[37px] font-semibold text-center p-[10%]">
            Merka
          </h1>
        </div>
        <div className="p-[30px] pl-[150px]">
          {/* menu */}
          <ul class="list-none flex">
            <li className="pr-[30px]">Home</li>
            <li className="pr-[30px]" >Project</li>
            <li className="pr-[30px]">Service</li>
            <li className="pr-[30px]">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
