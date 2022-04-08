import React from "react";

export default function JoinUs() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 h-[100vh] w-[100vw] bg-cover text-white ">
        <div className="h-1  ml-[100px] w-[40vw] bg-white"></div>
        <div className="pl-[100px]">
          <h1 className="font-bold text-[47px] md:text-[37px]">Join Us</h1>
        </div>
        <div className="pt-[0px] flex">
          <div className="xl:w-[60vw] md:w-[70vw] mt-[50px] p-4 pr-[110px] pl-[100px]">
            <h1 className="font-bold text-[47px] md:text-[37px]">
              BE A PART OF OUR HAPPY COMMUNITY
            </h1>
            <p className="font xl:text-[20px] md:text-[17px]">
              We take immense pride in our achievements and have a happy and
              satisfied community that trusts our work wholeheartedly. Then what
              are you waiting for ,come and be a part of the merklabs family,
              because we are here always for you.
            </p>
            <button className=" relative rounded-md  border-white-100 p-4 font-bold text-[19px] mt-10 ">
              <img className="shadow-2xl" src="/button.svg" alt="" />
              <h1 className="absolute top-8 right-12">Explor More</h1>
            </button>
          </div>
          <div className="hidden xl:block relative">
            <ul class=" absolute right-[140px] top-[-30px] list-none flex ">
              <li className="pr-[30px]">Node</li>
              <li className="pr-[30px]">Java</li>
              <li className="pr-[30px]">Curl</li>
            </ul>
            <img
              className=" w-[70vw] h-[400px] p-1 "
              src="/codesnip.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
