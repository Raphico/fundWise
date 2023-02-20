import { useState } from "react"
import { navigation } from "../constants"
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(oldNavValue => !oldNavValue)
  }

  const navElements = navigation.map(n => <li key={n.id}>
    <AnchorLink className="text-secondary fs-300 mb-2" href={n.navigate}>
      {n.name}
    </AnchorLink>
  </li>)

  return (
    <nav className="nav flex mt-5">
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
        className="primary-navigation"
        aria-expanded={nav}
        role="list"
      >
        {navElements}
      </ul>
    </nav>
  )
}

export default Navbar
