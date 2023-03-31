import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
// importing the db model buttons
import { FoodCategoriesButton } from "./components/categories/button";
import { FoodItemsButton } from "./components/food_items/button";
import { MenuButton } from "./components/menu/button";
import { GalleryButton } from "./components/gallery/button";
import { UsersButton } from "./components/users/button";
import { OrderButton } from "./components/orders/button";
import { SettingsButton } from "./components/settings/button";


const App = () => {
    return (
        <div id="dashboard">
            <div id="sidebar">
                <h1>NAVZS  Restaurant</h1>
                <div id="db_links">

                </div>
                <UsersButton/>
                <MenuButton/>
                <OrderButton/>
                <FoodCategoriesButton/>
                <FoodItemsButton/>
                <GalleryButton/>
                <SettingsButton/>
            </div>
            <div id="content_section">
                <h2>this is the content_section</h2>
            </div>
        </div>
    )
}

export default App