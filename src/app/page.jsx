import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Study from "./components/Study";
import Border from "./components/Utilities/Border";

export default function Home() {
  return (
    <div>
      <Hero />
      <Border />
      <Study />
      <Experience />
    </div>
  );
}
