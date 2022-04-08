import React from "react";
import Ask from "../Components/Ask";
import ProfileCard from "../Components/ProfileCard";

export default function Review() {
  return (
    <div className=" relative h-[800px] bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="text-center ">
        <img className="absolute top-[-100px] xl:left-[35vw] md:left-[25vw]" src="/cricle.svg" alt="" />
        <h1 className="text-[28px] text-blue-600">Our Clien Review</h1>
    
        <h1 className="pt-6 text-lg">
          Subscribe to our newsletter for daily/weekly update of our products
          and services.
        </h1>
      </div>
      {/*  */}
      <div className=" flex justify-center m-auto ">
      <ProfileCard />
      <ProfileCard/>
      <ProfileCard/>
      </div>
      <Ask />
    </div>
  );
}
