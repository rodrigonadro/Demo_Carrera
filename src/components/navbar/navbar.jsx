import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link, useLocation  } from "react-router-dom"  // 👈 Import necesario para rutas internas
import Logo from '../../assets/Images/Logo.png';
import Logo2 from '../../assets/Images/PatrocinadoresM.png';
import './navbar.css'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  const isMarketingHash =
    (location.hash || "").startsWith("#msdynmkt_") ||
    (location.hash || "").includes("msdynmkt_trackingcontext")

  const isHome =
    location.pathname === "/" &&
    (
      location.hash === "" ||
      location.hash === "#/" ||         // por si usas HashRouter
      isMarketingHash                   // hash de marketing -> sigue siendo home
    )


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
          
  

          {/* Links de navegación interna */}
          <nav className={`nav-menu ${isMobile ? "navbar-links-mobile" : ""}`}>

          {isMobile && (
            <>
              <Link to="/" className="home-link mobile">
                <img
                  src="https://gruporfpqa.vteximg.com.br/arquivos/home_landing.png"
                  alt="home"
                  className="icon-home"
                />
              </Link>
               {(!isHome && isMobile) && (
                <img
                  src={Logo2}
                  alt="Patrocinadores"
                className="logo-sponsors logo-sponsors-mobile"
                />
              )}
             
            </>
          )}

          {/* DESKTOP (NO TOCAR) */}
          {(!isHome && !isMobile) && (
            <img
              src={Logo}
              alt="home"
              className="icon-home-imgg"
            />
          )}

          {!isMobile && (
            <Link to="/" className="home-link only-home">
              <img
                src="https://gruporfpqa.vteximg.com.br/arquivos/home_landing.png"
                alt="home"
                className="icon-home"
              />
            </Link>
          )}

          <Link className="ruta" to="/convocatoria">Convocatoria</Link>
          <Link className="ruta" to="/ruta">Nuestras rutas</Link>
        </nav>
        </div>
      </div>
    </motion.header>
  )
}
