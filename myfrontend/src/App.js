import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Navigate, Routes} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./dashboard";
import { Menu } from "./menu";
import { Login } from "./components/login_signup/login";
import { Navbar } from "./Layout/layout";


export default function App(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const userTypeFromStorage = localStorage.getItem('user_type');
  

  
  
  return (<>
        <Router>
          <Navbar/>
            <Routes>
                
                      <Route index element={<Login/>}/>
                      <Route path="/dashboard" element={<Dashboard/>} />
                      <Route path="/menu" element={<Menu/>} />   
            </Routes>
        </Router>
    </>
  )
};


//   {/* // const handleLogout = () => { */}
//   {/* //   // Clear user type from local storage */}
//   {/* //   localStorage.removeItem('userType');


  
