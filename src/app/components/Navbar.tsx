import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark: hidden">
        <Image src={assets.header_bg} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className=" w-24 md:w-28 2xl:w-32 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 md:text-[16px] 2xl:text-[18px]`}
        >
          <a
            className="font-Ovo relative hover:text-[#15546b] dark:hover:text-[#54a9c8] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#15546b] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold"
            href="#top"
          >
            Home
          </a>

          <a
            className="font-Ovo relative hover:text-[#15546b] dark:hover:text-[#54a9c8]  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#15546b] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold"
            href="#about"
          >
            About me
          </a>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.dark_mode : assets.sunny}
              alt=""
              className="w-5"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10  py-1 border border-gray-400 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-[#F0F0F0] dark:hover:bg-[#646464]"
          >
            Contact
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_dark : assets.menu}
              alt=""
              className="w-5"
            />
          </button>
        </div>

        {/* ------ mobile menu ------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#F8F8F8] transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-5 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_dark : assets.close}
              alt=""
              className="w-8 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
