import React, { useState } from 'react'
import './ItemCount.css'   // ✅ nuevo archivo CSS para estilos

const ItemCount = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(1)

  const Incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const Decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
    }
  }

  return (
    <div className="contador-container">
      <div className="contador-controles">
        <button className="contador-btn" onClick={Decrementar}>-</button>
        <span className="contador-num">{contador}</span>
        <button className="contador-btn" onClick={Incrementar}>+</button>
      </div>

      <div className="contador-agregar">
        <button className="btn-agregar" onClick={()=>funcionAgregar(contador)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
