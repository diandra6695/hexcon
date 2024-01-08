"use client";
import { Equals, X } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";

const DesktopMenu = () => {
  return (
    <div className="fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-end justify-start h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:w-auto sm:pr-0 sm:pt-0 hidden top-[75px]">
      <Link
        href="/"
        className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white text-neutral-900 dark:text-white"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white text-neutral-900 dark:text-white"
      >
        Project
      </Link>
      <Link
        href="/about"
        className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white text-neutral-900 dark:text-white"
      >
        About
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu(true);
  };
  return (
    <div className="flex">
      <button onClick={handleClick} className="">
        {isOpenMenu ? <X size={25} /> : <Equals size={25} />}
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    // Panggil handleResize saat halaman dimuat dan saat lebar browser berubah
    handleResize();
    window.addEventListener("resize", handleResize);

    // Membersihkan event listener pada komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="top-0 z-50 w-full fixed h-14">
      <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-neutral-300/50 bg-white/80 dark:border-neutral-600/40 dark:bg-neutral-900/60 backdrop-blur-2xl">
        <Link
          href="/"
          className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold"
        >
          <span>Hexcon</span>
        </Link>
        <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm  text-neutral-500 dark:text-neutral-400">
          {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
