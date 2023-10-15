import React from 'react'
import "./projeler.css"
import bir from "../../images/bir.jpg"
import collectionfill from "../../images/collectionfill.svg"
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel'
import trafo from "../../images/proje/trafo.jpg"
import trafo2 from "../../images/proje/trafo2.jpg"
import trafo3 from "../../images/proje/trafo3.jpg"
import trafo4 from "../../images/proje/trafo4.jpg"
import sample from "../../images/proje/sample.jpg"
import sample2 from "../../images/proje/sample2.jpg"
import sample3 from "../../images/proje/sample3.jpg"
import insaat from "../../images/proje/insaat.jpg"
import insaat2 from "../../images/proje/insaat2.jpg"
import insaat3 from "../../images/proje/insaat3.jpg"

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
    <section className='projeler' data-aos="fade-up" id='projeler'>
        <h5>PROJELER</h5>
        <div className="proje-container">
          <div className="proje" data-aos="fade-up">
            <a className="proje-link" onClick={handleShow1}>
              <img src={sample2} alt="" className='proje-img'/>
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
              <img src={insaat3} alt="" className='proje-img'/>
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
              <img src={trafo2} alt="" className='proje-img'/>
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
            <img src={sample} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sample2} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sample3} alt='img'/>
          </Carousel.Item>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
            <Modal.Title>Örnek İnşaat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <img src={insaat} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={insaat2} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={insaat3} alt='img'/>
          </Carousel.Item>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
            <Modal.Title>Trafo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <img src={trafo} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={trafo2} alt='img'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={trafo4} alt='img'/>
          </Carousel.Item>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>

    </section>
  )
}

export default Projeler