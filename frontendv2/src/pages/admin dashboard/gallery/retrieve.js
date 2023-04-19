import {useState, useEffect} from "react";

export function Gallery() {
    

    // Fecth gallery
    const[gallery, setGallery] = useState([])
    useEffect(()=>{
        
        
        const fetchgallery =() =>{
            fetch('http://localhost:5000/api/v2/gallery/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setGallery(data.data); localStorage.setItem('mygallery', JSON.stringify(data.data))})
            
           
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
            gallery?.map(galleryItem =>(
                                <tr className="head">
                                    <td>{galleryItem["id"]}</td>
                                    <td>{galleryItem["name"]}</td>
                                    <td>{galleryItem["image"]}</td>
                                    <td>{galleryItem["description"]}</td>
                                    <td>{galleryItem["registered_by"]}</td>
                                    <td>{galleryItem["registered at"]}</td>
                                    <td>{galleryItem["updated_at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}