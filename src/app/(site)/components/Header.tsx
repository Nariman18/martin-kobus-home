"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getPages } from "../../../../sanity/sanity-utils";
import { Page } from "../../../../types/Page";
import MobileMenuItems from "./MobileMenuItems";

function Header() {
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pages, setPages] = useState<Page[]>([]);
  const [active, setActive] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const showMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
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
    } else {
      setShowPanel(true);
      setActiveTab(tab);
    }
  };

  const panelVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 200 },
    exit: { opacity: 0, x: 200 },
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  const closeAllPanels = () => {
    setShowPanel(false);
    setActiveTab("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // If scrolling down, hide the header
        setHeaderVisible(false);
      } else {
        // If scrolling up, show the header
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (showPanel) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPanel]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[9999] flex 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse 2xl:bg-transparent xl:bg-transparent lg:bg-transparent bg-white/50 h-[100px] items-center justify-between w-full transition-all duration-200 2xl:p-0 xl:p-0 lg:p-0 p-3 ${
          headerVisible ? "" : "hidden-header"
        }`}
      >
        <div
          className={`absolute right-[20px] ml-20 2xl:hidden xl:hidden lg:hidden top-[46px] hover:text-white hover:transition duration-150 ease-in-out cursor-pointer overflow-visible`}
          onClick={showMenu}
        >
          <div
            className={`h-[1px] w-6 bg-black relative transition-all duration-300 ease-in-out transform `}
          />

          <div
            className={`h-[1px] w-6 bg-black relative mt-2 transition-all duration-300 ease-in-out transform`}
          />
        </div>
        <ul className="hidden lg:flex space-x-8 p-10 text-black uppercase text-[14px] font-[300] tracking-[0.04em] font-openSans">
          <li>
            <Link
              onClick={closeAllPanels}
              href="/About"
              className="cursor-pointer link-item"
            >
              About Us
            </Link>
          </li>

          <li
            onClick={() => handleClick("work")}
            className="cursor-pointer link-item"
          >
            Work
          </li>

          <li>
            <Link
              onClick={closeAllPanels}
              href="/Press"
              className="cursor-pointer uppercase link-item"
            >
              Press
            </Link>
          </li>

          <li>
            <Link
              onClick={closeAllPanels}
              href="/Contact"
              className="cursor-pointer uppercase link-item"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="text-black 2xl:text-[23px] xl:text-[23px] lg:text-[23px] text-[20px] uppercase tracking-[0.01em] font-openSans font-[400] 2xl:ml-[50px] xl:ml-[50px] lg:ml-[50px] ml-0">
          <Link
            onClick={() => {
              closeMenu();
              closeAllPanels();
            }}
            href="/"
          >
            Martin Kobus Home
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed top-0 right-0 z-[9998] w-[480px] h-screen backdrop-blur-xl bg-transparent-white overflow-auto"
            initial="closed"
            exit={{ opacity: 0, x: 200 }}
            animate={showPanel ? "open" : "closed"}
            variants={panelVariants}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "work" && (
              <div className="">
                <div className="">
                  <div
                    onClick={closeAllPanels}
                    className="absolute top-[130px] left-[390px]"
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

                  <ul className="text-black">
                    <motion.li
                      variants={linkVariants}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-col space-y-2 w-max tracking-[0.04em] font-openSans text-[14px] p-10 pl-[50px] mt-[130px] font-[300] uppercase"
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
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenuItems showMenu={showMenu} active={active} />
    </>
  );
}

export default Header;
