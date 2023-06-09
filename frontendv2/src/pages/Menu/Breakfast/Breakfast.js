import React, {useState, useEffect} from "react";

import "./Breakfast.css";
import ListItem from "../../../components/ListItem/ListItem";

// const menuDataLeft = [
//   {
//     title: "Eggs Benedict",
//     description: "with either bacon or salmon",
//     price: "21",
//   },
//   {
//     title: "Enfold’s famous Crepes",
//     description: "with fresh fruit, bacon and maple syrup",
//     price: "16",
//   },
//   {
//     title: "French Toasted Brioche",
//     description:
//       "with grilled banana, bacon, rosewater mascarpone and maple syrup",
//     price: "17",
//   },
// ];

// const menuDataRight = [
//   {
//     title: "Low Carb Breakfast",
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
// ];

const Breakfast = () => {

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
    <div className="container breakfast">
      <h1 className="heading-secondary">
        break<span>fast</span>
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
  );
};

export default Breakfast;
