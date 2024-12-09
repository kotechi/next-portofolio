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
    <div className="min-h-screen no-scrollbar bg-black  overflow-hidden">
      
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-easing="linear"
        className="z-40 bg-gradient-to-b from-black to-[#920072] fixed top-4 left-0 right-0 mx-auto w-3/4 p-2 sm:p-4 flex justify-between items-center  rounded-bl-lg rounded-br-lg shadow-lg"
      >
        <div className="flex items-center">
          <div className="bg-gray-300 w-8 h-8 rounded-sm"></div>
          <span className="text-white ml-2 sm:ml-4 text-sm sm:text-medium md:text-lg">
            Aditiya{" "}
          </span>
          <span className="invisible hidden sm:visible sm:flex text-white text-sm sm:text-medium md:text-lg ml-1 ">
            {" "}
            Fathurrahman
          </span>
        </div>
        <div className="flex space-x-1 sm:space-x-4">
          <a
            href="#home"
            className="text-white text-sm sm:text-medium md:text-lg"
          >
            home
          </a>
          <a
            href="#home"
            className="text-white text-sm sm:text-medium md:text-lg"
          >
            home
          </a>
          <a
            href="#home"
            className="text-white text-sm sm:text-medium md:text-lg"
          >
            home
          </a>
          <a
            href="#home"
            className="text-white text-sm sm:text-medium md:text-lg"
          >
            home
          </a>
        </div>
      </nav>

      {/* floatingNav */}
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
      <ScrollHideDiv></ScrollHideDiv>
      {/* header */}
      <BackgroundBeamsWithCollision>
        <div className="text-center  tracking-tight">
          <div>
            <TypewriterEffectHeader />
            <div
              className="mt-1 relative"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-easing="linear"
              data-aos-anchor-placement="bottom-bottom"
            >
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <TextGenerateEffectHeader />
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* about */}
      <div
        id="about"
        className="bg-black bg-opacity-50 min-h-screen justify-center items-center flex"
      >
        <div className="flex w-3/4 ">
          {/* Bagian Kiri */}
          <div className="flex flex-col px-5 space-y-6 w-2/3 justify-center">
            <div className="bg-[#920072] h-52 rounded-lg"></div>
            <div className="bg-[#920072] h-52 rounded-lg"></div>
          </div>
          {/* Bagian Kanan */}
          <div className="bg-gradient-to-b from-[#920072] to-[#a55ea5] w-80 h-[452px] rounded-lg"></div>
        </div>
      </div>

      {/* skill */}
      <div id="skill w-screen h-screen bg-black">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mt-20 ">
            <h1 className=" relative text-4xl font-bold">
              <span className="z-20 opacity-75 text-[#af038a]">
                my skill experience
              </span>
              <span className="z-10 absolute inset-0 text-white transform translate-y-1">
                my skill experience
              </span>
            </h1>
          </div>
          <div className="main-skill w-screen h-screen justify-center flex py-14">
            <Skill />
          </div>
        </div>
      </div>

      {/* certificate */}
      <div
        id="certificate"
        className="w-screen h-screen flex flex-col items-center sm:items-start justify-center sm:justify-normal"
      >
        {/* mobile application */}
        <div className=" sm:hidden justify-center flex mb-4  items-center relative z-10">
          <h1 className=" relative  text-4xl font-bold">
            <span className="z-20 opacity-75 text-[#af038a]">
              my certificate
            </span>
            <span className="z-10 absolute inset-0 text-white transform translate-x-1 translate-y-1">
              my certificate
            </span>
          </h1>
        </div>

        {/* web application */}
        <div className="top-24 left-28 hidden sm:flex relative z-10">
          <h1 className=" relative text-4xl font-bold">
            <span className="z-20 opacity-75 text-[#af038a]">
              my certificate
            </span>
            <span className="z-10 absolute inset-0 text-white transform translate-x-1 translate-y-1">
              my certificate
            </span>
          </h1>
        </div>

        <div className="sm:flex-grow w-screen flex items-center">
          <div className=" flex-col w-screen flex justify-center">
            <CertificateCard />
            <div className=" w-full h-3 bg-[#af038a] my-6">
              <div className=" w-full  bg-white h-2 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
      <ThreeDCardDemo></ThreeDCardDemo>
      </div>
    </div>
  );
}
