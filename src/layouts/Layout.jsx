import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import "./Layout.css"

export default function Layout() {

  return (
    <div className="layout">

      <ScrollToTop />

      <Navbar />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}