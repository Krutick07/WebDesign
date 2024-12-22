import React from 'react'
import './Hero.css'
import Header from '../Header/Header'


const Hero = () => {
  return (
    <div className='hero'>
        <Header/>
        <div className="h-text">
          <span className='text-stroke'>Develop</span>
          <span>Digital
          <p>With every single one of our clients, we bring forth a deep passion for
            creative problem solving <br/>
            -which is what we deliver.
          </p>
          </span>
          <span className='text-stroke'>Universe</span>
        </div>
    </div>
  )
}

export default Hero