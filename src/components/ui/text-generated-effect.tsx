"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isHover, setIsHover] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    // Animate the span elements
    animate(
      "span",
      {
        opacity: isHover ? 1 : [0, 1, 0], // Pause animation if hovered
        filter: filter ? (isHover ? "blur(0px)" : ["blur(10px)", "blur(0px)", "blur(10px)"]) : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
        repeat: isHover ? 0 : Infinity, // Do not repeat if hovered
        repeatType: "loop",
      }
    );
  }, [scope.current, isHover]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        onMouseEnter={() => setIsHover(true)} // Set hover state to true
        onMouseLeave={() => setIsHover(false)} // Set hover state to false
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter && !isHover ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-sl sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
