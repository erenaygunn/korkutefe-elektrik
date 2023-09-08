import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import trafo from '../../images/trafo.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./hizmetler.css"

const Hizmetler = () => {
  return (
    <div className='hizmetler'>
        <h5>HİZMETLER</h5>
        <div className="hizmet-cards">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={trafo} />
            <Card.Body>
              <Button variant="primary">Trafo Kiralama</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={trafo} />
            <Card.Body>
              <Button variant="primary">Trafo Kiralama</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={trafo} />
            <Card.Body>
              <Button variant="primary">Trafo Kiralama</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={trafo} />
            <Card.Body>
              <Button variant="primary">Trafo Kiralama</Button>
            </Card.Body>
          </Card>
        </div>
    </div>
  )
}

export default Hizmetler