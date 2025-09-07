import React from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const ItemDetail = ({id, nombre, precio, img, desc, stock}) => {

  //Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);


  // Creamos una función manejadora de la cantidad.
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //Creo un objeto con el item y la cantidad
    const item = {id, nombre, precio, img}
    agregarAlCarrito(item, cantidad)
    toast.success("Su compra fue agregada al carrito",{autoClose: 1500, theme: "dark", position: "top-right"});
  }

  return (
    <div className="item-detail">
      <div>
        <img src={img} alt={nombre} />
        <p className="product-id">ID: {id}</p>
      </div>
      <div>
        <h2>{nombre}</h2>
        <h3 className="precio">${precio}</h3>
        <p>{desc}</p>


        
        {agregarCantidad > 0 ? (
          <div className="botones-post-agregar">
            <Link to="/" className="btn-neon">Seguir comprando</Link>
            <Link to="/cart" className="btn-neon">Terminar compra</Link>
          </div>
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
        )}

      </div>
    </div>
  )
}

export default ItemDetail
