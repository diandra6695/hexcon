import Button from "../Utilities/Button";
import CardProject from "../Utilities/CardProject";
import Title from "../Utilities/Title";

const ProjectList = () => {
  return (
    <div className="max-w-4xl mx-auto px-7 lg:px-0 ">
      <Title text="My Project" />
      <div className="flex flex-col items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
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
