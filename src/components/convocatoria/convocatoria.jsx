import Navbar from "../navbar/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import './convocatoria.css';

export default function Convocatoria() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Tomamos las TRES secciones como slides
  const slides = [
    {
      id: "bases",
      title: "Bases",
      content: (
        <div className="info-card">
          <div className="info-content">
              <p className="highlight-desk">
                Fecha: 09 de noviembre de 2025.<br />
                Hora de salida: 07:00 am.
              </p>
              <p className="title">Inscripciones:</p>
              <p>
                Del 22 de septiembre al 6 de noviembre
              </p>
              <p className="title">Salida:</p>
              <p>
                Parque Bicentenario
              </p>
              <p className="title">Distancia:</p>
                <ul>
                  <li>Distancia 3 km. Recreativa </li><b>Categoría única general</b>
                  <br></br>
                  <br /><li>Distancia 5 km. </li><b>Categoría única general</b>
                  <br></br><br /><li>Distancia 10 km. </li>
                  <b>Categorías</b>
                    <ul>                    
                    <b><li>Categoría Libre &nbsp; &nbsp; &nbsp; 15 a 30 años</li>
                    <li>Categoría Máster  &nbsp; &nbsp; &nbsp;   31 a 50 años</li>
                    <li>Categoría Veterano  &nbsp; &nbsp; &nbsp;   51 a 99 años</li>
                    <li>Capacidades Diferentes* &nbsp;15 a 99 años</li></b>
                    </ul>
                </ul>
                
              <p className="title">*Aplican restricciones con fundamento médico</p>
              <br></br><br />
              <p className="title">Entrega de kit</p>
              <p>
                08 de noviembre de 2025<br />
                Horario 09:00 a 15:00 horas<br />
                Parque Bicentenario Jardín Natura<br />
              </p>
                <br></br><br /> 
                <b><a href="https://n9.cl/9h2su" target="_blank"><p className="title">Ubicación aquí</p></a></b>
          </div>
        </div>
      )
    },
    {
      id: "premios5k",
      title: "Premios",
      content: (
        <div className="info-card premios5k-mobile">
          <div className="info-content">
            <p className="highlight-5km">
              Distancia 5 km.<br />
              
            </p>
            3 primeros lugares absolutos femenil y varonil.
            <br></br><br />
            <div className="premios-grid">
              <div className="premio-col">5km
              <div className="premio-col"><span className="circle">1er</span></div>
                <div className="premio-col"><span className="circle">2do</span></div>
                <div className="premio-col"><span className="circle">3er</span></div>
                </div>
              <div className="premio-col premios-list">Femenil
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$3,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,000.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
              </div>
              <div className="premio-col premios-list">Varonil
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$3,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,000.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
              </div>
            </div>
            <div className="bonus-box" style={{ color: "#FFFFFF" }}>Bono primeros lugares <span >$1,500.00</span></div>
          </div>
        </div>
      )
    },
    {
      id: "premios10k",
      title: "Premios",
      content: (
        <div className="info-card">
          <div className="info-content">
            <p className="highlight-5km">
              Distancia 10 km.<br />
              
            </p>
            3 primeros lugares de cada categoría, ambas <br />ramas.
            <div className="premios-grid">
              <div className="premio-col">10km
              <div className="premio-col"><span className="circle">1er</span></div>
                <div className="premio-col"><span className="circle">2do</span></div>
                <div className="premio-col"><span className="circle">3er</span></div>
                </div>
              <div className="premio-col premios-list">Femenil
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$4,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
              </div>
              <div className="premio-col premios-list">Varonil
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$4,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,500.00</div>
                <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
              </div>
            </div>
            <div className="bonus-box" style={{ color: "#FFFFFF" }}>Bono primeros lugares <span >$2,000.00</span></div>
          </div>
        </div>
      )
    },
    {
      id: "Notas",
      title: "Premios",
      content: (
        <div className="info-card">
          <div className="info-content">
            <p className="highlight-5km">
              Notas importantes:<br />
              
            </p>
           <p>
              Para recoger tu número, es obligatorio que acuda el titular de la inscripción y presentar: 
              Correo de confirmación de inscripción, ticket o cédula expedido en el centro de inscripción.
            </p>
                  <ul>
                    <li>Distancia 3 km es recreativa, no aplica premiación.</li>
                    <li>No habrá duplicidad de premios.</li>
                    <li>El pago de premiación será con cheque no aplica impuesto.</li>
                    <li>La vigencia para recoger tu premio es 15 días hábiles después del evento.</li>
                    <li>Es obligatorio presentar identificación Oficial en ORIGINAL, para reclamo de premiación.</li>
                    <li>Para efectos de premiación se considera el tiempo oficial.</li>
                    <li>Durante la ceremonia de premiación los ganadores deberán vestir la playera oficial del evento.</li>
                  </ul>
          </div>
        </div>
      )
    }
  ];

  const goNext = () => setCurrentIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  return (
    <div className="convocatoria-page-container">
      <Navbar />
      {isMobile ? (<div>
        <div className="mobile-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              className="carousel-slide"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-title-mob">{slides[currentIndex].title}</div>
              {slides[currentIndex].content}
            </motion.div>
          </AnimatePresence>

          {currentIndex > 0 && (
            <button className="carousel-btn left" onClick={goPrev}></button>
          )}
          {currentIndex < slides.length - 1 && (
            <button className="carousel-btn right" onClick={goNext}></button>
          )}
        </div>
        <div className="inscribirme-container-mob">
          <a
            href="https://www.farmatodo.com.mx/registro-carrera"
            target="_blank"
            rel="noopener noreferrer"
            className="inscribirme-btn-mob"
          >
            Inscribirme
          </a>
        </div>
      </div>) : (<div>
        {/* Botón Inscribirme */}
        <div className="inscribirme-container">
          <a
            href="https://www.farmatodo.com.mx/registro-carrera"
            target="_blank"
            rel="noopener noreferrer"
            className="inscribirme-btn"
          >
            Inscribirme
          </a>
        </div>

        <div className="convocatoria-main-content">
          <div className="convocatoria-header-section">
            <div className="header-card">
              <h3>Bases</h3>
            </div>
            <div className="header-card header-card--highlight">
              <h3>Premios</h3>
            </div>
          </div>

          <div className="convocatoria-sections-container">
            {/* Sección Bases */}
            <div className="info-card">
              <div className="info-content">
                <p className="highlight-desk">
                  Fecha: 09 de noviembre de 2025.<br />
                  Hora de salida: 07:00 am.
                </p>

                <p className="title">Inscripciones:</p>
                <p>
                  Del 22 de septiembre al 6 de noviembre
                </p>
                <p className="title">Salida:</p>
                <p>
                  Parque Bicentenario
                </p>
                <p className="title">Distancia:</p>
                <ul>
                  <li>Distancia 3 km. Recreativa </li><b>Categoría única general</b>
                  <br></br>
                  <br /><li>Distancia 5 km. </li><b>Categoría única general</b>
                  <br></br><br /><li>Distancia 10 km. </li>
                  <b>Categorías</b>
                    <ul>                    
                    <b><li>Categoría Libre &nbsp; &nbsp; &nbsp; 15 a 30 años</li>
                    <li>Categoría Máster  &nbsp; &nbsp; &nbsp;   31 a 50 años</li>
                    <li>Categoría Veterano  &nbsp; &nbsp; &nbsp;   51 a 99 años</li>
                    <li>Capacidades Diferentes* &nbsp;15 a 99 años</li></b>
                    </ul>
                </ul>
                
                <p className="title">*Aplican restricciones con fundamento médico</p>
                <br></br><br />
                <p className="title">Entrega de kit</p>
                <p>
                  08 de noviembre de 2025<br />
                  Horario 09:00 a 15:00 horas<br />
                  Parque Bicentenario Jardín Natura<br />
                </p>
                <br></br><br /> 
                <b><a href="https://n9.cl/9h2su" target="_blank"><p className="title">Ubicación aquí</p></a></b>
              </div>
            </div>
           <div class="newcontainer">
            {/* Premios 5k */}            
            <div className="newcontainerHijo1">
              <div className="info-content">
                <p className="highlight-5km">
                  Distancia 5 km.<br />
                  
                </p>
                3 primeros lugares absolutos femenil y varonil.
                <br></br><br />
                <div className="premios-grid">
                  <div className="premio-col">5km
                  <div className="premio-item"><span className="circle">1er</span></div>
                    <div className="premio-item"><span className="circle">2do</span></div>
                    <div className="premio-item"><span className="circle">3er</span></div>
                    </div>
                  <div className="premio-col premios-list">Femenil
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$3,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,000.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
                  </div>
                  <div className="premio-col premios-list">Varonil
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$3,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,000.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
                  </div>
                </div>
                <div className="bonus-box" style={{ color: "#FFFFFF" }}>Bono primeros lugares <span >$1,500.00</span></div>
              </div>
            </div>

            {/* Premios 10k */}
            <div className="newcontainerHijo1">
              <div className="info-content">
                <p className="highlight-5km">
                  Distancia 10 km.<br />
                  
                </p>
                3 primeros lugares de cada categoría, ambas <br />ramas.
                <div className="premios-grid">
                  <div className="premio-col">10km
                  <div className="premio-item"><span className="circle">1er</span></div>
                    <div className="premio-item"><span className="circle">2do</span></div>
                    <div className="premio-item"><span className="circle">3er</span></div>
                    </div>
                  <div className="premio-col premios-list">Femenil
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$4,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
                  </div>
                  <div className="premio-col premios-list">Varonil
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$4,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$2,500.00</div>
                    <div className="premios-box" style={{ color: "#FFFFFF" }}>$1,000.00</div>
                  </div>
                </div>
                <div className="bonus-box" style={{ color: "#FFFFFF" }}>Bono primeros lugares <span >$2,000.00</span></div>
              </div>
              
            </div>
            <div className="newcontainerHijo">
              <p className="highlight-5km">
                  Notas importantes:                 
        </p>
        <p>
          Para recoger tu número, es obligatorio que acuda el titular de la inscripción y presentar: 
          Correo de confirmación de inscripción, ticket o cédula expedido en el centro de inscripción.
        </p>
              <ul>
                <li>Distancia 3 km es recreativa, no aplica premiación.</li>
                <li>No habrá duplicidad de premios.</li>
                <li>El pago de premiación será con cheque no aplica impuesto.</li>
                <li>La vigencia para recoger tu premio es 15 días hábiles después del evento.</li>
                <li>Es obligatorio presentar identificación Oficial en ORIGINAL, para reclamo de premiación.</li>
                <li>Para efectos de premiación se considera el tiempo oficial.</li>
                <li>Durante la ceremonia de premiación los ganadores deberán vestir la playera oficial del evento.</li>
              </ul>
              </div>
            </div>
          </div>
          {/* NOTAS IMPORTANTES */}
 
        </div>
      </div>)}

      {!isMobile && (<div className="footer-sponsors-carousel">
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
          </div>)}

      {isMobile && (<div className="footer-sponsors-carousel">
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
          </div>)}
    </div>
  );
}
