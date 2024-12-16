"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  const data = [
    {
      id: 1,
      nama_project: "clone pb",
      gambar: "/images/react.png",
      deskripsi: "web phising Point Blank",
      link_view: "",
      link_code: "",
    },
    {
      id: 2,
      nama_project: "web e-commerce",
      gambar: "/images/react.png",
      deskripsi: "web e-commerce yang dibuat dengan php native",
      link_view: "",
      link_code: "",
    },
    {
      id: 3,
      nama_project: "clone pb",
      gambar: "/images/react.png",
      deskripsi: "web phising Point Blank",
      link_view: "",
      link_code: "",
    },
    {
      id: 4,
      nama_project: "clone pb",
      gambar: "/images/react.png",
      deskripsi: "web phising Point Blank",
      link_view: "",
      link_code: "",
    },
    {
      id: 5,
      nama_project: "clone pb",
      gambar: "/images/react.png",
      deskripsi: "web phising Point Blank",
      link_view: "",
      link_code: "",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("right");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Stop auto-scrolling if user is interacting
    const handleUserInteraction = () => {
      setIsAutoScrolling(false);
    };

    container.addEventListener("touchstart", handleUserInteraction);
    container.addEventListener("mousedown", handleUserInteraction);

    return () => {
      container.removeEventListener("touchstart", handleUserInteraction);
      container.removeEventListener("mousedown", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Stop auto-scrolling if user is interacting
    const handleUserInteraction = () => {
      setIsAutoScrolling(false);
    };

    container.addEventListener("touchstart", handleUserInteraction);
    container.addEventListener("mousedown", handleUserInteraction);

    return () => {
      container.removeEventListener("touchstart", handleUserInteraction);
      container.removeEventListener("mousedown", handleUserInteraction);
    };
  }, []);

  const handleManualScroll = (direction: "right" | "left") => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const cardWidth = cards[0].offsetWidth;

    // Stop auto-scrolling when user manually scrolls
    setIsAutoScrolling(false);

    let newIndex;
    if (direction === "right") {
      newIndex = Math.min(currentCardIndex + 1, data.length - 1);
    } else {
      newIndex = Math.max(currentCardIndex - 1, 0);
    }

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Manual Scroll Buttons */}
      <div className="absolute z-10 top-1/2 transform -translate-y-1/2 w-full flex justify-between "></div>

      {/* Card Container with Snap Scrolling */}
      <div
        ref={containerRef}
        className="w-full flex overflow-x-auto no-scrollbar 
                   snap-x snap-mandatory 
                   scroll-smooth space-x-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {data.map((urai_data, idx) => (
          <div
            key={urai_data.id}
            className="flex-shrink-0 w-full snap-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CardContainer className="w-full mx-4 inter-var">
              <CardBody
                className="bg-gray-50 relative group/card 
                dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {urai_data.nama_project}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {urai_data.deskripsi}
                </CardItem>

                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={urai_data.gambar}
                    height="1000"
                    width="1000"
                    className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <a className="w-full h-full" href={urai_data.link_view}>
                      Try now →
                    </a>
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <a className="w-full h-full" href={urai_data.link_code}>
                      View Source
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
