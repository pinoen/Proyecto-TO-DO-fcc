import React from 'react'
import freeCodeCamp from '../imagenes/fcc.svg'


const Logo = () => {
  return (
    <div className='fcc-logo-contenedor'>
      <img
        src={freeCodeCamp}
        className='fcc-logo'
        alt='Logo de free code camp'
      />
    </div>
  )
}

export default Logo