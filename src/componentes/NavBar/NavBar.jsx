import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../imgs/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="link-container">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <h1>Hecteón</h1>
          </div>
        </Link>

        {/* Botón hamburguesa solo visible en móvil */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`menu-cart-container ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/categoria/Carteles" className="link-categorias">
                Carteles
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/Cuadros" className="link-categorias">
                Cuadros
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/Artesanias" className="link-categorias">
                Artesanias
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/Muebles" className="link-categorias">
                Muebles
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
