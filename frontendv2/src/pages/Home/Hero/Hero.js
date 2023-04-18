import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to NAVZ Restaurant
            </h1>

            <p className='text-white'>The best convinient restaurant available in Kampala</p>

            <p className='text-white'>
                Book, Order online or call <span className='special-word'>070-123-4567</span>
            </p>
        </div>
    </div>
  )
}

export default Hero