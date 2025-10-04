import './home.css'
import '../navbar/navbar.css'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../navbar/navbar.jsx';
import SegundaCarrera from '../../assets/Images/i_FondoCDMXMob.png';
import CorremosTodos  from '../../assets/Images/i_Slogan.png';
import { Helmet } from "react-helmet";

export default function Home() {
  const [startMoveUp, setStartMoveUp] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!showMain) document.body.classList.add("intro-active");
    const t1 = setTimeout(() => setStartMoveUp(true), 2000);
    const t2 = setTimeout(() => setShowMain(true), 3500);
    const t3 = setTimeout(() => setShowNavbar(true), 3500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    if (showMain) document.body.classList.remove("intro-active");
  }, [showMain]);

  const raceInfo = {
    "3Km": { title: "Recreativa Categoría única general", price: "$200.00", url: "https://www.farmatodo.com.mx/caminata-3-km-ft/p" },
    "5Km": { title: "Categoría única general", price: "$270.00", url: "https://www.farmatodo.com.mx/carrera-5-km-ft/p" },
    "10Km": { title: "Todas las categorias", price: "$330.00", url: "https://www.farmatodo.com.mx/carrera-10-km-ft/p" }
  };

  return (
    <div className="app-container">
      {/* 🧭 SEO & Open Graph Metadata */}
      <Helmet>
        <html lang="es" />
        <title>Carrera Farmatodo 2025 | 3K, 5K y 10K CDMX</title>

        {/* 🔹 Metadatos principales */}
        <meta
          name="description"
          content="Únete a la Carrera Farmatodo 2025 en el Parque Bicentenario CDMX. Corre 3K, 5K o 10K y disfruta de premios, diversión y salud con toda la familia."
        />
        <meta
          name="keywords"
          content="Carrera Farmatodo, 5K, 10K, CDMX, carrera 2025, Parque Bicentenario, registro Farmatodo, salud y deporte"
        />
        <link rel="canonical" href="https://www.farmatodo.com.mx/carrera-farmatodo-2025" />

        {/* 🔹 Open Graph para redes sociales */}
        <meta property="og:title" content="Carrera Farmatodo 2025 | 3K, 5K y 10K CDMX" />
        <meta property="og:description" content="Corre por la salud y la diversión. Carrera Farmatodo 2025 en el Parque Bicentenario CDMX. ¡Inscríbete ahora!" />
        <meta property="og:image" content="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_logoFTchico.png" />
        <meta property="og:url" content="https://www.farmatodo.com.mx/carrera-farmatodo-2025" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carrera Farmatodo 2025 | 3K, 5K y 10K CDMX" />
        <meta name="twitter:description" content="Corre por la salud y la diversión en la Carrera Farmatodo 2025 – Parque Bicentenario CDMX." />
        <meta name="twitter:image" content="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_logoFTchico.png" />

        <link rel="icon" href="https://gruporfpqa.vteximg.com.br/arquivos/favicon_race.png" />
        <meta name="theme-color" content="#0d3b82" />
      </Helmet>

       <div className="Navbar-principal">
          {/* Navbar */}
          {showNavbar && <Navbar/>}              
        </div>
      <h1 className="main-title-seo">
        Carrera Farmatodo 2025 – Ciudad de México
      </h1>

      {/* Intro Animation */}
      {!showMain && (
        <div className="intro">
          <div className="intro-inner">
            <motion.img
              src={isMobile
                ? "https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_logoFTchico.png"
                : "https://rodrigonadro.github.io/turnfolleto/demos/magazine/logoFT.png"}
              alt="Farmatodo"
              initial={{ y: -200, opacity: 1 }}
              animate={!startMoveUp
                ? { y: [-200, 0, -45, 0, -18, 0] }
                : { y: -180, opacity: 0, scale: 0.85 }}
              transition={!startMoveUp
                ? { duration: 2, times: [0, 0.45, 0.7, 0.85, 0.95, 1], ease: "easeOut" }
                : { duration: 0.9, ease: "easeIn" }}
              className={`intro-logo ${isMobile ? "intro-logo--mobile" : "intro-logo--desktop"}`}
            />
            <motion.img
              src={isMobile
                ? "https://gruporfpqa.vteximg.com.br/arquivos/union2_mob_landing.png"
                : "https://gruporfpqa.vteximg.com.br/arquivos/footer_race.png"}
              alt="Footer grande (intro)"
              initial={{ opacity: 1, y: 0 }}
              animate={startMoveUp ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`intro-footer ${isMobile ? "intro-footer--mobile" : "intro-footer--desktop"}`}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <motion.main
        className="main"
        initial={{ opacity: 0 }}
        animate={showMain ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      >
        {isMobile && (
          <motion.img
            src="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_logoFTchico.png"
            initial={{ opacity: 0, y: 8 }}
            animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="main-logo-mobile-union"
          />)}
          <motion.img
            src="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_Patrocinadores.png"
            initial={{ opacity: 0, y: 8 }}
            animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`main-powerade ${isMobile ? "main-powerade--mobile" : "main-powerade--desktop"}`}
          />

          <div className="main-inner">
            {isMobile && (
              <motion.img              
                src={SegundaCarrera}
                alt="Carrera"
                initial={{ opacity: 0, y: 30 }}
                animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="main-logo_mobile-union"
              />)}
            {!isMobile && (
              <motion.img
                src="https://rodrigonadro.github.io/turnfolleto/demos/magazine/i_FondoCDMXC.png"
                alt="Carrera"
                initial={{ opacity: 0, y: 30 }}
                animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="main-logo"
              />)}

            <div className="nuevoDiv">
              <div className="Navbar2">
                {/* Navbar */}
                {showNavbar && <Navbar/>}              
              </div>
                
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="main-text"
              >
                {isMobile && (
                  <motion.img              
                    src={CorremosTodos}
                    alt="Corremos Todos"               
                    className="corremos_todos_mobile"
                  />)}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="main-text"
              >
                <p>
                  El próximo 9 de noviembre llega a la Ciudad de México la 2ª Carrera Farmatodo.<br />
                  Un encuentro deportivo abierto para todos, desde corredores experimentados, hasta 
                  quienes buscan un nuevo reto.<br />
                  ¡Vive la energía del movimiento y disfruta de salud y diversión!
                </p>
                <h3>¡Elige tu distancia!</h3>
              </motion.div>
            </div>

            {/* Botones de distancia */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="race-section"
            >
              {!selectedDistance ? (
                <div className="race-buttons">
                  {["3Km", "5Km", "10Km"].map(d => (
                    <button key={d} className="race-button" onClick={() => setSelectedDistance(d)}>
                      {d}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="race-info">
                  <button className="race-info__back" onClick={() => setSelectedDistance(null)} title="Regresar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7v6h6"></path>
                      <path d="M21 17a8 8 0 0 0-8-8H3"></path>
                    </svg>
                  </button>
                  <p className="race-info__title">{raceInfo[selectedDistance].title}</p>
                  <p className="race-info__price"><strong>Precio: {raceInfo[selectedDistance].price}</strong></p>
                  <a className="race-info__cta" href={raceInfo[selectedDistance].url} target="_blank" rel="noreferrer">
                    Quiero correr esta carrera
                  </a>
                </div>
              )}
            </motion.div>
          </div>

        {/* Footer */}
        <motion.footer className="footer" initial={{ opacity: 0, y: 10 }} animate={showMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.7, delay: 1 }}>
          <div className="footer-icons">
            <a href="https://www.instagram.com/farmatodo_mexico/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/people/Farmatodo/61577322527320/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
          </div>
          <p>Farmatodo_Mexico</p>
          <a href="https://www.farmatodo.com.mx/aviso-de-privacidad">Aviso de privacidad</a>
          {/* Carrusel de patrocinadores */}
          <div className="footer-sponsors-carousel">
            <div className="sponsors-track">
              {[...Array(13)].map((_, i) => (
                <img
                  key={i}
                  src={`https://rodrigonadro.github.io/turnfolleto/demos/magazine/sponsor${i+1}.png`}
                  alt={`Sponsor ${i+1}`}
                />
              ))}
              {[...Array(13)].map((_, i) => (
                <img
                  key={`dup-${i}`}
                  src={`https://rodrigonadro.github.io/turnfolleto/demos/magazine/sponsor${i+1}.png`}
                  alt={`Sponsor ${i+1}`}
                />
              ))}
            </div>
          </div>
        </motion.footer>

      </motion.main>
    </div>
  )
}
