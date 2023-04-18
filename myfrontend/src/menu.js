import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"


import { UserRegister } from "./components/users/register";


import { Gallery } from "./components/gallery/retrieve";

import { SearchProduct } from "./components/menu/search";
import { UsersMenu } from "./components/menu/Usersmenu";
import { Orders } from "./components/orders/retrieve";


import "./styling.css"



export const Menu = () => {
    const [active, setActive] = useState("");
    
    
        
        return(
            
             
            <div id="dashboard">
                
                
                <div className="dropdown">
                    <p className="dropbtn">Menu</p>
                    <div className="dropdown-content">
                        
                        <button className="btn" onClick={()=>setActive("all Menu")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                        
                    </div>
                </div>
                <div className="dropdown">
                    {/* <p className="dropbtn">Orders</p> */}
                    <div className="dropbtn">
                        <button className="btn" onClick={()=>setActive("all orders")}>My order</button> <br></br>
                        {/* <button className="btn" onClick={()=>setActive("delivered orders")}>Delivered</button> <br></br> */}
                         
                    </div>
                </div>
                <div className="dropdown">
                    {/* <p className="dropbtn">Gallery</p> */}
                    <div className="dropbtn">

                        <button className="btn" onClick={()=>setActive("all gallery items")}>Gallery</button> <br></br>
                        
                    </div>
                </div><br></br>
                
                
                
                
                
                <div id="content_section">
                    <div>
                        
                        {active ==="Search item" && <SearchProduct/>}
                        
                    </div>
                    <div>
                        
                    
                        {active === "all Menu" && <UsersMenu/> }
                        {active === "all orders" && <Orders/> }
                        {active === "all gallery items" && <Gallery/> }
                        
                    </div>
                </div>

            </div>
            
            
            

        );
    

    
}

