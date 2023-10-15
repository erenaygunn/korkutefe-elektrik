import React from 'react'
import "./footer.css"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

const Footer = () => {
  return (
    <footer>
        <div className="info">Copyright © Eren Aygün • 2023</div>
        <div className="links">
            <a href=""><img src={linkedin} alt="linkedin"/></a>
            <a href=""><img src={github} alt="github"/></a>
        </div>
    </footer>
  )
}

export default Footer