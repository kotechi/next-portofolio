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
    <div className="w-full h-auto px-5 space-y-4">
      {/* Top skill - now flex-col on mobile */}
      <div className="flex flex-col sm:flex-row sm:justify-center  space-y-4 sm:space-y-0">
        {/* Language */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md relative overflow-hidden">
            <div className="absolute m-3 px-2 z-10">
              <h1 className="relative text-2xl font-bold">
                <span className="z-20 opacity-75 text-[#af038a]">Language</span>
                <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                  Language
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full pt-16 px-4 overflow-x-auto">
              <div className="min-w-max">
                <Language />
              </div>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md relative overflow-hidden">
            <div className="absolute m-3 px-2 z-10">
              <h1 className="relative text-2xl font-bold">
                <span className="z-20 opacity-75 text-[#af038a]">DevOps</span>
                <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                  DevOps
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full pt-16 px-4 overflow-x-auto">
              <div className="min-w-max">
                <DevOps />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom skill - now flex-col on mobile */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Framework */}
        <div className="w-full sm:w-auto flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md relative overflow-hidden">
            <div className="absolute m-3 px-2 z-10">
              <h1 className="relative text-2xl font-bold">
                <span className="z-20 opacity-75 text-[#af038a]">
                  Framework
                </span>
                <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                  Framework
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full pt-16 px-4 overflow-x-hidden">
              <div className="min-w-max">
                <Framework />
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="w-full sm:w-auto flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-to-t bg-[#ff00f225] hover:bg-[#ff00f238] border-4 border-[#81007B] hover:border-[#ad00a5] rounded-md relative overflow-hidden">
            <div className="absolute m-3 px-2 z-10">
              <h1 className="relative text-2xl font-bold">
                <span className="z-20 opacity-75 text-[#af038a]">Tools</span>
                <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                  Tools
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full pt-16 px-4 overflow-x-hidden">
              <div className="min-w-max">
                <Tools />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
