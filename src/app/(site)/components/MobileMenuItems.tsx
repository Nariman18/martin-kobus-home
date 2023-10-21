import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Page } from "../../../../types/Page";
import { getPages } from "../../../../sanity/sanity-utils";

const MobileMenuItems: React.FC<{
  active: boolean;
  showMenu: () => void;
}> = ({ active, showMenu }) => {
  const [showWorkPanel, setShowWorkPanel] = useState(false);
  const [mobPages, setMobPages] = useState<Page[]>([]);

  const toggleWorkPanel = () => {
    setShowWorkPanel(!showWorkPanel);
  };

  useEffect(() => {
    const fetchData = async () => {
      const pagesData = await getPages();
      const sortedPagesData = pagesData.sort(
        (b, a) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      );
      setMobPages(sortedPagesData);
    };

    fetchData();
  }, []);

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -200 },
  };

  useEffect(() => {
    if (active) {
      const scrollPosition = window.scrollY;
      document.body.style.top = `-${scrollPosition}px`;
      document.body.classList.add("no-scroll");

      document.body.dataset.scrollY = String(scrollPosition);
    } else {
      const savedScrollY = document.body.dataset.scrollY;
      document.body.classList.remove("no-scroll");
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY));
      }
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: active ? 0 : "-100vw" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-[100px] inset-0 bg-white/50 z-[9997] 2xl:hidden xl:hidden lg:hidden flex p-12 pointer-events-auto`}
    >
      <ul
        id="menuTab"
        className="flex flex-col w-full space-y-8 uppercase overflow-auto"
      >
        <li className=" hover:transition duration-150 ease-in-out uppercase font-openSans font-[300] text-lg text-black">
          <Link onClick={showMenu} href="/About">
            About Us
          </Link>
        </li>
        <li
          onClick={() => {
            toggleWorkPanel();
          }}
          className="font-openSans font-[300] text-lg text-black"
        >
          Work
          <AnimatePresence>
            {showWorkPanel && (
              <div
                id="work"
                className="text-black flex flex-col space-y-1 mt-5"
              >
                {mobPages.map((page, index) => (
                  <motion.div
                    initial="closed"
                    exit={{ opacity: 0, x: -200 }}
                    animate={showWorkPanel ? "open" : "closed"}
                    variants={linkVariants}
                    transition={{ delay: 0.2, damping: 0.2 }}
                    key={index}
                  >
                    <Link
                      onClick={showMenu}
                      href={`/pages/${page.slug}`}
                      className={`custom-link`}
                    >
                      {page.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </li>

        <li className="font-openSans font-[300] text-lg text-black">
          <Link onClick={showMenu} href="/Press">
            Press
          </Link>
        </li>
        <li className="font-openSans font-[300] text-lg text-black">
          <Link onClick={showMenu} href="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenuItems;
