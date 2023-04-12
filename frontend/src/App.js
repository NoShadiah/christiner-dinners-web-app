import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { Users } from "./components/users/retrieve";
import { UserRegister } from "./components/users/register";
import { Login } from "./components/login_signup/login"
import { Categories } from "./components/categories/retrieve";
import { Registercategory } from "./components/categories/register";
import { Gallery } from "./components/gallery/retrieve";
import { RegisterGalleryItem } from "./components/gallery/register";
import { RegisterFoodItem } from "./components/food_items/register";
import { FoodItems } from "./components/food_items/retrieve";
import { RegisterMenuItem } from "./components/menu/register";
import { SearchProduct } from "./components/menu/search";
import { MenuItems } from "./components/menu/retrieve";
import { Orders } from "./components/orders/retrieve";


import "./styling.css"



const App = () => {
    const [active, setActive] = useState("");
    
    
        
        return(
            
             
            <div id="dashboard">
                <div>
                <button onClick={()=>setActive("Login")}>Login</button> <br></br>
                <div className="dropdown">
                    <p className="dropbtn">Users</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("register user")}>Register</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all users")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete user")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Food categories</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("register food category")}>Register</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all Food categories")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update Food categories")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete category")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Food items</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("register food item")}>Register</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all Food items")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update Food items")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete item")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Menu</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("register menu item")}>Register</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all Menu")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update Menu")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete menu item")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Orders</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("all orders")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update order")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delivered orders")}>Delivered</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete order item")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Gallery</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("register gallery item")}>Register</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all gallery items")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update gallery item")}>Update</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete gallery item")}>Delete</button> 
                    </div>
                </div><br></br>
                <div className="dropdown">
                    <p className="dropbtn">Settings</p>
                    <div className="dropdown-content">
                        <button className="btn" onClick={()=>setActive("Add settings")}>Add settings</button> <br></br>
                        <button className="btn" onClick={()=>setActive("all settings")}>View all</button> <br></br>
                        <button className="btn" onClick={()=>setActive("update settings")}>Update settings</button> <br></br>
                        <button className="btn" onClick={()=>setActive("delete settings")}>Delete</button> 
                    </div>
                </div><br></br>
                </div>
                
                
                
                <div id="content_section">
                    <div>
                        {active ==="register user" && <UserRegister/>}
                        {active ==="register food category" && <Registercategory/>}
                        {active ==="register food item" && <RegisterFoodItem/>}
                        {active ==="register menu item" && <RegisterMenuItem/>}
                        {active ==="Search item" && <SearchProduct/>}
                        {active ==="register gallery item" && <RegisterGalleryItem/>}
                        {active ==="Add settings" && <UserRegister/>}
                    </div>
                    <div>
                        {active === "Login" && <Login/> }
                        {active === "all users" && <Users/> }
                        {active === "all Food categories" && <Categories/> }
                        {active === "all Food items" && <FoodItems/> }
                        {active === "all Menu" && <MenuItems/> }
                        {active === "all orders" && <Orders/> }
                        {active === "all gallery items" && <Gallery/> }
                        {active === "all settings" && <Users/> }
                    </div>
                </div>

            </div>
            
            
            

        );
    

    
}

export default App