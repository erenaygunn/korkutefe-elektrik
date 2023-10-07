import React from 'react';
import "./hizmetler.css"
import Card from '../Card/Card';
import trafo from '../../images/trafo.jpg'

const Hizmetler = () => {

  return (
    <section className='hizmetler'>
        <h5>HİZMETLER</h5>
        <div className="hizmet-cards">
          <div className='responsive-row'>
            <Card image={trafo} title='Trafo Kiralama'></Card>
            <Card image={trafo} title='Trafo Kiralama'></Card>
          </div>
          <div className='responsive-row'>
            <Card image={trafo} title='Trafo Kiralama'></Card>
            <Card image={trafo} title='Trafo Kiralama'></Card>
          </div>
        </div>
    </section>
  )
}

export default Hizmetler