import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import "./CTA.css"

export default function CTA() {

  return (
    <section className="cta-section">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="cta-container"
      >

        <h2 className="cta-title">
          Är Du Redo För Professionell Service?
        </h2>

        <p className="cta-text">
          Kontakta oss idag och låt oss ta hand om din trädgård,
          fastighet eller byggprojekt med högsta kvalitet.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="btn-primary">
            Kontakta Oss
            <ArrowRight size={18} className="btn-icon" />
          </Link>

          <Link to="/about" className="btn-secondary">
            Läs Mer Om Oss
          </Link>

        </div>

      </motion.div>

    </section>
  )
}