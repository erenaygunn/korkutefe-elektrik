import React from 'react'
import "./projeler.css"
import bir from "../../images/bir.jpg"
import collectionfill from "../../images/collectionfill.svg"

const Projeler = () => {
  return (
    <section className='projeler'>
        <h5>PROJELER</h5>
        <div className="proje-container">
          <div className="proje">
            <a href="" className="proje-link">
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt="" />
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Proje Adı</p>
              <p className='proje-date'>2019</p>
            </div>
          </div>
          <div className="proje">
            <a href="" className="proje-link">
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt="" />
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Proje Adı</p>
              <p className='proje-date'>2019</p>
            </div>
          </div>
          <div className="proje">
            <a href="" className="proje-link">
              <img src={bir} alt="" className='proje-img'/>
                <div className="overlay">
                  <img src={collectionfill} alt="" />
                </div>
            </a>
            <div className="proje-caption">
              <p className='proje-title'>Proje Adı</p>
              <p className='proje-date'>2019</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projeler