import React from 'react'
import "./card.css"

const Card = (props) => {
  const { icon, title, children } = props;

  return (
    <div className='card' data-aos="fade-up">
        <img src={icon} alt="icon" />
        <h6>{title}</h6>
        <p>{children}</p>
    </div>
  )
}

export default Card