import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";
import {useState, useEffect} from "react";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";

// const menuData = [
//   {
//     title: "Sesame crusted scotch fillet",
//     description: "with honeyed Pedro Ximenez sauce and potato cake",
//     price: "7.50",
//     img: image1,
//   },
//   {
//     title: "Roast Rack of Lamb",
//     description: "with herb crust and fruity mesclun salad and straw potato",
//     price: "7.50",
//     img: image2,
//   },
// ];



const MenuOfTheDay = () => {

  const[menuData, setmenuItems] = useState([])
    
    useEffect(()=>{
        
        
        const fetchMenuItems =() =>{
            fetch("http://localhost:5000/api/v2/menu/clients_view",{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setmenuItems(data.Items); localStorage.setItem('MyMenuItems', JSON.stringify(data.Items))})
            
           
        }
        fetchMenuItems();
    }, [])

  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>menu </span>of the day
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.name}
            description={data.description}
            price={data.price}
            itemImage={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay;
