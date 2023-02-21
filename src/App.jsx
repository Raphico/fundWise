import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </Router>
  )
}

export default App
