import React, { useState, useEffect } from "react";

import "./AmazingMeal.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";
import image3 from "../../../assets/cake.jpg";
import image4 from "../../../assets/coffee.jpg";
import image5 from "../../../assets/pizza.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {
  const[items, setItems] = useState([])
    useEffect(()=>{
        
        
        const fetchcategories =() =>{
            fetch('http://localhost:5000/api/v2/foodcategories/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setItems(data); localStorage.setItem('mycategories', JSON.stringify(data))})
            
           
        }
        fetchcategories();
    }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.image} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Door always open for those that wish to enjoy the cool breeze at the NAVZs HQ
              <br />
              <br />
              To my french friends: "La porte est toujours ouverte pour ceux qui souhaitent profiter de la brise fraîche au siège de NAVZs."
            </p>

            <blockquote>
              Come one com all, rather the E.A'can way "Karibuni wote"
            </blockquote>
          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
                We've got the best and healthy ingredients for you comfy and deliciouso meal. Our meals are simple but mind blowing.

                Our kenyan chef says: "Chakula chetu ni cha kawaida lakini kinachovutia akili."
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span> orders and reservations</span>
                </h3>
              </div>

              <p>
                All this can be made with in no time, and to maintain a good customer relationship, we are able to give you immediate feedback
              </p>
            </div>
          </div>
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
                We've got the best and healthy smoothies. Our smoothies are simple but mind soothing and thirst quenghing.

                Our spanish team credits: "Nuestros batidos son simples pero relajantes y saciantes para la sed."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
