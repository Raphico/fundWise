import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
