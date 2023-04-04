import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { Users } from "./components/users/retrieve";
import { UserRegister } from "./components/users/register";
import { Categories } from "./components/categories/retrieve";
import { Registercategory } from "./components/categories/register";
import { Gallery } from "./components/gallery/retrieve";
import { RegisterGalleryItem } from "./components/gallery/register";
import { RegisterFoodItem } from "./components/food_items/register";
import { FoodItems } from "./components/food_items/retrieve";

import { useState } from "react";
import "./styling.css"



const App = () => {
    const [active, setActive] = useState("");
    
    
        
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
                                    <button className="btn" >Update Users</button>
                                    <button className="btn" onClick={()=> setActive("Register User")}>Register admin</button>
                                </div>
                            </div>
                        <div className="dropdown">
                                <p className="dropbtn">Menu</p>
                                <div className="dropdown-content">
                                    <button className="btn" onClick={()=> setActive("Menu")}>All menu item</button>
                                    <button className="btn" onClick={()=> setActive("Delete Menu")}>Delete menu item</button>
                                    <button className="btn" onClick={()=> setActive("")}>Update menu item</button>
                                    <button className="btn" onClick={()=> setActive("Register menu item")}>Register admin</button>
                                </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Orders</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All orders")}>All orders</button>
                                <button className="btn" onClick={()=> setActive("Delete orders")}>Delete order</button>
                                <button className="btn" onClick={()=> setActive("")}>Update order</button>
                                <button className="btn">Register admin</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Food Categories</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={() => setActive("All Categories")}>All Categories</button>
                                <button className="btn" onClick={() => setActive("Delete")}>Delete Categories</button>
                                <button className="btn" onClick={() => setActive("Update category")}>Update Categories</button>
                                <button className="btn" onClick={() => setActive("Register Category")}>Registercategory</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Food Items</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("All Food Items")}>All FoodItems</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>Delete FoodItems</button>
                                <button className="btn" onClick={()=> setActive("Update Food Items")}>Update FoodItems</button>
                                <button className="btn" onClick={()=> setActive("Register Food Item")}>Register Food Item</button>
                            </div>
                            </div>
                        <div className="dropdown">
                            <p className="dropbtn" >Gallery</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=> setActive("Gallery")}>Gallery</button>
                                <button className="btn" onClick={()=> setActive("Delete")}>DelGallery</button>
                                <button className="btn" onClick={()=> setActive("")}>UpdateGallery</button>
                                <button className="btn" onClick={()=> setActive("Register Image")}>Register admin</button>
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
                    <h2>This is a CRUD operation admin panel</h2>
                    {/* <button onClick={()=>setActive("Register User")}>Register</button> */}
                    ;
                    <div>
                        <div>
                            {active === "Register User" && <UserRegister/>}
                            {active === "All Users" && <Users/>}
                            {active === "Register Category" && <Registercategory/>}
                            {active === "All Categories" && <Categories/>}
                            {active === "Register Food Item" && <RegisterFoodItem/>}
                            {active === "All Food Items" && <FoodItems/>}
                            {active === "Gallery" && <Gallery/>}
                            {active === "Register Image" && <RegisterGalleryItem/>}

                            <button onClick={()=>{setActive(""); setActive("All Users")}}>Save</button>
                            
                        </div>
                        <div>
                            
                            {/* {active === "All Categories" && <Categories/>} */}
                        </div>
                    </div>
                </div>
                
            </div>

        );
    

    
}

export default App