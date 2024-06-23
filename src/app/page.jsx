import Experience from "./components/Experience";
import Footer from "./components/Footer";
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
      {/* <Experience /> */}
      <Border title="CHECK OUT MY PROJECTS" />
      <ProjectList />
      <Footer />
    </div>
  );
}
