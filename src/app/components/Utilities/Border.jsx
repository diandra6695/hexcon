"use client";
import { ArrowCircleDown } from "@phosphor-icons/react";

const Border = ({ title }) => {
  return (
    <div className="relative my-32">
      <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950">
          {" "}
        </div>
        <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
      </div>
      <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border  rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
        <p className="leading-none">{title}</p>
        <div className="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
          <ArrowCircleDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Border;
