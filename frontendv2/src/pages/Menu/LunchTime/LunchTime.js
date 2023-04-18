import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './LunchTime.css';
import {useState, useEffect} from 'react';




  
  

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
            .then((data)=>{setmenuItems(data.Items); setmenuItemsR(data.Items);localStorage.setItem('MyMenuItems', JSON.stringify(data.Items))})
            .then()
           
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