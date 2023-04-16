import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Navigate, Routes} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./dashboard";
import { UserMenu } from "./menu";
import { Login } from "./components/login_signup/login";
import { Navbar } from "./Layout/layout";

export default function App(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Check local storage for user type
    const userTypeFromStorage = localStorage.getItem('user_type');
    if (userTypeFromStorage) {
      setLoggedIn(true);
      setUserType(userTypeFromStorage);
    }
  }, []);

  
  
  return (<>
        <Router>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                      <Route index element={<Login/>}/>
                      {/* {loggedIn ? (
                      userType === 'admin' || userType === 'super admin' ? (
                      <Navigate to={"/dashboard"} />
                      ) : (
                          <Navigate to={"/menu"} />
                      )
                      ) : (
                      <Login/>
                      )} */}
                      <Route path="/dashboard" element={<Dashboard/>} />
                      <Route path="/menu" element={<UserMenu/>} />
              </Route>
                
                
                
            </Routes>
        </Router>
    </>
  )
};

//   {/* // const handleLogout = () => { */}
//   {/* //   // Clear user type from local storage */}
//   {/* //   localStorage.removeItem('userType');

//   //   // Update state
//   //   setLoggedIn(false);
//   //   setUserType('');
//   // };
  

// //   return (
// //     <>
// //     <div>
// //       <Login/> 
// //     </div>
// //     <div className="App">
// //       <p><userType/>m </p>
// //       {/* {loggedIn && userType === 'admin' && <Dashboard/>}
// //       {loggedIn && userType === 'superadmin' && <Dashboard/>}
// //       {loggedIn && userType === 'customer' && <UserMenu/>}
// //       {!loggedIn && <Login/>} */}
// {/* //     </div> */}
// {/* //     </> */}
// {/* //   ); */}
// {/* // } */}
  
