import "./scrolltotop.css"
import React, { useState, useEffect } from 'react';
import uparrow from "../../images/uparrow.png"

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop}><img src={uparrow} alt="up-arrow" /></button>
    </div>
  )
}

export default ScrollToTop