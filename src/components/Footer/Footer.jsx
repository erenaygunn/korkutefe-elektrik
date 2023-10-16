import React from 'react'
import "./footer.css"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

const Footer = () => {
  return (
    <footer>
        <div className="info">Copyright © Eren Aygün • 2023</div>
        <div className="links">
            <a href="https://www.linkedin.com/in/eren-ayg%C3%BCn-9ba060251/" target='_blank'><img src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/erenaygunn" target='_blank'><img src={github} alt="github"/></a>
        </div>
    </footer>
  )
}

export default Footer