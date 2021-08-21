import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/nav bar/Navbar";
import Cart from "./components/ShoppingCart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DetailProduct from "./components/DetailProduct/DetailProduct";

import AddProductForm from "./components/ShoppingCart/AddProductForm";

class App extends Component {
  render() {
      return (
          <Router>
              <Header/>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/cart" exact component={Cart}/>

                  <Route path="/products" exact component={AddProductForm}/>

                  <Route path="/products/:productId" exact component={DetailProduct}/>
              </Switch>
              <Footer/>
          </Router>
          );
  }
}

export default App;
