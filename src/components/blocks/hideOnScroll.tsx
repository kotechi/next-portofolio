import { useEffect, useState } from "react";
import { TypewriterEffectLoader } from "@/components/blocks/text-typewritter-effect";
import Image from "next/image";

const ScrollHideDiv = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
        return () => window.removeEventListener("scroll", handleScroll);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      className={`absolute flex justify-center items-center z-50 top-0 left-0 w-full h-screen p-4 bg-[url('/images/bgload.jpg')] bg-cover bg-center transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" flex justify-center items-center p-3 w-1/3 h-24 bg-black border-x-4 border-solid border-[#8b0686] rounded-2xl">
        <div className="flex items-center text-3xl">
          <div className="text-[#920072]  font-bold ">Aditiya Ganzz...</div>
          <div className=" font-bold absolute transform translate-x-1 translate-y-1 text-white">
            Aditiya Ganzz...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHideDiv;
