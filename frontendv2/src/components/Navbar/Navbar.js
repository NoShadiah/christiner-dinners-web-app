import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [userType,setUserType] = useState(localStorage.getItem('user_type')); 

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);
  const [condition, setCondition] = useState("2")
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={color ? "header header-bg" : 'header'}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {
              condition === "0" &&<>
                    <li onClick={handleClick}>
              <button>
                <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink>
              </button>
            </li>
            <li onClick={handleClick}>
              <button>
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </button>
            </li>
              </>   
            }
            {
              condition === "1" &&
              <>
                  <li onClick={handleClick}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <div className="dropdown">
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/delivery">
                My Account 
               {/* <link to="">My Profile</link>
              <link to="">My Orders</link> */}
              </NavLink>
            </li>
            </div>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <button>
                <NavLink className="nav-link" to="/signup">
                  Logout
                </NavLink>
              </button>
            </li>
              </>
            }{
              condition === "3" || userType ==="super admin" &&
              <>
                <li onClick={handleClick}>
                <button>
                  <NavLink className="nav-link" to="/signup">
                    Dashboard
                  </NavLink>
                </button>
                </li>
              </>
            }
            
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
