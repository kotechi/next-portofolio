"use client";
import Image from "next/image";
import $ from "jquery";
import { useEffect } from "react";
import { Framework, Tools, DevOps, Language } from "./tooltip";

const data_Language = [
  { name: "Javascript", src: "/images/Javascript-icon.png" },
  { name: "Python", src: "/images/python-language.png" },
  { name: "C++", src: "/images/c++.png" },
  { name: "PHP", src: "/images/php.png" },
  { name: "Dart", src: "/images/dart.png" },
  { name: "Dart", src: "/images/dart.png" },
  { name: "Dart", src: "/images/dart.png" },
  { name: "Dart", src: "/images/dart.png" },
];

export function Skill() {
  return (
    <div className="w-full h-full px-20 space-y-4">
      {/* top skill */}
      <div className="flex justify-center space-x-4 ">

        {/* Language */}
        <div className="w-3/5 h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B]  hover:border-[#ad00a5] rounded-md">
          <div className="absolute m-3 px-2">
            <h1 className=" relative text-2xl font-bold">
              <span className="z-20 opacity-75 text-[#af038a]">
                Programming Language
              </span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                Programming Language
              </span>
            </h1>
          </div>
          <div className="flex space-x-3 w-full h-full pt-16 px-4">
            <Language></Language>
          </div>
        </div>

        {/* DevOps */}
        <div className="w-2/5 h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238]  border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md">
          <div className="absolute m-3 px-2">
            <h1 className=" relative text-2xl font-bold">
              <span className="z-20 opacity-75 text-[#af038a]">DevOps</span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                DevOps
              </span>
            </h1>
          </div>
          <div className="flex space-x-3 w-full h-full pt-16 px-4">
            <ul className="w-full h-full flex items-center text-white space-x-3">
              <li className="flex flex-col justify-center">
                <span className="flex justify-center">
                  <img
                    className="w-16 h-16 grayscale hover:grayscale-0"
                    src="/images/Javascript-icon.png"
                    alt=""
                  />
                </span>
                <span>Javascript</span>
              </li>
              <li className="flex flex-col justify-center">
                <span className="flex justify-center">
                  <img
                    className="w-16 h-16 grayscale hover:grayscale-0"
                    src="/images/Javascript-icon.png"
                    alt=""
                  />
                </span>
                <span>Javascript</span>
              </li>
              <li className="flex flex-col justify-center">
                <span className="flex justify-center">
                  <img
                    className="w-16 h-16 grayscale hover:grayscale-0"
                    src="/images/Javascript-icon.png"
                    alt=""
                  />
                </span>
                <span>Javascript</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom skill */}
      <div className="flex justify-center space-x-4 ">

        {/* Framework */}
        <div className="w-1/2 h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md">
          <div className="absolute m-3 px-2">
            <h1 className=" relative text-2xl font-bold">
              <span className="z-20 opacity-75 text-[#af038a]">Framework</span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                Framework
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-3 w-full h-full pt-16 px-4">
          <Framework></Framework>
          </div>
          
        </div>

        {/* Tools */}
        <div className="w-1/2 h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238]  border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md">
          <div className="absolute m-3 px-2">
            <h1 className=" relative text-2xl font-bold">
              <span className="z-20 opacity-75 text-[#af038a]">Tools</span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                Tools
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-3 w-full h-full pt-16 px-4">
          <Tools></Tools>
          </div>
        </div>
      </div>
    </div>
  );
}
