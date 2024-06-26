"use client";
import anime from "animejs";
import { useRef } from "react";

const { default: Link } = require("next/link");

const Button = ({ title, link }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    anime({
      targets: buttonRef.current,
      scale: [1.1, 1],
      duration: 400,
    });
  };
  return (
    <button ref={buttonRef} onClick={handleClick}>
      <Link
        href={link}
        className="inline-flex button ease-in-out w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
