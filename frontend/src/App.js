import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import adminHome from './components/adminHome'
import Home from "./components/Home/Home";
import Navbar from "./components/nav bar/Navbar";
import Cart from "./components/ShoppingCart/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import AddProductForm from "./components/ShoppingCart/AddProductForm";
import AddProducts from "./components/products/addProduct"
import AdminOrders from "./components/adminOrders/orders"
import AwaitingPayments from './components/adminOrders/AwitingPayments';
import AwaitingDelivery from './components/adminOrders/AwitingDelivery';
import Paid from './components/adminOrders/PaidnDelivered';
import AllExpenses from './components/Expenses/AllExpenses';
import AddExpenses from './components/AddExpenses/AddExpenses';
import SearchUser from './components/SearchUser/SearchUser';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EditExpense from './components/EditExpense/EditExpense';
import UserProfile from './components/UserProfile/UserProfile';
import ApplicationHeader from './components/ApplicationHeader/ApplicationHeader';
import EditUserProfile from './components/UserProfile/EditUserProfile';
import ExpenseReport from './components/ExpenseReports/ExpenseReport';


class App extends Component {
  render() {
      return (
          <Router>
              <ApplicationHeader/>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/cart" exact component={Cart}/>
                  <Route path="/products" exact component={AddProductForm}/>
                  <Route path="/products/:productId" exact component={DetailProduct}/>                  
                  <Route path = "/adminHome" component = {adminHome}></Route>
                  <Route path = "/addProducts" component = {AddProducts}></Route>
                  <Route path = "/allOrders" component = {AdminOrders}></Route>
                  <Route path = "/awaitingPayments" component = {AwaitingPayments}></Route>
                  <Route path = "/awaitingDelivery" component = {AwaitingDelivery}></Route>
                  <Route path = "/paid" component = {Paid}></Route>
                  <Route path = "/expenses" exact component={AllExpenses}></Route>
                  <Route path = "/addExpenses" exact component={AddExpenses}></Route>
                  <Route path = "/searchUser" exact component={SearchUser}></Route>
                  <Route path = "/login" exact component={Login}></Route>
                  <Route path = "/register" exact component={Register}></Route>
                  <Route path = "/editExpense" exact component={EditExpense}></Route>
                  <Route path = "/myAccount" exact component={UserProfile}></Route>
                  <Route path = "/editUserProfile" exact component={EditUserProfile}></Route>
                  <Route path="/expenseReport" exact component ={ExpenseReport}/>
              </Switch>
              <Footer/>
          </Router>
          );
  }

}

export default App;
