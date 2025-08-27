import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
    const { eliminarDelCarrito } = useContext(CarritoContext)
    return (
        <div className="cart-item">
            <img src={item.img} alt={item.nombre}/>
            <div className="cart-item-info">
                <h4>{item.nombre}</h4>
                <p>Cantidad: {cantidad}</p>
                <p>Precio unitario: ${item.precio}</p>
                <p>Subtotal: ${item.precio * cantidad}</p>
                <button className="btn-neon-small" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem
