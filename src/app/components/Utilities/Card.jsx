const Card = ({ title, description }) => {
  return (
    <div className="w-full rounded-2xl flex flex-col gap-3 bg-neutral-900 p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
