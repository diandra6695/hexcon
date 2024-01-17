import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-500">
      <div className="md:flex md:justify-between md:items-center md: m-5">
        <div className="flex md:flex-row flex-col md:justify-start justify-center md:m-0 mb-3 mt-5 md:mx-3 text-sm gap-3 items-center">
          <header>
            <h1 className="font-semibold">Hexcon</h1>
          </header>
          <p className="text-xs">
            Made by <span className="font-bold">Diandra Rullyaditya</span>
          </p>
        </div>

        <Link
          href={"https://github.com/diandra6695/"}
          className="flex justify-center md:mb-0 mb-5 items-center"
        >
          <div className="border flex justify-center items-center h-8 text-center w-8 rounded-full p-1 border-neutral-400 text-neutral-400">
            <GithubLogo size={16} weight="fill" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
