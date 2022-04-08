import React from "react";

export default function ProfileCard() {
  return (
    <div>
      <div className="relative p-10">
        <div className=" block m-auto text-center top-0 h-[350px] w-[450px] rounded-lg border-[1px]  shadow-md bg-opacity-80 shadow-gray-100/30 bg-blue-900">
          <h1 className="text-left p-4 text-sm text-gray-500">
            01 FEB, 2019 | TECHNOLOGY
          </h1>
          <h1 className="pt-0 pr-7 pl-7 pb-5">
            <span className="text-6xl relative top-5">"</span> Lorem Ipsum is
            simply dummy text of the printing and typesetting text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h1>
          <img className="block m-auto" src="/profile.svg" alt="" />
          <h1 className="text-lg pt-5 ">JOHN SMITH</h1>
          <h1 className="text-sm text-gray-400">
            Founder of Awesomeux Technology
          </h1>
        </div>
      </div>
    </div>
  );
}
