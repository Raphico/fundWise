import { useState } from "react"
import { navigation } from "../constants"
import { motion } from "framer-motion"
import { variants } from "../utils/motion"
import { HashLink as Link } from "react-router-hash-link"

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(oldNavValue => !oldNavValue)
    return <Navigate to="features" />
  }
 
  const navElements = navigation.map(n => <li key={n.id}>
    <Link 
      smooth
      className="text-secondary fs-300 mb-2" 
      to={n.navigate}
    >
      {n.name}
    </Link>
  </li>)

  return (
    <motion.nav 
      variants={variants}
      initial="hidden"
      whileInView="show"
      className="nav flex mt-5"
    >
      <div className="logo-container flex">
        <img className="logo" src="/logo.svg" alt="logo" />
        <h2 className="logo-title fw-700">
          Fund<span className="text-accent">Wise</span>
        </h2>
      </div>

      <button 
        className="mobile-menu-toggle"
        data-visible={nav}
        aria-controls="primary-navigation"
        onClick={handleNav}
      >
        <span className="sr-only">Menu</span>
      </button>

      <ul 
        id="primary-navigation" 
        className="primary-navigation flex"
        aria-expanded={nav}
        role="list"
      >
        {navElements}
      </ul>
    </motion.nav>
  )
}

export default Navbar
