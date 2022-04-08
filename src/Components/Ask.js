import React from "react";

export default function Ask() {
  return (
    <div className="relative p-10 xl:h-[220px] md:h-[280px] w-[100vw] bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="block m-auto right-0 left-0 top-[-200px] bottom-0  h-[100%] w-[80vw] bg-blue-800 rounded-2xl ">
     <div className="flex ">
        <h1 className="text-2xl xl:pr-[150px] pt-[50px]  p-10 text font-bold"> We've prepared everything, it's time for you to tell the problem</h1> 
        
        <div className="">
        <button className="hidden xl:block relative rounded-md  border-white-100 p-0 font-bold text-[19px] mt-10">
          <img className="shadow-2xl" src="/button.svg" alt="" />
          <h1 className="absolute top-4 left-6">Send Quote</h1>
        </button>
        </div>
        <div className="xl:pl-20 md:pt-7 xl:pt-0 pr-[30px]">
        <button className="  relative rounded-md  border-white-100 p-0 font-bold text-[19px] mt-10">
          <img className="shadow-2xl" src="/button.svg" alt="" />
          <h1 className="absolute xl:top-4 md:top-2 left-10">Ask</h1>
        </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}
