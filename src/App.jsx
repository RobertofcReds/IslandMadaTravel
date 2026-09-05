import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Diego from './pages/Diego'
import Nosy from './pages/Nosy'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 relative">
          <StarBackground />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/diego" element={<Diego />} />
              <Route path="/nosy" element={<Nosy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer className="relative z-10" />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
