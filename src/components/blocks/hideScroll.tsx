// src/components/ScrollHide.js
import React, { useState, useEffect } from 'react';

const ScrollHide = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = scrollY > 0 ? `-${scrollY}px` : '0';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 transition-transform duration-300"
      style={{ transform: `translateY(${translateY})` }}
    >
      <h1 className="text-2xl">Konten yang Menghilang</h1>
      <p>Konten ini akan menghilang ke atas saat Anda scroll.</p>
    </div>
  );
};

export default ScrollHide;
