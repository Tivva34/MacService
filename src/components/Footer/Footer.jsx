import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import "./Footer.css"
import logo from "../../assets/logo/LogoTransparent.png"

export default function Footer() {

  const currentYear = new Date().getFullYear()

  const contactLinks = [
    { icon: Phone, label: "Telefon", value: "073 227 55 40", href: "tel:+46732275540" },
    { icon: Mail, label: "Email", value: "hello@macservice.se", href: "mailto:hello@macservice.se" },
    { icon: MapPin, label: "Plats", value: "Köping, Sverige", href: "#" },
  ]

  const footerLinks = [
    { title: "Tjänster", links: ["Trädgårdsservice", "Byggnationer", "Fastighetsskötsel"] },
    { title: "Företag", links: ["Om Oss", "Kontakt", "Integritet"] },
    { title: "Socialt", links: ["Instagram", "Facebook", "LinkedIn"] },
  ]

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* GRID */}
        <div className="footer-grid">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <img src={logo} alt="A.C Service" />
              <span className="footer-name">A.C Service</span>
            </div>

            <p className="footer-text">
              Din lokala partner för professionell service inom trädgård,
              byggnation och fastighetsskötsel.
            </p>

            <div className="footer-icons">
              {contactLinks.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  whileHover={{ y: -2 }}
                  className="footer-icon"
                >
                  <c.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LINKS */}
          {footerLinks.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="footer-title">{col.title}</h4>

              <ul className="footer-links">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* DIVIDER */}
        <div className="footer-divider" />

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="footer-bottom"
        >
          © {currentYear} A.C Service. Alla rättigheter reserverade.
        </motion.div>

      </div>
    </footer>
  )
}