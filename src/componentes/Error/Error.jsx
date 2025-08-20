import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="error-container">
      <h1>⚠️ Sitio en mantenimiento</h1>
      <p>Disculpe las molestias, el sitio está en mantenimiento. Intente más tarde.</p>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default Error
