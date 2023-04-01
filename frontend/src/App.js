import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { Users } from "./components/users/retrieve";
import { Categories } from "./components/categories/retrieve";
import { useState } from "react";
import "./styling.css"


const App = () => {
    const [active, setActive] = useState("")
    
        
        return(

            <div id="dashboard">
                <div id="sidebar">
                    <h1>NAVZS  Restaurant</h1>
                    <div id="db_links">
                        <div className="dropdown">
                                <p className="dropbtn" >Users</p>
                                <div className="dropdown-content">
                                    <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                    <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                    <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                    <button className="btn">Register admin</button>
                                </div>
                            </div>
                        <div className="dropdown">
                                <p className="dropbtn" >Menu</p>
                                <div className="dropdown-content">
                                    <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                    <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                    <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                    <button className="btn">Register admin</button>
                                </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Orders</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Food Categories</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Categories")}>All users</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Food Items</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Gallery</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Settings</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Users")}>All users</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete users</button>
                                <button className="btn" onClick={()=> setActive("")}>Update Users</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                    </div>
                </div>
                
                <div id="content_section">
                    <h2>this is the content_section</h2>
                    {active === "All Users" && <Users/>}
                    {active === "All Categories" && <Categories/>}
                </div>
                
            </div>

        );
    

    
}

export default App