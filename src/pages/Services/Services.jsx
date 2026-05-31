import { motion } from "framer-motion";
import {
  Leaf,
  Hammer,
  Home,
  Scissors,
  Wrench,
  Paintbrush,
} from "lucide-react";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

import "./Services.css";

export default function Services() {
  const mainServices = [
    {
      icon: Leaf,
      title: "Trädgårdsservice",
      description:
        "Från dagligt underhåll till större designprojekt. Vi skapar och vårdar trädgårdar som du älskar.",
    },
    {
      icon: Hammer,
      title: "Byggnationer",
      description:
        "Professionell byggnation och renovering. Vi realiserar dina idéer med högsta kvalitet.",
    },
    {
      icon: Home,
      title: "Fastighetsskötsel",
      description:
        "Fullständig fastighetsskötsel in- och utvändigt för både privatpersoner och företag.",
    },
  ];

  const detailedServices = [
    {
      icon: Scissors,
      title: "Beskärning & Klippning",
      description:
        "Professionell beskärning av träd och buskar. Vi formar och vårdar din vegetation optimalt.",
    },
    {
      icon: Wrench,
      title: "Underhålls Arbeten",
      description:
        "Löpande underhållsarbeten som håller din fastighet i toppskick året runt.",
    },
    {
      icon: Paintbrush,
      title: "Målning & Renovering",
      description:
        "Målning, renovering och förbättring av bostäder och lokaler.",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero-wrap">

      {/* HEADER */}
      <section className="services-header">
        <h1 className="services-title">Våra Tjänster</h1>
        <p className="services-subtitle">
          Omfattande lösningar för trädgård, bygg och fastighetsskötsel
        </p>
      </section>

      {/* MAIN SERVICES */}
      <section className="section services-main-section">
        <div className="container">
          <div className="grid-3">
            {mainServices.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED */}
      <section className="section features-section services-detailed-section">
        <div className="container">

          <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "60px" }}>
            Detaljerade Tjänster
          </h2>

          <div className="grid-3">
            {detailedServices.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="section services-features-section">
        <div className="container">

          <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "60px" }}>
            Vad Du Kan Förvänta Dig
          </h2>

          <div style={{ display: "grid", gap: "16px" }}>
            {[
              "Kostnadsfri konsultation",
              "Transparenta priser",
              "Professionellt utförande",
              "Pålitlighet",
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="feature-item"
              >
                <div>✓</div>
                <div>{f}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section cta services-cta">
        <div className="container">

          <div className="services-cta-content">
            <h2 style={{ fontSize: "42px" }}>
              Intresserad av våra tjänster?
            </h2>

            <p className="services-cta-text">
              Kontakta oss för offert
            </p>

            <Link to="/contact" className="btn">
              Begär Offert
            </Link>
          </div>

        </div>
      </section>

      </div>

    </div>
  );
}