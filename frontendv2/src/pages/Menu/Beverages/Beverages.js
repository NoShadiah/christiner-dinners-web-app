import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";
import {useState, useEffect} from 'react';

// const menuDataLeft = [
//   {
//     title: "7up",
//     price: 3.9,
//   },
//   {
//     title: "root beer",
//     price: 3.9,
//   },
//   {
//     title: "apple juice",
//     price: 3.9,
//   },
//   {
//     title: "orange juice",
//     price: 3.9,
//   },
// ];

// const menuDataMiddle = [
//   {
//     title: "coke",
//     price: 3.9,
//   },
//   {
//     title: "pepsi",
//     price: 2.9,
//   },
//   {
//     title: "red bull",
//     price: 4.9,
//   },
//   {
//     title: "bitter lemon",
//     price: 2.95,
//   },
// ];

// const menuDataRight = [
//   {
//     title: "crush",
//     price: 2.7,
//   },
//   {
//     title: "crystal light",
//     price: 5.9,
//   },
//   {
//     title: "banana shake",
//     price: 5.9,
//   },
//   {
//     title: "pineapple shake",
//     price: 7.95,
//   },
// ];

const Beverages = () => {

  const[menuDataLeft, setmenuItems] = useState([])
  const[menuDataRight, setmenuItemsR] = useState([])
  const[menuDataMiddle, setmenuItemsM] = useState([])
    
  useEffect(()=>{
      
      
      const fetchMenuItems =() =>{
          fetch("http://localhost:5000/api/v2/menu/clients_view",{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        }).then((response) => response.json())
          .then((data)=>{setmenuItems(data.Items); setmenuItemsR(data.Items); setmenuItemsM(data.Items); localStorage.setItem('MyMenuItems', JSON.stringify(data.Items))})
          
         
      }
      fetchMenuItems();
  }, [])

  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
          Non Alcoholic <span> Beverages</span>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.image}
              />
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.image}
              />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
