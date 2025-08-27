import carrito from "../imgs/carrito.png";
import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito = carrito;

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img src={imgCarrito} alt="carrito" />
        {cantidadTotal > 0 && <strong className="cart-count">{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;
