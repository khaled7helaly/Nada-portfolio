import Hero from "../sections/Hero";
import About from "../sections/About";
import Work from "../sections/Work";
import Story from "../sections/Story";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Story />
      <Certifications />
      <Contact />
    </main>
  );
}