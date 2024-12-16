"use client";
import Image from "next/image";

import React, { useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const DevOps = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const Data = [
    {
      id: 1,
      name: "Docker",
      image: "/images/idx.png",
    },
    {
      id: 2,
      name: "Kubernetes",
      image: "/images/idx.png",
    },
    {
      id: 3,
      name: "Project IDX",
      image: "/images/idx.png",
    },
    {
      id: 4,
      name: "Github",
      image: "/images/github.png",
    },
    {
      id: 5,
      name: "AWS",
      image: "/images/aws.png",
    },
  ];

  return (
    <div className="flex space-x-3 flex-row items-center justify-center">
      {Data.map((testimonial, idx) => (
        <div
          className="relative min-w-16 group flex justify-center items-center"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12 flex text-xs flex-col items-center justify-center rounded-md bg-black z-30 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={testimonial.image}
            alt={testimonial.name}
            className="grayscale-95 hover:grayscale-0 object-cover !m-0 !p-0 object-top h-16 w-16 group-hover:scale-105 group-hover:z-30 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export const Language = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const Data = [
    {
      id: 1,
      name: "Javascript",
      image: "/images/Javascript-icon.png",
    },
    {
      id: 2,
      name: "Python",
      image: "/images/python-language.png",
    },
    {
      id: 3,
      name: "C#",
      image: "/images/c++.png",
    },
    {
      id: 4,
      name: "PHP",
      image: "/images/php.png",
    },
    {
      id: 5,
      name: "Dart",
      image: "/images/dart.png",
    },
  ];

  return (
    <div className="flex space-x-3 flex-row items-center justify-center">
      {Data.map((testimonial, idx) => (
        <div
          className="relative min-w-16 group flex justify-center items-center"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12 flex text-xs flex-col items-center justify-center rounded-md bg-black z-30 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={testimonial.image}
            alt={testimonial.name}
            className="grayscale-95 hover:grayscale-0 object-cover !m-0 !p-0 object-top h-16 w-16 group-hover:scale-105 group-hover:z-30 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
export const Framework = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const Data = [
    {
      id: 1,
      name: "Bootstrap",

      image: "/images/bootstrap.png",
    },
    {
      id: 2,
      name: "Tailwind css",

      image: "/images/tailwindcss.png",
    },
    {
      id: 3,
      name: "React",

      image: "/images/react.png",
    },
    {
      id: 4,
      name: "Laravel",

      image: "/images/laravel.png",
    },
    {
      id: 5,
      name: "Flutter",

      image: "/images/flutter.png",
    },
  ];

  return (
    <div className="flex space-x-3 flex-row items-center justify-center  ">
      {Data.map((testimonial, idx) => (
        <div
          className="relative min-w-16  group flex justify-center items-center"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12   flex text-xs  flex-col items-center justify-center rounded-md bg-black z-30 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute  w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={testimonial.image}
            alt={testimonial.name}
            className="grayscale-95 hover:grayscale-0 object-cover !m-0 !p-0 object-top  h-16 w-16  group-hover:scale-105 group-hover:z-30   transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const Data = [
    {
      id: 1,
      name: "Bootstrap",

      image: "/images/dart.png",
    },
    {
      id: 2,
      name: "Tailwind css",

      image: "/images/dart.png",
    },
    {
      id: 3,
      name: "React",

      image: "/images/dart.png",
    },
    {
      id: 4,
      name: "Laravel",

      image: "/images/dart.png",
    },
    {
      id: 5,
      name: "Flutter",

      image: "/images/dart.png",
    },
  ];

  return (
    <div className="flex space-x-3 flex-row items-center justify-center  ">
      {Data.map((testimonial, idx) => (
        <div
          className="relative max-w-full  group flex justify-center items-center"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12   flex text-xs  flex-col items-center justify-center rounded-md bg-black z-30 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={testimonial.image}
            alt={testimonial.name}
            className="grayscale-95 hover:grayscale-0 object-cover !m-0 !p-0 object-top  h-16 w-16  group-hover:scale-105 group-hover:z-30   transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
