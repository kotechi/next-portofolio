"use client";
import { TextGenerateEffect } from "../ui/text-generated-effect";

const words = `fullstack developer, game developper, cyber limer`;

export function TextGenerateEffectHeader() {
  return (
    <div className=" text-purple-950 " data-aos="fade-up" data-aos-delay="500" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
      <TextGenerateEffect words={words} />
    </div>
  );
}
