"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

type ScrollingProps = {
  projectImages: string[];
};

const CustomScrolling = ({ projectImages }: ScrollingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const scrollSpeed = 1.6;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ height: `${projectImages.length * 100}vh` }}
    >
      {projectImages.map((img, index) => (
        <div
          key={index}
          className="fixed bg-white top-0 left-0 w-full h-screen transition-transform duration-[220ms] ease-out"
          style={{
            zIndex: projectImages.length - index,
            transform: `translate3d(0, ${-Math.max(
              0,
              typeof window !== "undefined"
                ? (scrollY - index * window.innerHeight) * scrollSpeed
                : 0
            )}px, 0)`,
          }}
        >
          <Image src={img} alt="Image" fill={true} className="object-contain" />
        </div>
      ))}
    </div>
  );
};

export default CustomScrolling;
