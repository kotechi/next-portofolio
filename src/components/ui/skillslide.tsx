import React, { useEffect, useRef, useState } from 'react';

const Carousel: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        
        // Safely scroll
        carouselRef.current.scrollBy({ 
          left: clientWidth > 0 ? 1 : 0, 
          behavior: 'smooth' 
        });

        // Reset scroll position when reaching ends
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        }
      }
    }, 50);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoplay();
  };

  const handleScroll = () => {
    // Use optional chaining and null checks
    const carousel = carouselRef.current;
    if (carousel) {
      const { scrollLeft, clientWidth, scrollWidth } = carousel;
      
      // Add more items when reaching scroll ends
      if (scrollLeft + clientWidth >= scrollWidth - 1 || scrollLeft <= 0) {
        setItems((prevItems) => {
          // Prevent infinite growth
          const newItems = [...prevItems, ...prevItems];
          return newItems.slice(0, Math.min(newItems.length, 20)); // Limit to 20 items
        });
      }
    }
  };

  return (
    <div className="w-screen h-screen mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">my certificate</h2>
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex space-x-4 overflow-x-auto no-scrollbar transform rotate-[-7deg] max-w-screen"
        style={{ whiteSpace: 'nowrap' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 w-64 h-40 rounded-lg flex-none"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;