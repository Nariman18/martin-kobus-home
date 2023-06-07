"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import { getPages } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";

const MobileMenuItems: React.FC<{ active: boolean }> = ({ active }) => {
  const [activeMobile, setActiveMobile] = useState(false);

  const showMenu = () => {
    setActiveMobile(!activeMobile);
  };

  return (
    <div
      className={`fixed h-screen inset-0 z-[9999] flex p-10 bg-white/40 transition-all duration-500 ease-in-out ${
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <CloseIcon
        onClick={showMenu}
        className="cursor-pointer absolute left-[365px] top-[10px] text-4xl text-black"
      />
      <ul className="flex flex-col items-center uppercase">
        <li className="hover:text-orange-500 hover:transition duration-150 ease-in-out uppercase font-thin text-lg text-black">
          <Link href="/">Главная</Link>
        </li>
        <li className="hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-black">
          <Link href="/">Квесты</Link>
        </li>
        <li className="hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-black">
          <Link href="/">О Нас</Link>
        </li>
        <li className="hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-black">
          <Link href="/">Контакты</Link>
        </li>
      </ul>
    </div>
  );
};

function Header() {
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [subPanel, setSubPanel] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [pages, setPages] = useState<Page[]>([]);
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const fetchData = async () => {
      const pagesData = await getPages();
      const sortedPagesData = pagesData.sort(
        (b, a) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      );
      setPages(sortedPagesData);
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
      className={`fixed top-0 left-0 z-[9999] flex flex-row-reverse backdrop-blur h-[100px] bg-transparent-white items-center justify-start w-full transition-all duration-200`}
      style={{
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="absolute right-6 2xl:hidden xl:hidden lg:hidden scale-150 text-black top-12 hover:text-white hover:transition duration-150 ease-in-out">
        <MenuOutlinedIcon onClick={showMenu} className="cursor-pointer" />
      </div>
      <ul className="hidden lg:flex space-x-8 p-10 text-black uppercase text-[13px] font-[500] tracking-[0.04em] font-openSans">
        <Link href="/About" className="cursor-pointer link-item">
          About Us
        </Link>
        <li
          onClick={() => handleClick("work")}
          className="cursor-pointer link-item"
        >
          Work
        </li>
        <Link href="/" className="cursor-pointer uppercase link-item">
          Press
        </Link>
        <Link href="/Contact" className="cursor-pointer uppercase link-item">
          Contact
        </Link>
      </ul>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed top-0 left-0 z-[9998] w-[280px] h-screen bg-white"
            initial="closed"
            exit={{ opacity: 0, x: -200 }}
            animate={showPanel ? "open" : "closed"}
            variants={panelVariants}
            transition={{ duration: 0.3 }}
            style={{
              borderRight: "1px solid #D3D3D3",
            }}
          >
            {activeTab === "work" && (
              <div className="flex flex-row">
                <div className="">
                  {showCloseIcon && (
                    <div
                      onClick={closeAllPanels}
                      className="absolute top-[40px] left-[210px]"
                    >
                      <CloseIcon
                        style={{
                          height: "30px",
                          width: "30px",
                          cursor: "pointer",
                          color: "black",
                        }}
                      />
                    </div>
                  )}

                  <ul className="p-10 mt-[180px] text-[14px] font-[500] font-openSans uppercase tracking-[0.06em]">
                    <motion.li
                      onClick={() => handleSubPanelClick("selected work")}
                      className="focus:underline cursor-pointer link-item w-full"
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Selected Work
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
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-[280px] z-[9997] w-[500px] h-screen bg-white overflow-auto"
          >
            {subPanel === "selected work" && (
              <div className="flex p-10 text-sm uppercase mt-[180px] ">
                <ul className="text-black">
                  <motion.li
                    variants={linkVariants}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="cursor-pointer flex flex-col space-y-2 w-full tracking-[0.04em] font-openSans font-[500]"
                  >
                    {/* Here I mapped all the Page links inside my 2nd sideBar, so you can find those links when you click the "Residential" link inside my 1st sideBar */}
                    {pages.map((page, index) => (
                      <Link
                        key={page._id}
                        href={`/pages/${page.slug}`}
                        onClick={closeAllPanels}
                      >
                        <span className={`link-item link-item-${index}`}>
                          {page.title}
                        </span>
                      </Link>
                    ))}
                  </motion.li>
                </ul>

                <div
                  onClick={closeAllPanels}
                  className="absolute top-[40px] left-[420px]"
                >
                  <CloseIcon
                    style={{
                      height: "30px",
                      width: "30px",
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

      <div className="text-[#212121] text-[23px] uppercase tracking-[0.01em] font-openSans font-[500] mr-[245px]">
        <Link href="/">Martin Kobus Home</Link>
      </div>

      <MobileMenuItems active={active} />
    </div>
  );
}

export default Header;
