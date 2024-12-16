"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Skill } from "@/components/blocks/skill";
import { TextGenerateEffectHeader } from "@/components/blocks/header-text";
import { TypewriterEffectHeader } from "@/components/blocks/text-typewritter-effect";
import { FloatingDockBlock } from "@/components/blocks/navbar-docks";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beam";
import CertificateCard from "@/components/blocks/skillslider";
import ScrollHideDiv from "@/components/blocks/hideOnScroll";
import AOS from "aos";
import { ThreeDCardDemo } from "@/components/blocks/3d-card";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen no-scrollbar bg-black overflow-x-hidden">
      {/* Responsive Navbar */}
      <nav
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-easing="linear"
        className="z-40 bg-gradient-to-b from-black to-[#920072] fixed top-0 left-0 right-0 mx-auto w-full sm:w-3/4 p-2 sm:p-4 flex justify-between items-center rounded-bl-lg rounded-br-lg shadow-lg"
      >
        <div className="flex items-center">
          <span className="text-white ml-2 sm:ml-4 text-xs sm:text-sm md:text-lg">
            Aditiya <span className="hidden sm:inline">Fathurrahman</span>
          </span>
        </div>
        <div className="hidden sm:flex space-x-1 sm:space-x-4">
          <a href="#home" className="text-white text-xs sm:text-sm md:text-lg">
            home
          </a>
          <a href="#about" className="text-white text-xs sm:text-sm md:text-lg">
            about
          </a>
          <a href="#skill" className="text-white text-xs sm:text-sm md:text-lg">
            skills
          </a>
          <a
            href="#certificate"
            className="text-white text-xs sm:text-sm md:text-lg"
          >
            certificates
          </a>
        </div>

        {/* Mobile Menu Burger */}
        <div className="sm:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Floating Nav - Responsive */}
      <nav
        className=" absolute z-50
        sm:justify-center
        ml-7
        flex text-center  w-auto h-auto "
      >
        <div className="fixed bottom-0 left-0 p-4  z-50 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-0">
          <div className="flex justify-center sm:justify-start">
            <FloatingDockBlock />
          </div>
        </div>
      </nav>
      {/* header */}
      <BackgroundBeamsWithCollision>
        <div className="text-center tracking-tight pt-16">
          <TypewriterEffectHeader />
          <div
            className="mt-1 relative"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
          >
            {/* Gradients */}
            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <TextGenerateEffectHeader />
        </div>
      </BackgroundBeamsWithCollision>
      
      <div className="min-w-full h-24  bg-[#920072]">

      </div>
      {/* about */}
      <div
        id="about"
        className="bg-black bg-opacity-50 min-h-screen flex justify-center items-center px-4"
      >
        <div className="flex flex-col sm:flex-row w-full sm:w-3/4 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Left Section - Responsive */}
          <div className="flex flex-col space-y-4 w-full sm:w-2/3">
            <div className="bg-[#920072] h-40 sm:h-52 rounded-lg"></div>
            <div className="bg-[#920072] h-40 sm:h-52 rounded-lg"></div>
          </div>

          {/* Right Section - Responsive */}
          <div className="bg-gradient-to-b from-[#920072] to-[#a55ea5] w-full sm:w-80 h-80 sm:h-[452px] rounded-lg"></div>
        </div>
      </div>

      {/* Skill Section - Responsive */}
      <div id="skill" className="w-full min-h-screen bg-black mb-16">
        <div className="flex flex-col justify-center">
        <div className=" flex justify-center mb-2">
        <div>
          <h1 className="relative text-2xl sm:text-4xl font-bold my-6">
            <span className="z-20 opacity-75 text-[#af038a]">my skill experience</span>
            <span className="z-10 absolute inset-0 text-white transform translate-y-1">
            my skill experience
            </span>
          </h1>
          <div className=" flex justify-center">
            <div className="w-32 h-1 flex justify-center items-center  bg-white ">
              <div className=" w-8 h-2 bg-black text-white flex justify-center items-center font-bold">
                ⁜
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="main-skill w-full flex justify-center ">
            <Skill />
          </div>
        </div>
      </div>

      {/* Certificate Section - Already Responsive */}
      <div
        id="certificate"
        className="w-screen  flex flex-col items-center mb-16 justify-center "
      >
        {/* certificate title */}
        <div className="flex justify-center mb-28 ">
          <div>
            <h1 className="relative text-2xl sm:text-4xl font-bold my-6">
              <span className="z-20 opacity-75 text-[#af038a]">
                Certificates
              </span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                Certificates
              </span>
            </h1>
            <div className=" flex justify-center">
              <div className="w-32 h-1 flex justify-center items-center  bg-white ">
                <div className=" w-8 h-2 bg-black text-white flex justify-center items-center font-bold">
                  ⁜
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex-grow h-auto w-screen flex items-center">
          <div className=" flex-col w-screen flex justify-center">
            <CertificateCard />
            <div className=" w-full h-3 bg-[#af038a] my-6">
              <div className=" w-full  bg-white h-2 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* project */}
      <div className=" flex justify-center mb-2">
        <div>
          <h1 className="relative text-2xl sm:text-4xl font-bold my-6">
            <span className="z-20 opacity-75 text-[#af038a]">my projects</span>
            <span className="z-10 absolute inset-0 text-white transform translate-y-1">
              my projects
            </span>
          </h1>
          <div className=" flex justify-center">
            <div className="w-32 h-1 flex justify-center items-center  bg-white ">
              <div className=" w-8 h-2 bg-black text-white flex justify-center items-center font-bold">
                ⁜
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen overflow-x-auto flex justify-center">
        <ThreeDCardDemo />
      </div>
    </div>
  );
}
