import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import CTA from "../../components/CTA/CTA";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">

      <section className="section hero">
        <Hero />
      </section>

      <section className="section services">
        <Services />
      </section>

      <section className="section about">
        <About />
      </section>

      <section className="section cta">
        <CTA />
      </section>

    </main>
  );
}