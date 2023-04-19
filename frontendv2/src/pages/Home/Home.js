import React from 'react'
import Hero from './Hero/Hero'
import AmazingMeal from './AmazingMeal/AmazingMeal'
import OurChef from './OurChef/OurChef'
import AddToCart from '../Delivery/AddToCart/AddToCart'

const Home = () => {
  return (
    <div>
      <Hero />
      <AmazingMeal />
      <AddToCart />
      <OurChef />
    </div>
  )
}

export default Home