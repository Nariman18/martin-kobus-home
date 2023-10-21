"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { getPage, getPages } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";

type ScrollingProps = {
  images: string[];
  slug: string;
};

const CustomScrolling = ({ images, slug }: ScrollingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [pageContent, setPageContent] = useState<Page | null>(null);
  const [pageSlug, setPageSlug] = useState<Page[]>([]);
  const scrollSpeed = 1.7;
  const totalSections = images.length;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPage(slug);
      setPageContent(data);
    };
    fetchData();

    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      const pagesData = await getPages();

      setPageSlug(pagesData);
    };

    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ height: `${totalSections * 100}vh` }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="fixed bg-white top-0 left-0 w-full h-screen transition-transform duration-[230ms] ease-out"
          style={{
            zIndex: totalSections - index,
            transform: `translate3d(0, ${-Math.max(
              0,
              typeof window !== "undefined"
                ? (scrollY - index * window.innerHeight) * scrollSpeed
                : 0
            )}px, 0)`,
          }}
        >
          <div className="w-full h-screen">
            <Image
              src={img}
              alt="Images"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomScrolling;
