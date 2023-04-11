import {useState, useEffect} from "react";

export function MenuItems() {
    

    // Fecth menuItems
    const[menuItems, setmenuItems] = useState([])
    useEffect(()=>{
        
        
        const fetchMenuItems =() =>{
            fetch('http://localhost:5000/api/v2/menu/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setmenuItems(data.data); localStorage.setItem('MyMenuItems', JSON.stringify(data.data))})
            
           
        }
        fetchMenuItems();
    }, [])
    // console.log("menuItems state:",menuItems)
    // console.log("storagemenuItems", JSON.parse(localStorage.getItem("mymenuItems")))
    return (
            <div className='section'>
                <h3>A list of my menu Items</h3>
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
            menuItems?.map(menuitem =>(
                                <tr className="head">
                                    <td>{menuitem["id"]}</td>
                                    <td>{menuitem["name"]}</td>
                                    <td>{menuitem["image"]}</td>
                                    <td>{menuitem["description"]}</td>
                                    <td>{menuitem["in_category"]}</td>
                                    <td>{menuitem["registered_by"]}</td>
                                    <td>{menuitem["registered at"]}</td>
                                    <td>{menuitem["updated_at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}