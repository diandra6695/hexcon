"use client";
import { SmileyWink } from "@phosphor-icons/react";

const AboutPage = () => {
  return (
    <div className="">
      <div className="flex w-full h-screen items-center  justify-center">
        <div className="text-center flex flex-col items-center">
          <SmileyWink size={55} />
          <h3 className="text-3xl mt-2 font-extrabold">COMING SOON...</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            Ditunggu ya update selanjutnya, tetep stay tune!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
