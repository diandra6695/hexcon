import Experience from "./components/Experience";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Study from "./components/Study";
import Border from "./components/Utilities/Border";

export default function Home() {
  return (
    <div>
      <Hero />
      <Border title="MORE ABOUT ME" />
      <Study />
      <Experience />
      <Border title="CHECK OUT MY PROJECTS" />
      <ProjectList />
      <Border title="SOME OF MY WRITING" />
    </div>
  );
}
