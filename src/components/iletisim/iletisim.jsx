import React from 'react'
import "./iletisim.css"
import pin from "../../images/pin.png"
import phone from "../../images/phone.png"
import email from "../../images/email.png"

const Iletisim = () => {
  return (
    <section className='iletisim'>
      <h5>İLETİŞİM</h5>
      <div className="iletisim-container" data-aos="fade-up">
        <div className="iletisim-card">
          <img src={email} alt="email" />
            <h6>Mail atın</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam iste, voluptatum perferendis similique repudiandae culpa architecto excepturi doloremque iure.</p>
        </div>
        <div className="iletisim-card">
          <img src={pin} alt="pin" />
          <h6>Adresimiz</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam iste, voluptatum perferendis similique repudiandae culpa architecto excepturi doloremque iure.</p>
        </div>
        <div className="iletisim-card">
          <img src={phone} alt="phone" />
          <h6>Bizi arayın</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam iste, voluptatum perferendis similique repudiandae culpa architecto excepturi doloremque iure.</p>
        </div>
      </div>
    </section>
  )
}

export default Iletisim