import React from 'react';
import "./hizmetler.css"
import Card from '../Card/Card';

const Hizmetler = () => {

  return (
    <section className='hizmetler'>
        <h5>HİZMETLER</h5>
        <div className="hizmet-cards">
          <Card></Card>
        </div>
    </section>
  )
}

export default Hizmetler