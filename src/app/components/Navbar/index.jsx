import Link from "next/link";

const Navbar = () => {
  return (
    <header className="top-0 z-50 w-full absolute h-20">
      <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl border-transparent">
        <Link
          href="/"
          className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold"
        >
          <span>Hexcon</span>
        </Link>
        <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
