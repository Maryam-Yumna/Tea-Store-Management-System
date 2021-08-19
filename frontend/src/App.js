import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import adminHome from './components/adminHome'
import Home from "./components/Home/Home";
import Navbar from "./components/nav bar/Navbar";
import Cart from "./components/ShoppingCart/Cart";
import Header from "./components/header/Header";

class App extends Component {
  render() {
      return (
          <Router>
              <Header/>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/cart" exact component={Cart}/>
                  
                  <Route path = "/adminHome" component = {adminHome}></Route>
              </Switch>
          </Router>
          );
  }

}

export default App;
