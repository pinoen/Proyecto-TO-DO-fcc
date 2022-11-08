import React from 'react'
import Formulario from './Formulario'
import '../hojas-de-estilo/Lista.css'
import Tarea from './Tarea';

const Lista = () => {

  return (
    <>
      <Formulario />
      <div className='lista-contenedor'>
        <Tarea />
      </div>
    </>
  )
}

export default Lista