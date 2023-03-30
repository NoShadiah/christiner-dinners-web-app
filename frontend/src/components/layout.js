import React from "react"
import { Outlet, Link } from "react-router-dom";
export function Layout(){
    
    
    return (
        <>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link> </li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet />
        </> 
        );

    }
}

