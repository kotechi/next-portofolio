"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { BackgroundGradient } from "../ui/background-gradient";

export function TypewriterEffectHeader() {
  const words = [
    {
      text: "Hallo",
    },
    {
      text: "i",
    },
    {
      text: "am,",
      className: "text-",
    },
    {
      text: "Aditiya.",
      className: "text-purple-500 text-[#920072] text-shadow-glow",
    },
  ];
  return (
  
    <div data-aos="fade-down" data-aos-delay="1000" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
      <TypewriterEffect words={words} />
    </div>

  );
}

export function TypewriterEffectLoader() {
  const words = [
    {
      text: "Aditiya.",
      className: "text-purple-100  ",
    },
  ];
  return (
  
    <div data-aos="fade-down" data-aos-delay="1000" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
      <TypewriterEffect words={words} />
    </div>

  );
}