import React from 'react'
import './hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {

  function takeAction() {
    
  }

  return (
    <section className='hero'>
        <Navbar></Navbar>
        <div className="container">
          <h1>Korkut Efe Elektriğe Hoş geldiniz</h1>
          <h4>Muğla ve civarındaki bütün elektrik işlerinizde <br /> bize güvenebilirsiniz.</h4>
          <button className='action' onClick={takeAction}>DEVAM ET</button>
        </div>
    </section>
  )
}

export default Hero