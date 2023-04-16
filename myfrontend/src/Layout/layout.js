import './navbar.css';
import {Outlet, Link} from "react-router-dom";
export const Navbar=()=>{
    return(
        <>
            <div id='nav'>
                <Link to='/' id='item'>Home</Link>
                <Link to='/menu'id='item'>Menu</Link>
                <Link to='/dashboard'id='item'>Dashboard</Link>
                <Link to='/login' id='item'>Login</Link>
                <Link to='/register' id='item'>Register</Link>
                <Link to='/gallery' id='item'>Gallery</Link>
            </div>
            <Outlet/>
        </>
    )
};