import Card from "../Utilities/Card";
import Title from "../Utilities/Title";

const Study = () => {
  return (
    <section className="max-w-4xl mx-auto px-7 lg:px-0 mb-8">
      <Title text="🎓 Pendidikan" />
      <div className="flex flex-col gap-5">
        <Card
          title="SMK Negeri 1 Bangsri"
          description="School of Physics and Astronomy, Cardiff University, UK
        2021-2022"
        />
        <Card
          title="SMP Negeri 1 Keling"
          description="School of Physics and Astronomy, Cardiff University, UK
        2021-2022"
        />
        <Card
          title="SD Negeri 3 Dermolo"
          description="School of Physics and Astronomy, Cardiff University, UK
        2021-2022"
        />
      </div>
      <div className=""></div>
    </section>
  );
};

export default Study;
