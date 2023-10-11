import React from 'react'
import "./iletisim.css"
import pin from "../../images/pin.png"
import phone from "../../images/phone.png"
import email from "../../images/email.png"

const Iletisim = () => {
  return (
    <section className='iletisim'>
      <h5 data-aos='fade-down'>İLETİŞİM</h5>
      <div className="iletisim-container">
        <div className="iletisim-card" data-aos="fade-up">
          <img src={email} alt="email" />
            <h6>Mail atın</h6>
            <p>info@korkutefeelektrik.com</p>
        </div>
        <div className="iletisim-card" data-aos="fade-up">
          <img src={pin} alt="pin" />
          <h6>Adresimiz</h6>
          <p>Muslihittin Mahallesi, Mehmet Zekai Özbek Sk. No:51/A, 48000 Menteşe/Muğla</p>
        </div>
        <div className="iletisim-card" data-aos="fade-up">
          <img src={phone} alt="phone" />
          <h6>Bizi arayın</h6>
          <p>(0252) 225 34 34</p>
        </div>
      </div>
    </section>
  )
}

export default Iletisim