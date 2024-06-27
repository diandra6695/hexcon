import Image from "next/image";

const CardProject = ({ image, title, description }) => {
  return (
    <div className="border-dashed border border-neutral-300 dark:border-neutral-500 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
      <div className="">
        <Image
          className="rounded-lg mb-2 pointer-events-none lg:object-cover lg:w-full md:w-auto object-top lg:h-[144px] md:h-[240px] w-[426px] h-[190px] object-cover"
          src={image}
          alt=""
          width={426}
          height={240}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <div className="text-lg xl:text-base font-semibold">
          <h3>{title}</h3>
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
