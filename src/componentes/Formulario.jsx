import React from 'react'
import '../hojas-de-estilo/Formulario.css'

const Formulario = () => {

  return (
    <form className='tarea-form'>
      <input
        className='tarea-input'
        type='text'
        placeholder='Ingresa una tarea'
        name='texto'
      />
      <button className='tarea-btn'>Agregar tarea</button>
    </form>
  )
}

export default Formulario