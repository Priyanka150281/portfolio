import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/priyanka-kumari-ba13b7214/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blank"><FaGithub/></a>
          

    </div>
  )
}

export default headerSocials