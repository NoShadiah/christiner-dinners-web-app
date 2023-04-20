import React from 'react'

import './Hero.css'
import { Link, Outlet } from 'react-router-dom'

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
       <Link to="menu"><button>ORDER NOW</button></Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Hero