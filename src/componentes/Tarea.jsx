import React from 'react'
import '../hojas-de-estilo/Tarea.css'

const Tarea = () => {
  return (
    <div className='tarea-contenedor'>
      <div className='tarea-texto'>
        Aprender React
      </div>

      <div className='tarea-contenedor-iconos'>
        <button className='tarea-icono'>Eliminar</button>
      </div>
    </div>
  )
}

export default Tarea