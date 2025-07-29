import carrito from "../imgs/carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <img src={carrito} alt="carrito"/>
    </div>
  )
}

export default CartWidget