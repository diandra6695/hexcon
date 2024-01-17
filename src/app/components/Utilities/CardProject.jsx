import Image from "next/image";

const CardProject = () => {
  return (
    <div className="border-dashed border border-neutral-300 dark:border-neutral-500 p-6 rounded-2xl">
      <div className="">
        <Image src="" alt="" width={300} height={250} />
      </div>
      <div className=" flex gap-2 flex-col">
        <div className="text-lg">
          <h3>Better Laravel Extension Pack</h3>
        </div>
        <div className="text-sm text-neutral-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
