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
            categories?.map(category =>(
                                <tr className="head">
                                    <td>{category["id"]}</td>
                                    <td>{category["name"]}</td>
                                    <td>{category["image"]}</td>
                                    <td>{category["description"]}</td>
                                    <td>{category["registered_by"]}</td>
                                    <td>{category["registered at"]}</td>
                                    <td>{category["updated_at"]}</td>
                                </tr>)) 
                        }
                                
                                </table>
                    </div>
                </div>
        )
}