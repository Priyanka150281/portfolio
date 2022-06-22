import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h2>What skills I have</h2>
        <div className="container experience_container">
            <div className="experience_frontend">

                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                    </article>

                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                  
                    </article>

                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                    </article>

                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                         <h4>React</h4>
                         <small className='text-light'>Intermediate</small>
                    </div>
                    </article>
                </div>
                </div>
            


            <div className="Skills">
                <h3>Skills</h3>
                <div className="experience_content">
                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>C/C++</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                    </article>

                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>SQL</h4>
                        <small className='text-light'>Beginner</small>
                    </div>
                    </article>

                    <article className='experience_details'><BsPatchCheckFill className='experience_details-icons'/>
                    <div>
                        <h4>Python</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                    </article>
                </div>
            
            </div>
        </div>
        
    </section>
  )
}

export default Experience