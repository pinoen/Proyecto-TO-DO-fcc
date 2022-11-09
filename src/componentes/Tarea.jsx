import React from 'react'
import '../hojas-de-estilo/Tarea.css'

const Tarea = ({ texto, eliminar, id }) => {

  const handleClick = () => {
    eliminar(id);
  }

  return (
    <div className='tarea-contenedor'>
      <div
        className='tarea-texto'>
        {texto}
      </div>

      <div className='tarea-contenedor-iconos'>
        <button
          onClick={handleClick}
          className='tarea-icono'>Eliminar</button>
      </div>
    </div>
  )
}

export default Tarea