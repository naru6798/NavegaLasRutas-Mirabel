import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="item-card">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}>
          <button>Ver detalle</button>
        </Link>

        
    </div>
  )
}

export default Item