import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />                          {/* add this line */}
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Certificates />
        <hr className="section-divider" />
        <Contact />
      </main>
    </>
  );
}
