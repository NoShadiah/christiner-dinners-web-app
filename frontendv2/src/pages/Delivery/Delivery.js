import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/cake.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from './AddToCart/AddToCart'

const Delivery = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["eat at ", <span>Home</span>]}
        text="Delivery avialable Mon – Fri, 09am – 20pm"
      />
      <DeliveryInfo />
      
    </div>
  )
}

export default Delivery