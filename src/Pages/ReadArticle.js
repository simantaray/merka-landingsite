import React from "react";
import {
    ChevronLeftIcon,ChevronRightIcon
} from "@heroicons/react/outline"
function ReadArticle() {
  return (
    <div className="relative p-10 xl:h-[320px] md:h-[280px] w-[100vw] bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="absolute m-auto right-0 left-0 top-[-200px] bottom-0  h-[100%] w-[80vw] bg-blue-900 rounded-2xl flex">
        <img
          className="relative xl:top-[-20px] xl:h-[310px] xl:right-[-10px] md:top-[-30px] md:left-[-25px] md:h-[270px]"
          src="/map.svg"
          alt=""
        />
        <div className="xl:p-10 md:p-6 w-[50%]">
          <h1 className="underline font-semibold xl:text-xl md:text-lg pb-4">
            Read Article
          </h1>
          <h1 className="font-bold xl:text-2xl md:text-xl pb-6">
            The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own
            Consumer Data
          </h1>
          <h1 className="text-md">
            "These are companies, like intellicam, that are actually working to
            get our data onto personal servers so we own it, not the companies"
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ReadArticle;
