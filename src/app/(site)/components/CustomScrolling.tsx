"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { urlFor } from "../../../../sanity/lib/image";

type ScrollingProps = {
  images: { asset: any }[];
  slug: string;
};

const CustomScrolling = ({ images, slug }: ScrollingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const rafId = useRef<number | null>(null);

  const totalSections = images.length;

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    setIsClient(true);
    setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () =>
      setWindowHeight(window.innerHeight)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const getOptimizedImageUrl = (imageUrl: string) => {
    const width = windowHeight > 800 ? 1200 : 800;
    const format = "webp"; // Force WebP format
    const quality = 75; // Lower quality for WebP since it's more efficient

    if (imageUrl.includes("?")) {
      return `${imageUrl}&w=${width}&fit=max&format=${format}&q=${quality}`;
    }
    return `${imageUrl}?w=${width}&fit=max&format=${format}&q=${quality}`;
  };

  // Sequential scroll effect - each image waits for previous to complete
  const getImageTransform = useCallback(
    (index: number) => {
      if (windowHeight === 0) return "translate3d(0,0,0)";

      const sectionHeight = windowHeight;
      const start = index * sectionHeight;
      const end = start + sectionHeight;

      if (scrollY < start) {
        return "translate3d(0,0,0)";
      }

      if (scrollY > end) {
        return `translate3d(0, -${sectionHeight}px, 0)`;
      }

      const progress = (scrollY - start) / sectionHeight;
      const offset = -progress * sectionHeight;

      return `translate3d(0, ${offset}px, 0)`;
    },
    [scrollY, windowHeight]
  );

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div style={{ height: `${totalSections * 100}vh` }}>
      {images.map((image, index) => (
        <div
          key={`${slug}-${index}`}
          className="fixed top-0 left-0 w-full h-screen bg-white"
          style={{
            zIndex: images.length + 1 - index,
            transform: getImageTransform(index),
            willChange: "transform",
          }}
        >
          <div className="w-full h-full relative">
            <Image
              src={urlFor(image.asset).width(1600).quality(80).url()}
              alt={`${slug} image ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomScrolling;
