"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

type ImageType = {
  url: string;
};

type ScrollingProps = {
  images: ImageType[];
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
      if (windowHeight === 0) return "translate3d(0, 0, 0)";

      const sectionHeight = windowHeight;
      const triggerPoint = index * sectionHeight;

      // Current image stays fixed until we reach its section
      if (scrollY < triggerPoint) {
        return "translate3d(0, 0, 0)";
      }

      // When we scroll past this image's trigger point, it moves up
      const progress = (scrollY - triggerPoint) / sectionHeight;

      // Only start moving the current image when we're in its section
      // This creates the sequential effect
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
          key={index}
          className="fixed top-0 left-0 w-full h-screen bg-white"
          style={{
            zIndex: totalSections - index,
            transform: getImageTransform(index),
            willChange: "transform",
          }}
        >
          <div className="w-full h-full relative">
            <Image
              src={getOptimizedImageUrl(image.url)}
              alt={`${slug} image ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="100vw"
              quality={80}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomScrolling;
