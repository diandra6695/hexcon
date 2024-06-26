import Button from "../Utilities/Button";
import CardProject from "../Utilities/CardProject";
import Title from "../Utilities/Title";

const ProjectList = () => {
  return (
    <div className="max-w-4xl mx-auto px-7 lg:px-0 ">
      <Title text="My Project" />
      <div className="flex flex-col items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <CardProject
            image={"/assets/project/suratque.png"}
            title={"SuratQue"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/pemasaran.png"}
            title={"Website Pemasaran"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/dosamurid.png"}
            title={"Dosa Murid"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/lempita.png"}
            title={"Lempita"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/bogeng.png"}
            title={"Bogeng Company Landing Page"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/ngambis.png"}
            title={"Ngambis"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/kelasque.png"}
            title={"KelasQue Landing Page"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/expressapi.png"}
            title={"REST API Express"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/crypto.png"}
            title={"Crypto App Design"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/animelist.png"}
            title={"Anime List"}
            description={"lorem ipsum dolor sit amrt"}
          />
          <CardProject
            image={"/assets/project/filmque.png"}
            title={"FilmQue"}
            description={"lorem ipsum dolor sit amrt"}
          />
        </div>
        <Button
          title={"View All My Project"}
          link={"https://github.com/diandra6695?tab=repositories"}
        />
      </div>
    </div>
  );
};

export default ProjectList;
