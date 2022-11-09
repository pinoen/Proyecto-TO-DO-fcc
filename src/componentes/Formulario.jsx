import React, { useState } from 'react'
import '../hojas-de-estilo/Formulario.css'

const Formulario = ({ agregar }) => {

  const [tarea, setTarea] = useState('');

  const handleChange = (e) => {
    setTarea(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    agregar(tarea)
  }

  return (
    <form className='tarea-form'>
      <input
        onChange={handleChange}
        className='tarea-input'
        type='text'
        placeholder='Ingresa una tarea'
        name='texto'
      />

      <button
        onClick={handleClick}
        className='tarea-btn'>Agregar tarea</button>
    </form>
  )
}

export default Formulario