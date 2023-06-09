import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './LunchTime.css';
import {useState, useEffect} from 'react';



// const menuDataLeft = [
//     {
//       title: "Spiced Pigeon",
//       description: "Ale & artichokes",
//       price: 38,
//     },
//     {
//       title: "Ribeye Steak",
//       description: "Mushroom ketchup & fries",
//       price: 42,
//     },
//     {
//       title: "Duck Breast",
//       description: "Smoked confit fennel & umbles",
//       price: 35,
//     },
//     {
//       title: "Roast Turbot",
//       description: "Mussel & seaweed ketchup, salmon roe & sea rosemary",
//       price: 22,
//     },
//   ];
  
  // const menuDataRight = [
  //   {
  //     title: "Linefish",
  //     description: "Pan fried line fish, herbed nicola potato and mussel salad",
  //     price: 27,
  //   },
  //   {
  //     title: "Autumn Lamb",
  //     description: "Pan seared lamb loin, slow roasted lamb shanks",
  //     price: 33,
  //   },
  //   {
  //     title: "Duck",
  //     description: "Confit duck leg, mushroom and liver stuffing and onions",
  //     price: 75,
  //   },
  //   {
  //     title: "Homedried Tomato",
  //     description: "with sesame, aubergine puree and burnt aubergine jelly",
  //     price: 22,
  //   },
  // ];

  
const LunchTime = () => {

  const[menuDataLeft, setmenuItems] = useState([])
  const[menuDataRight, setmenuItemsR] = useState([])
    
  useEffect(()=>{
      
      
      const fetchMenuItems =() =>{
          fetch("http://localhost:5000/api/v2/menu/clients_view",{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        }).then((response) => response.json())
          .then((data)=>{setmenuItems(data.Items); setmenuItemsR(data.Items); localStorage.setItem('MyMenuItems', JSON.stringify(data.Items))})
          
         
      }
      fetchMenuItems();
  }, [])

  return (
    <div className='section'>
        <div className="container lunch-time">
      <h1 className="heading-secondary">
        Lunch<span>Time</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
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
  )
}

export default LunchTime