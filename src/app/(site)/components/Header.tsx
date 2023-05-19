"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { getPages } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";

function Header() {
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [subPanel, setSubPanel] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [pages, setPages] = useState<Page[]>([]); //Here I added the useState hook to create an empty array with Page's types.
  //You can find my types for the Pages inside my "types" folder.

  useEffect(() => {
    const fetchData = async () => {
      const pagesData = await getPages();
      setPages(pagesData);
    };

    fetchData();
  }, []);

  const handleClick = (tab: string) => {
    if (tab === activeTab) {
      setShowPanel(false);
      setActiveTab("");
      setSubPanel("");
      setShowCloseIcon(true);
    } else {
      setShowPanel(true);
      setActiveTab(tab);
      setShowCloseIcon(true);
    }
  };

  const panelVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -200 },
    exit: { opacity: 0, x: -200 },
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  const closeAllPanels = () => {
    setShowPanel(false);
    setActiveTab("");
    setSubPanel("");
  };

  const handleSubPanelClick = (panel: string) => {
    setSubPanel(panel);
    if (activeTab === "work") {
      setShowCloseIcon(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (showPanel || subPanel) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPanel, subPanel]);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] flex items-center justify-between w-full transition-all duration-200`}
      style={{
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <ul className="flex space-x-11 p-10 text-black uppercase text-sm mr-[200px] tracking-wide font-thin">
        <li
          onClick={() => handleClick("work")}
          className="cursor-pointer link-item-white"
        >
          Work
        </li>
        <li
          onClick={() => handleClick("studio")}
          className="cursor-pointer link-item-white"
        >
          Studio
        </li>
        <button className="cursor-pointer uppercase link-item-white">
          News & Awards
        </button>
        <button className="cursor-pointer uppercase link-item-white">
          Contact
        </button>
      </ul>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed top-0 left-0 z-[9998] w-[500px] h-screen bg-white"
            initial="closed"
            exit={{ opacity: 0, x: -200 }}
            animate={showPanel ? "open" : "closed"}
            variants={panelVariants}
            transition={{ duration: 0.5 }}
            style={{
              borderRight: "1px solid #D3D3D3",
            }}
          >
            {activeTab === "work" && (
              <div className="flex flex-row">
                <div className="">
                  <ul className="flex space-x-11 p-10 uppercase text-sm tracking-wide font-thin">
                    <li
                      onClick={() => handleClick("work")}
                      className="cursor-pointer underline underline-offset-[5.5px]"
                    >
                      Work
                    </li>
                    <li
                      onClick={() => handleClick("studio")}
                      className="cursor-pointer link-item"
                    >
                      Studio
                    </li>
                    <button className="cursor-pointer uppercase link-item">
                      News & Awards
                    </button>
                    <button className="cursor-pointer uppercase link-item">
                      Contact
                    </button>
                  </ul>

                  {showCloseIcon && (
                    <div
                      onClick={closeAllPanels}
                      className="absolute top-[36px] left-[453px]"
                    >
                      <CloseIcon
                        style={{
                          height: "20px",
                          width: "20px",
                          cursor: "pointer",
                          color: "black",
                        }}
                      />
                    </div>
                  )}

                  <ul className="p-10 mt-5 text-sm font-thin uppercase space-y-2 tracking-wider">
                    <motion.li
                      onClick={() => handleSubPanelClick("residential")}
                      className="focus:underline cursor-pointer link-item w-[80px]"
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Residental
                    </motion.li>
                    <motion.li
                      onClick={() => handleSubPanelClick("hospitality")}
                      className="cursor-pointer link-item w-[85px]"
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Hospitality
                    </motion.li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "studio" && (
              <div className="flex">
                <div className="">
                  <ul className="flex space-x-11 p-10 uppercase text-sm tracking-wide font-thin">
                    <li
                      onClick={() => handleClick("work")}
                      className="cursor-pointer link-item"
                    >
                      Work
                    </li>
                    <li
                      onClick={() => handleClick("studio")}
                      className="cursor-pointer underline underline-offset-[5.5px]"
                    >
                      Studio
                    </li>
                    <button className="cursor-pointer uppercase link-item">
                      News & Awards
                    </button>
                    <button className="cursor-pointer uppercase link-item">
                      Contact
                    </button>
                  </ul>
                  <div
                    onClick={closeAllPanels}
                    className="absolute top-[37px] left-[450px]"
                  >
                    <CloseIcon
                      style={{
                        height: "20px",
                        width: "20px",
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </div>
                  <ul className="flex flex-col p-10 mt-20 text-sm font-thin uppercase space-y-2 tracking-wider">
                    <motion.li
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="cursor-pointer"
                    >
                      About
                    </motion.li>
                    <motion.li
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="cursor-pointer"
                    >
                      Leadership
                    </motion.li>
                    <motion.li
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="cursor-pointer"
                    >
                      Open Positions
                    </motion.li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {subPanel && (
          <motion.div
            initial="closed"
            exit={{ opacity: 0, x: -200 }}
            animate={showPanel ? "open" : "closed"}
            variants={panelVariants}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-[500px] z-[9997] w-[500px] h-screen bg-white"
          >
            {subPanel === "residential" && (
              <div className="flex p-10 text-sm uppercase font-thin tracking-wider mt-[120px]">
                <div className="flex w-full justify-between">
                  <ul className="text-black">
                    <motion.li
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="cursor-pointer flex flex-col space-y-2 w-full"
                    >
                      {/* Here I mapped all the Page links inside my 2nd sideBar, so you can find those links when you click the "Residential" link inside my 1st sideBar */}
                      {pages.map((page) => (
                        <Link
                          key={page._id}
                          href={`/${page.slug}`}
                          className="link-item"
                        >
                          {page.title}
                        </Link>
                      ))}
                    </motion.li>
                  </ul>
                </div>
                <div
                  onClick={closeAllPanels}
                  className="absolute top-[37px] left-[450px]"
                >
                  <CloseIcon
                    style={{
                      height: "20px",
                      width: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-black uppercase tracking-[15px] mr-[700px]">
        <Link href="/">Martin</Link>
      </div>
    </div>
  );
}

export default Header;
