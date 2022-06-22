import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/'><AiOutlineFacebook/></a>
        <a href='https://www.instagram.com/'><BsInstagram/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer