import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "../imgs/logo.png";

const NavBar = () => {
  return (
    <header>

    <div className="nav-container">
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <h1>Hecteón</h1>
        </div>

        <div className="menu-cart-container">
          <ul>
            <li>Carteles</li>
            <li>Cuadros</li>
            <li>Artesanias</li>
            <li>Muebles</li>
          </ul>
          <CartWidget/>
        </div>
    </div>

    </header>
  )
}

export default NavBar