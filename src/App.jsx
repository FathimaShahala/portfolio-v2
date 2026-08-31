import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
