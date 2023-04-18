import React from "react";

import "./CoffeeSelection.css";
import "../LunchTime/LunchTime.css"
import {useEffect, useState} from "react";
import ListItem from "../../../components/ListItem/ListItem";
import coffeeImage from "../../../assets/coffee-items.jpg";

// const menuDataRight = [
//   {
//     title: "Low Carb CoffeeSelection",
//     description: "grilled chicken breast with veggies",
//     price: 13,
//   },
//   {
//     title: "Bagel",
//     description: "with salmon, cream cheese and salsa",
//     price: 8.5,
//   },
//   {
//     title: "American Pancakes",
//     description: "with chocolate  sauce or maple syrup, honey and cream",
//     price: 21,
//   },
//   {
//     title: "Low Carb CoffeeSelection",
//     description: "grilled chicken breast with veggies",
//     price: 13,
//   },
//   {
//     title: "Bagel",
//     description: "with salmon, cream cheese and salsa",
//     price: 8.5,
//   },
//   {
//     title: "American Pancakes",
//     description: "with chocolate  sauce or maple syrup, honey and cream",
//     price: 21,
//   },
//   {
//     title: "Low Carb CoffeeSelection",
//     description: "grilled chicken breast with veggies",
//     price: 13,
//   },
// ];



const CoffeeSelection = () => {

  
  const[menuDataRight, setmenuItems] = useState([])
    
  useEffect(()=>{
      
      
      const fetchMenuItems =() =>{
          fetch("http://localhost:5000/api/v2/menu/clients_view",{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        }).then((response) => response.json())
          .then((data)=>{ setmenuItems(data.Items); localStorage.setItem('MyMenuItems', JSON.stringify(data.Items))})
          
         
      }
      fetchMenuItems();
  }, [])

  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
        coffee<span> Selection</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={coffeeImage} alt="coffee items" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.name}
              description={data.description}
              price={data.price}
              itemImage={data.image}
            />
            // <div>
            //   <p>{data.name}</p>
            //   <p>{data.description}</p>
            //   <span>{data.price}</span>
            //   <img src={data.image}/>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
