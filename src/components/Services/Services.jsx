import { motion } from "framer-motion"
import { Leaf, Hammer, Home as HomeIcon } from "lucide-react"
import "./Services.css"

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="service-card"
    >
      <div className="service-icon">
        <Icon size={24} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: "Trädgårdsservice",
      description:
        "Professionell trädgårdsskötsel, plantering, beskärning och underhåll.",
    },
    {
      icon: Hammer,
      title: "Byggnationer",
      description:
        "Renovering och nybyggnation enligt din vision och budget.",
    },
    {
      icon: HomeIcon,
      title: "Fastighetsskötsel",
      description:
        "Löpande fastighetsskötsel, målning, snöskottning och mer.",
    },
  ]

  return (
    <section className="services-section">

      <div className="services-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <span className="services-label">Våra Tjänster</span>

          <h2 className="services-title">
            Professionell Service Till Rätt Pris
          </h2>

          <p className="services-subtitle">
            Vi erbjuder ett omfattande utbud av tjänster för din fastighet.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={s.title}
              description={s.description}
              delay={i * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  )
}