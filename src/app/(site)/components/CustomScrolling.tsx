"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { getPage, getPages } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type ScrollingProps = {
  images: string[];
  mainImage: string;
  title: string;
  content: PortableTextBlock[];
  slug: string;
};

const CustomScrolling = ({
  images,
  mainImage,
  content,
  title,
  slug,
}: ScrollingProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [pageContent, setPageContent] = useState<Page | null>(null);
  const [pageSlug, setPageSlug] = useState<Page[]>([]);
  const scrollSpeed = 1.7;
  const totalSections = images.length + 2;

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
      console.log(pagesData);
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
          <Image src={img} alt="Image" fill={true} className="object-contain" />
        </div>
      ))}

      {/* Added two more static viewport screens */}
      {pageContent?.title && (
        <div
          className="fixed bg-white top-0 left-0 w-full h-screen transition-transform duration-[230ms] ease-out"
          style={{
            zIndex: totalSections - images.length,
            transform: `translate3d(0, ${-Math.max(
              0,
              typeof window !== "undefined"
                ? (scrollY - images.length * window.innerHeight) * scrollSpeed
                : 0
            )}px, 0)`,
          }}
        >
          <div className="flex flex-col justify-center items-center w-full space-y-5 mt-[200px]">
            <div className="flex flex-col text-center items-center px-[300px] space-y-3">
              <h1 className="text-black text-xl uppercase font-[500] font-openSans">
                Project Name
              </h1>
              <p className="text-[#212121] text-lg font-[300] uppercase font-openSans">
                {pageContent.title}
              </p>
            </div>

            <div className="flex flex-col items-center px-[620px] space-y-3">
              <h1 className="text-black text-2xl font-[500] font-openSans">
                Location
              </h1>
              <p className="text-[#212121] text-lg text-center leading-[2.2rem] font-[300] font-openSans">
                {<PortableText value={pageContent.content} />}
              </p>
            </div>

            <div className="flex flex-col items-center px-[620px] space-y-3">
              <h1 className="text-black text-2xl font-[500] font-openSans">
                Photography
              </h1>
              <p className="text-[#212121] text-lg text-center leading-[2.2rem] font-[300] font-openSans">
                Author&apos;s name
              </p>
            </div>
          </div>
        </div>
      )}
      {/* My last static section */}
      <div
        className="fixed bg-white top-0 left-0 w-full h-screen p-5 transition-transform duration-[230ms] ease-out"
        style={{
          zIndex: totalSections - images.length - 1,
          transform: `translate3d(0, ${-Math.max(
            0,
            typeof window !== "undefined"
              ? (scrollY - (images.length + 1) * window.innerHeight) *
                  scrollSpeed
              : 0
          )}px, 0)`,
        }}
      >
        <h1 className="uppercase font-openSans font-[600] mt-6 flex justify-center">
          Related Residental Content
        </h1>

        <div className="relative">
          {/*First Column*/}
          <div className="mt-10  grid grid-cols-6 gap-5 w-[1200px] mx-auto justify-items-end items-center">
            <Link href="/pages/urbanupdaate">
              <img
                src="/Martin_Kobus_Urban-Update-1.jpg"
                alt="Image1"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <div></div>

            <Link href="/pages/upper-road">
              <img
                src="/Martin-Kobus_Upper-Road-01.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/showcase3">
              <img
                src="/Martin_Kobus_SF_Showcase_3-06.jpg"
                alt="Image3"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <div></div>

            <Link href="/pages/showcase-2">
              <img
                src="/Martin_Kobus_SF_Showcase2-01.jpg"
                alt="Image4"
                className="w-[190px] h-[120px]"
              />
            </Link>
          </div>

          {/*Second Column*/}
          <div className="mt-6 grid grid-cols-6 gap-5 w-[1200px] mx-auto justify-items-end items-center">
            <Link href="/pages/showcase-1">
              <img
                src="/Martin_Kobus_SF_Showcase_3-02.jpg"
                alt="Image1"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/sausalito-hillside">
              <img
                src="/CS-221118_4999_web.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/rancho-mirage">
              <img
                src="/Martin-Kobus_Rancho-Mirage_GG-7880WC-008.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/pop-art">
              <img
                src="/Martin-Kobus_Pop-Art-1.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/mckena">
              <img
                src="/Martin-Kobus_McKena_1.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>
          </div>
          {/*Third Column*/}
          <div className="mt-6 grid grid-cols-6 gap-5 w-[1200px] mx-auto justify-items-end items-center">
            <Link href="/pages/marinliving">
              <img
                src="/Martin-Kobus_Marin-Living-1.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <div></div>

            <Link href="/pages/keane">
              <img
                src="/samurai-autumn-thumb-1500x844.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <div></div>

            <div></div>

            <Link href="/pages/hors-categorie">
              <img
                src="/Martin_Kobus_Hors-Categorie_1.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>
          </div>

          {/*Fourth Column*/}
          <div className="mt-6 grid grid-cols-6 gap-5 w-[1200px] mx-auto justify-items-end items-center">
            <div></div>

            <Link href="/pages/hillside">
              <img
                src="/Martin_Kobus_Hillside-1.jpg"
                alt="Image1"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <div></div>

            <Link href="/pages/healdsburg-gallery">
              <img
                src="/1FOTO 26 MASTER KOBUS GLOW.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/city-living">
              <img
                src="/Martin-Kobus_City-living_2.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>

            <Link href="/pages/woolworth-nyc">
              <img
                src="/Kobus_WoolworthBldg_ 21.jpg"
                alt="Image2"
                className="w-[190px] h-[120px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrolling;
