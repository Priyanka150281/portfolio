import React from 'react'
import './about.css'
import ME from '../../assests/me.jpeg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>

          <p>
            Hello I am Priyanka Kumari and I am from Barddhaman , West Bengal. I am a present student of Computer Science and Technology at IIEST , Shibpur. I am a Frontend Web Developer , my short-term goal is to get intern in a company where I can grow my working skills and gain more knowledge. My long-term goal is to become a more knowledgeable person and to achieve a good position in my life.
          </p>
          

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About