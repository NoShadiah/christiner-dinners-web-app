import {useState, useEffect} from "react";

export function FoodItems() {
    

    // Fecth FoodItems
    const[foodItems, setFoodItems] = useState([])
    useEffect(()=>{
        
        
        const fetchFoodItems =() =>{
            fetch('http://localhost:5000/api/v2/fooditems/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setFoodItems(data.data); localStorage.setItem('myFoodItems', JSON.stringify(data.data))})
            
           
        }
        fetchFoodItems();
    }, [])
    // console.log("FoodItems state:",FoodItems)
    // console.log("storageFoodItems", JSON.parse(localStorage.getItem("myFoodItems")))
    return (
            <div className='section'>
                <h3>A list of my FoodItems</h3>
                <div className='list'>
                   <table>
                         <tr className="head">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Registered by</th>
                            <th>Registered at</th>
                            <th>Updated at</th>
                        </tr>
                        {
            foodItems?.map(fooditem =>(
                                <tr className="head">
                                    <td>{fooditem["id"]}</td>
                                    <td>{fooditem["name"]}</td>
                                    <td>{fooditem["image"]}</td>
                                    <td>{fooditem["description"]}</td>
                                    <td>{fooditem["in_category"]}</td>
                                    <td>{fooditem["registered_by"]}</td>
                                    <td>{fooditem["registered at"]}</td>
                                    <td>{fooditem["updated_at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}