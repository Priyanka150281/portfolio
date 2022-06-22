import React from 'react'
import './portfolio.css'
import Img1 from '../../assests/portfolio1.jpg'
import Img2 from '../../assests/portfolio3.jpg'


const data=[
  {
    id:1,
    image:Img1,
    title:'A sample of educational website .',
    github:'https://github.com/Priyanka150281/ezucation1',
    demo: 'https://priyanka150281.github.io/ezucation1/'
  },
  {
    id:2,
    image:Img2,
    title:'Dice-throwing simulator , between two players .',
    github:'https://github.com/Priyanka150281/Dice15',
    demo: 'https://priyanka150281.github.io/Dice15/'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id}className='portfolio_item'>
              <div className='portfolio1_item-image'>
                <img src={image} alt={title}/>         
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </article>
            )
          })
        }
      
        
      </div>
    </section>
  )
}

export default Portfolio