import React from "react"
import { Outlet, Link } from "react-router-dom";


export function Layout(){
    
    
    return (
        <>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link> </li>
            <li><Link to="/dashboard">DashBoard</Link></li> 
            <li><Link to="/login">LogIn</Link></li>
            </ul>
        </nav>
        <Outlet />
        </> 
        );

    }


