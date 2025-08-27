import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <div className="cart-empty">
                <h2>🛒 Tu carrito está vacío. ¡Hora de llenarlo! ✨</h2>
                <Link to="/" className="btn-neon">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {carrito.map(prod => (
                <CartItem
                    key={prod.item.id}
                    item={prod.item}
                    cantidad={prod.cantidad}
                />
            ))}

            <div className="cart-summary">
                <h3>Total: ${total}</h3>
                <div className="cart-buttons-column">
                    <button className="btn-neon-small" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn-neon">Finalizar compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
