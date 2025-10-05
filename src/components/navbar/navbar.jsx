import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"  // 👈 Import necesario para rutas internas
import './navbar.css'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${isMobile ? "navbar-mobile" : ""}`}
    >
      <div className="navbar-inner">

        {/* Logo sección izquierda */}
        <div className="navbar-left">
          {!isMobile && (
            <img
              src="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_logoFTchico.png"
              alt="Farmacatodo"
              className="logo-main"
            />
          )}
        </div>

        {/* Links de navegación */}
        <div className={`navbar-right ${isMobile ? "navbar-right-mobile" : ""}`}>
          {/* Icono de home siempre visible */}
          <Link to="/" className="home-link mobile">
            <img
              src="https://gruporfpqa.vteximg.com.br/arquivos/home_landing.png"
              alt="home"
              className="icon-home"
            />
          </Link>

          {/* Links de navegación interna */}
          <nav className={`nav-menu ${isMobile ? "navbar-links-mobile" : ""}`}>
            <Link to="/convocatoria">Convocatoria</Link>
            <Link to="/ruta">Nuestras rutas</Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
