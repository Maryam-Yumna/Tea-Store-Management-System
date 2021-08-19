import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/nav bar/Navbar";
import Cart from "./components/ShoppingCart/Cart";
import Header from "./components/header/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Navbar/>
            <Route path = "/" exact>
                <Home/>
            </Route>
            <Route path = "/cart" >
                <Cart/>
            </Route>
        </Router>
    )
}

export default App;
