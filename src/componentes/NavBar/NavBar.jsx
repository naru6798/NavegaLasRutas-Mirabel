import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "../imgs/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>


      <div className="nav-container">
        <Link to="/" className="link-container">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <h1>Hecteón</h1>
          </div>
        </Link>


        <div className="menu-cart-container">
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
          <CartWidget/>
        </div>
    </div>

    </header>
  )
}

export default NavBar