import React from 'react'
import './hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {

  return (
    <section className='hero' id='anasayfa'>
        <Navbar></Navbar>
        <div className="container">
          <h1>Korkut Efe Elektriğe Hoş geldiniz</h1>
          <h4>Muğla ve civarındaki bütün elektrik işlerinizde <br /> bize güvenebilirsiniz.</h4>
          <a href="#hizmetler"><button className="action">DEVAM ET</button></a>
        </div>
    </section>
  )
}

export default Hero