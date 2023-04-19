import {useState, useEffect} from "react";
import { DeleteItem } from "./delete";

export function UsersMenu() {
    

    // Fecth menuItems
    const[menuItems, setmenuItems] = useState([])
    
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
                                            
                                             
                                            
                                    </div>
                                    
                                    
                                    
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
                                                        
                                                        <h3>{menuitem["name"]}</h3>
                                                        <p>Description: {menuitem["description"]}</p>
                                                        <h4>Price: {menuitem["price_unit"]} {menuitem["price"]}</h4>
                                                        <p>Served at: {menuitem["served_at"]}</p>
                                                         
                                                        
                                                </div>
                                               <br></br><br></br>
                                                        
                                                        
                                                
                                            </div>
                                            <hr></hr></>))}
                            
                </div>
            </div>
        </>
        )
}