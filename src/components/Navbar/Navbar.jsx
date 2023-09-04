import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import React from 'react'
import logo from "../../images/logo.png"



const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
		document.querySelector('.buton').classList.toggle(
			'hide'
		)
  }

  return (
    <header>
			<a href="/" className="logo"><img src={logo} alt="logo" width='200px'/></a>
			<div className="navbar">
				<nav ref={navRef}>
					<a href="/#">ANA SAYFA</a>
					<a href="/#">HİZMETLER</a>
					<a href="/#">PROJELER</a>
					<a href="/#">İLETİŞİM</a>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes/>
					</button>
				</nav>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars className="buton"/>
				</button>
			</div>
		</header>
  )
}

export default Navbar