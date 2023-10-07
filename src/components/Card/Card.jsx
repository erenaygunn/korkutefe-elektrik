import React from 'react'
import trafo from '../../images/trafo.jpg'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="img" />
        <p>{props.title}</p>
    </div>
  )
}

export default Card