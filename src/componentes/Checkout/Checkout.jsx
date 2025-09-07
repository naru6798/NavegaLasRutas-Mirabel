import { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'  

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total, totalCompra } = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos")
            return
        }

        if (email !== emailConfirmacion) {
            setError("Los mails no coinciden")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                setError("Se produjo un error al crear la orden, por favor intente nuevamente")
            })
    }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <form className="checkout-form" onSubmit={manejadorFormulario}>

                <div className="checkout-items">
                    {carrito && carrito.length > 0 ? (
                        carrito.map(prod => (
                            <div className="checkout-item" key={prod.item.id}>
                                <p className="item-nombre">{prod.item.nombre} x {prod.cantidad}</p>
                                <p className="item-precio">${prod.item.precio}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>Tu carrito está vacío</p>
                    )}
                </div>

                <div className="checkout-field">
                    <label>Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="checkout-field">
                    <label>Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="checkout-field">
                    <label>Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="checkout-field">
                    <label>Mail</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="checkout-field">
                    <label>Confirme su mail</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p className="checkout-error">{error}</p>}

                <button type='submit' className="checkout-button">Confirmar Compra</button>

                {ordenId && (
                    <strong className="checkout-success">¡Gracias por su compra! Su número de orden es {ordenId}</strong>
                )}

            </form>
        </div>
    )
}

export default Checkout
