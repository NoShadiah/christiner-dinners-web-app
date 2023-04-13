import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import "./App.css"

import { Dashboard } from "./dashboard";
import { UserMenu } from "./menu";


import "./styling.css"



const App = () => {
    const userType = localStorage.getItem('user_type');

  return (
    <Router>
      <Switch>
        {userType === 'admin' ? (
          <Route path="/dashboard" component={Dashboard} />
        ) : (
          <Route path="/menu" component={UserMenu} />
        )}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App