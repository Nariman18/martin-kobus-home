"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

const CustomScrolling = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollSpeed = 1.7;
  const sections = [1, 2]; // Representing two sections

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ height: `${sections.length * 124}vh` }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className="fixed bg-white top-0 left-0 w-full h-screen transition-transform duration-[230ms] ease-out"
          style={{
            zIndex: sections.length - index,
            transform: `translate3d(0, ${-Math.max(
              0,
              typeof window !== "undefined"
                ? (scrollY - index * window.innerHeight) * scrollSpeed
                : 0
            )}px, 0)`,
          }}
        >
          {
            // You can replace this section with your own custom components
            section === 1 ? (
              <div className="flex flex-col items-center justify-center h-screen pt-[1045px]">
                <Image
                  src="/Kobus_Showhouse_24196 1.jpg"
                  alt="About Image"
                  width={1450}
                  height={600}
                  className="object-cover"
                />

                <div className="absolute w-[765px] left-[140px] top-[150px]">
                  <h1 className="font-openSans font-[700] text-xl text-[#FFFFFF] uppercase">
                    Kobus Interiors
                  </h1>

                  <div className="mt-5">
                    <p className="font-openSans text-[#FFFFFF] text-lg font-[400]">
                      Martin Kobus creates bold and dynamic interiors that are
                      approachable and inviting. Designing custom environments
                      that resonate with clients is the hallmark of his work.
                      Being a Dutch native there is a European sensibility to
                      Martin’s vision on all projects. Having been immersed in
                      all aspects of design for a lifetime, creating inspired
                      interiors comes naturally. Our team of designers take
                      great pride in the work that we do, and manage client
                      relations efficiently and effectively. Our vendors and
                      crafts people work in harmony with our team to make our
                      vision come to life.
                    </p>
                    <p className="font-openSans text-[#FFFFFF] text-lg font-[400]">
                      Kobus Interiors is dedicated to bringing your design
                      aspirations to fruition and to create beautiful interiors
                      for living.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute flex space-x-[400px] bottom-[-550px] left-[200px]">
                <div className="flex flex-col">
                  <h1 className="text-black text-2xl font-openSans font-[600]">
                    Chris Bergin, VP
                  </h1>
                  <Image
                    src="/Rectangle 57.jpg"
                    alt="About Image2"
                    width={350}
                    height={220}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black text-2xl font-openSans font-[600]">
                    Astrid Kobus, CFO
                  </h1>
                  <Image
                    src="/Rectangle 56.jpg"
                    alt="About Image2"
                    width={350}
                    height={220}
                  />
                </div>
              </div>
            )
          }
        </div>
      ))}
    </div>
  );
};

export default CustomScrolling;
