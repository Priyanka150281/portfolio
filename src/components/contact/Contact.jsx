import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipmcnos', 'template_q98adze', form.current, 'RuQIvL0STCOkeSd_t')
   

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icons'/>
          <h4> Email </h4>
          <h5>priyanka150281@gmail.com</h5>
          <a href="mailto:priyanka150281@gmail.com">Send a message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Yoyr Full Name" required/>
          <input type="email" name='email' placeholder="Yoyr Email" required/>
        
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact