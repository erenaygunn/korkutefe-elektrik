import React from 'react'
import trafo from '../../images/trafo.jpg'
import "./card.css"

const Card = () => {
  return (
    <div className='card'>
        <img src={trafo} alt="img" />
        <p>Trafo Kiralama</p>
    </div>
  )
}

export default Card