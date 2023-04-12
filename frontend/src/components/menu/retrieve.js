import {useState, useEffect} from "react";
import { DeleteItem } from "./delete";

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

    const[item, setItem] = useState()
    const[menuItem, setMenuItem] = useState()

    const ChangeItem=(e)=>{
        setItem(e.target.value)
       
        console.log(item)

    }
// Getting a specific item
    useEffect(()=>{
        const singleProduct =() => {
            const myURL = 'http://localhost:5000/api/v2/menu/item/'+ item 
            const NoSpaces = myURL.replace(/ /g, " ");
            fetch(NoSpaces, {
                methods:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=> response.json())
            .then((info)=>{setMenuItem(info.details); localStorage.setItem('my menu item', JSON.stringify(info))})
        }
      singleProduct();
    },[item])
//deleting
    const OneItem=()=>{
        if (!menuItem) {
            return <p>Loading...</p>;
          }
        return (
            <>
            <div classnmae='section'>
               <div className="list">
                    <div className="menuitem">
                                    <div>
                                        <img src={menuItem["image"]} alt="Item image"/>
                                    </div>
                                    <div>
                                            
                                            <h3>{menuItem["id"]}:{menuItem["name"]}</h3>
                                            <p>Description: {menuItem["description"]}</p>
                                            <h4>Price: {menuItem["price_unit"]} {menuItem["price"]}</h4>
                                            <p>Served at: {menuItem["served_at"]}</p>
                                            <p>Under category: {menuItem["category"]}</p> 
                                            
                                    </div>
                                    <div>   <br></br><br></br>
                                            
                                            <p>Registered by: {menuItem["registered_by"]}</p>
                                            <p>Registered at: {menuItem["reg_at"]}</p>
                                            <p>Updated by: {menuItem["updated_by"]}</p>
                                            <p>Updated at: {menuItem["updated_at"]}</p>
                                            
                                    </div>
                                    <button onClick={()=><DeleteItem/>}></button>
                                    
                    </div>
               </div>
        </div></>
        )
    }
    const[returnItem, setReturnItem] = useState("")

        
    // console.log("menuItems state:",menuItems)
    // console.log("storagemenuItems", JSON.parse(localStorage.getItem("mymenuItems")))
        

    return (<>
            <div>
                <form >
                    <input
                    type="text"
                    placeholder="enter menu item number"
                    onChange={ChangeItem}
                    value={item}
                    />
                    <button onClick={(e)=>{e.preventDefault(); setReturnItem("Searched Item");}}>Search</button>
                </form>
                <div>
                    <button onClick={(e)=>{e.preventDefault(); setReturnItem("Viewed items");}}>Al set!</button>
                    {returnItem === "Searched Item" && <OneItem/>}
                </div>
            </div>
            
            <div className='section'>
                <h3>A list of my menu Items</h3>
                <div className='list'>
                {
            menuItems?.map(menuitem =>(<>
            <div className="menuitem">
                                    <div>
                                        <img src={menuitem["image"]} alt="Item image"/>
                                    </div>
                                    <div>
                                            
                                            <h3>{menuitem["id"]}:{menuitem["name"]}</h3>
                                            <p>Description: {menuitem["description"]}</p>
                                            <h4>Price: {menuitem["price_unit"]} {menuitem["price"]}</h4>
                                            <p>Served at: {menuitem["served_at"]}</p>
                                            <p>Under category: {menuitem["category"]}</p> 
                                            
                                    </div>
                                    <div>   <br></br><br></br>
                                            
                                            <p>Registered by: {menuitem["registered_by"]}</p>
                                            <p>Registered at: {menuitem["reg_at"]}</p>
                                            <p>Updated by: {menuitem["updated_by"]}</p>
                                            <p>Updated at: {menuitem["updated_at"]}</p>
                                            
                                    </div>
                                    
                                </div>
                                <hr></hr></>))}
                   
                    </div>
                </div>
                </>
        )
}