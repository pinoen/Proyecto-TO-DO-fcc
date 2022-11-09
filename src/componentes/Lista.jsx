import React, { useState } from 'react'
import Formulario from './Formulario'
import '../hojas-de-estilo/Lista.css'
import Tarea from './Tarea';

const Lista = () => {

  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    setTareas(preTasks => {
      return [...preTasks, tarea];
    })
  }

  const deleteTarea = (id) => {
    setTareas(preTasks => {
      return preTasks.filter((tarea, index) => index !== id);
    })
  }

  return (
    <>
      <Formulario
        agregar={addTarea}
      />

      <div className='lista-contenedor'>
        {tareas.map((tarea, index) => (
          <Tarea
            key={index}
            id={index}
            texto={tarea}
            eliminar={deleteTarea}
          />
        ))}
      </div>
    </>
  )
}

export default Lista