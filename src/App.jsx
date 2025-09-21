import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Ruta from './components/ruta/ruta.jsx'
import Convocatoria from './components/convocatoria/convocatoria.jsx'
// import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ruta" element={<Ruta />} />
      <Route path="/convocatoria" element={<Convocatoria />} />
    </Routes>
  )
}

export default App
