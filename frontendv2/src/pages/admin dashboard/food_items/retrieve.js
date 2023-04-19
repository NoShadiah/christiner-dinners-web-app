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
                {
            foodItems?.map(fooditem =>(<>
            <div className="fooditem">
                                    <div>
                                        <img src={fooditem["image"]} alt="item image"/>
                                    </div>
                                    <div>                               
                                            <h3>{fooditem["id"]}:{fooditem["name"]}</h3>
                                            <p>Description: {fooditem["description"]}</p>
                                            
                                            <p>Served at: {fooditem["served_at"]}</p>
                                            <p>Under category: {fooditem["in_category"]}</p> 
                                    </div>
                                    <div>   <br></br><br></br>
                                            <p>Registered by: {fooditem["registered_by"]}</p>
                                            <p>Registered at: {fooditem["reg_at"]}</p>
                                            <p>Updated by: {fooditem["updated_by"]}</p>
                                            <p>Updated at: {fooditem["updated_at"]}</p>
                                    </div>
                                </div>
                                <hr></hr></>))}
                   {/* <table>
                         <tr className="head">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Category</th>
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
                                </table> */}
                    </div>
                </div>
        )
}