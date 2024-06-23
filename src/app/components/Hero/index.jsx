import Image from "next/image";
import Button from "../Utilities/Button";

const Hero = () => {
  return (
    <div className="relative z-20 w-full max-w-4xl mx-auto mt-24 px-7 md:mt-24 lg:mt-36 xl:px-0">
      <div className="flex flex-col items-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <h1 className="mb-3 text-4xl font-bold leading-tight md:text-4xl lg:text-5xl dark:text-white">
            Hello, I'm Diandra.
          </h1>
          <p className="mb-4 md:text-sm text-sm text-neutral-600 dark:text-neutral-400">
          Siswa SMK Negeri 1 Bangsri Jurusan PPLG dengan pengalaman mengembangkan 5 website. Mahir dalam framework JavaScript, PHP, dan CSS, serta berpengalaman dengan Visual Studio Code. Selalu mengikuti tren terbaru dalam pengembangan web dan bersemangat untuk berkontribusi pada tim inovatif. Terbuka untuk memperluas keahlian dalam pengembangan full-stack.
          </p>
          <p className="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
            I can help you out with:
          </p>
          <ul className="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
            <li>Laravel Web Dev</li>
            <li>Express Api Dev</li>
            <li>React Web Dev</li>
            <li>and more...</li>
          </ul>
          <div className="flex gap-2">
            <Button title={"Github"} link={"https://github.com/diandra6695"} />
            <Button
              title={"Email"}
              link={"mailto:diandrarullyaditya@gmail.com"}
            />
          </div>
          <p className="mt-4 font-semibold text-neutral-800 dark:text-neutral-200">
            Contact Me
          </p>
          <div className="flex gap-2">
            <Button
              title={"Instagram"}
              link={"https://github.com/diandra6695"}
            />
            <Button
              title={"Linkedin"}
              link={"https://www.linkedin.com/in/diandraaditya/"}
            />
          </div>
        </div>
        <div className="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
          <div className="absolute bottom-0 z-40 w-16 h-16 -translate-x-[21.9rem] -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
            <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
              <span className="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">
                😎
              </span>
            </span>
          </div>
          <div className="relative z-30">
            <Image
              className="relative z-30 w-96 md:max-w-md mx-auto dark:-translate-y-0.5"
              src="/img/saya.png"
              loading="lazy"
              width={500}
              height={500}
              alt="gambar rully"
            />
            <div className="absolute bottom-2 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
