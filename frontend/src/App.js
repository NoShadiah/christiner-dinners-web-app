import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { Users } from "./components/users/retrieve";
import { UserRegister } from "./components/users/register";
import { Login } from "./components/users/form1";
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
    
    
        
        return(<>
            <Login/>

            </>

        );
    

    
}

export default App