import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import adminHome from './components/adminHome'


function App() {
  return (
    
    <div className="App">
     
      <Router>
        <Switch>

        <Route path = "/adminHome" component = {adminHome}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
