import {useState, useEffect} from "react";

export function Categories() {
    

    // Fecth categories
    const[categories, setCategories] = useState([])
    useEffect(()=>{
        
        
        const fetchcategories =() =>{
            fetch('http://localhost:5000/api/v2/foodcategories/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setCategories(data); localStorage.setItem('mycategories', JSON.stringify(data))})
            
           
        }
        fetchcategories();
    }, [])
    // console.log("categories state:",categories)
    // console.log("storagecategories", JSON.parse(localStorage.getItem("mycategories")))
    return (
            <div className='section'>
                <h3>A list of my categories</h3>
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
            categories?.map(user =>(
                                <tr className="head">
                                    <td>{user["id"]}</td>
                                    <td>{user["name"]}</td>
                                    <td>{user["image"]}</td>
                                    <td>{user["description"]}</td>
                                    <td>{user["registered_by"]}</td>
                                    <td>{user["registered_at"]}</td>
                                    <td>{user["updated_at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}