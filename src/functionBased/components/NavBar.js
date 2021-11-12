import React, { useState } from "react";
import './App.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navBar">
<button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map(link => {
return (
  <li key={link.id}>
    <NavLink
     to={link.path}
      activeClassName="active-link"
      onClick={() => closeMenu()} exact>
      {link.text}
    </NavLink>
  </li>
)
        })}
      </ul>
    </nav>
  )
}
export default Navbar