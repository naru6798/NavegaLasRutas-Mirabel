import React from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';


const ItemDetail = ({id, nombre, precio, img, desc, stock}) => {

  //Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Creamos una función manejadora de la cantidad.
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
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


        {
        // Aca empleamos la logica de montaje y desmontaje del contador.
        agregarCantidad > 0 
        ? (<Link to="/cart">Agregar al carrito</Link>) 
        : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

      </div>
    </div>
  )
}

export default ItemDetail
