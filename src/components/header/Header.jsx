import React from 'react'
import './header.css'
import Cta from './cta'
import Me from '../../assests/pk.jpg'
import HeaderSocial from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I am</h5>
        <h1>Priyanka Kumari</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocial />

            <div className="me">
                <img src={Me} alt="me" />
                
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        
       </div> 
      

    </header>
  )
}

export default Header