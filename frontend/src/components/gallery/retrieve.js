import {useState, useEffect} from "react";

export function Gallery() {
    

    // Fecth gallery
    const[gallery, setGallery] = useState([])
    useEffect(()=>{
        
        
        const fetchgallery =() =>{
            fetch('http://localhost:5000/api/v2/foodgallery/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setGallery(data); localStorage.setItem('mygallery', JSON.stringify(data))})
            
           
        }
        fetchgallery();
    }, [])
    // console.log("gallery state:",gallery)
    // console.log("storagegallery", JSON.parse(localStorage.getItem("mygallery")))
    return (
            <div className='section'>
                <h3>A list of my gallery</h3>
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
            gallery?.map(user =>(
                                <tr className="head">
                                    <td>{user["id"]}</td>
                                    <td>{user["name"]}</td>
                                    <td>{user["image"]}</td>
                                    <td>{user["description"]}</td>
                                    <td>{user["registered_by"]}</td>
                                    <td>{user["registered at"]}</td>
                                    <td>{user["updated_at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}