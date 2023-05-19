"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { getPage } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";
import { PortableText } from "@portabletext/react";

type Props = {
  images: string[];
};

function CustomScrolling({ images }: Props) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = (index: number) => {
    // Check if the window object is defined (client-side rendering)
    if (typeof window === "undefined") {
      return "translateY(0)";
    }

    const position = scrollY - window.innerHeight * index;
    return position > 0 ? `translateY(-${position}px)` : "translateY(0)";
  };

  return (
    <div className="relative">
      {/* Mapping the all images from Sanity studio */}

      {images.map((image, index) => (
        <div
          key={index}
          className={`fixed top-0 left-0 h-screen w-full z-${
            50 - index * 10
          } bg-white`}
          style={{
            transform: translateY(index),
            zIndex: 50 - index * 10,
          }}
        >
          <div className="w-full h-full">
            <Image
              src={image}
              alt={`Image${index + 1}`}
              className="object-contain"
              fill={true}
            />
          </div>
        </div>
      ))}

      <div style={{ height: `${98.2 * images.length}vh` }}></div>
    </div>
  );
}

export default CustomScrolling;
