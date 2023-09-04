import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import trafo from '../../images/trafo.jpg'

const Hizmetler = () => {
  return (
    <div className='hizmetler'>
        <h5>HİZMETLER</h5>
        <div className="hizmet-card">
            <Image src={trafo} rounded width='400px'/>
        </div>
    </div>
  )
}

export default Hizmetler