import React from 'react'
import "./projeler.css"
import bir from "../../images/bir.jpg"
import collectionfill from "../../images/collectionfill.svg"
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel'
import trafo from "../../images/proje/trafo.jpg"

const Projeler = () => {

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

  return (
    <section className='projeler' data-aos="fade-up">
        <h5>PROJELER</h5>
        <div className="proje-container">
          <div className="proje" data-aos="fade-up">
            <a className="proje-link" onClick={handleShow1}>
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt="" />
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Sample Project</p>
              <p className='proje-date'>2023</p>
            </div>
          </div>
          <div className="proje" data-aos="fade-up">
            <a className="proje-link" onClick={handleShow2}>
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt=""/>
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Örnek İnşaat</p>
              <p className='proje-date'>2023</p>
            </div>
          </div>
          <div className="proje" data-aos="fade-up">
            <a className="proje-link" onClick={handleShow3}>
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt="" />
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Trafo</p>
              <p className='proje-date'>2023</p>
            </div>
          </div>
        </div>

        <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
            <Modal.Title>Sample Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <img src={trafo} alt='' width='100%'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={trafo} alt='' width='100%'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={trafo} alt='' width='100%'/>
          </Carousel.Item>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
            <Modal.Title>Örnek İnşaat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose2}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
            <Modal.Title>Trafo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose3}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>

    </section>
  )
}

export default Projeler