import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import adminHome from './components/adminHome'
import Home from "./components/Home/Home";
import ClientBlackTea from "./components/Home/Category/BlackTea"
import ClientFlavouredTea from "./components/Home/Category/FlavouredTea"
import ClientGreenTea from "./components/Home/Category/GreenTea"
import ClientLoosenTea from "./components/Home/Category/LoosenTea"
import Navbar from "./components/nav bar/Navbar";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Cart from "./components/ShoppingCart/Cart";
import CartReportDash from "./components/ShoppingCart/CartReport";
import CartHighestAmountReport from "./components/ShoppingCart/Reports/HighestAmountReport";
import CartLowestAmountReport from "./components/ShoppingCart/Reports/LowestAmountReport";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddProducts from "./components/products/addProduct"
import AdminOrders from "./components/adminOrders/orders"
import AwaitingPayments from './components/adminOrders/AwitingPayments';
import AwaitingDelivery from './components/adminOrders/AwitingDelivery';
import Paid from './components/adminOrders/PaidnDelivered';
import AllExpenses from './components/Expenses/AllExpenses';
import AddExpenses from './components/AddExpenses/AddExpenses';
import SearchUser from './components/SearchUser/SearchUser';
import Login from './components/Login/Login';
import EditProducts from "./components/products/editproduct"
import BlackTea from "./components/Categories/balckTea"
import GreenTea from "./components/Categories/GreenTea"
import Loosen from "./components/Categories/looseLeaf"
import report from "./components/adminOrders/report"
import ApplicationHeader from './components/ApplicationHeader/ApplicationHeader'
import EditPayment from './components/adminOrders/ChnagePaymentstatus'
import EditDelivery from './components/adminOrders/ChangeDeliverystatus'
import Register from './components/Register/Register';
import EditExpense from './components/EditExpense/EditExpense';
import UserProfile from './components/UserProfile/UserProfile';
import EditUserProfile from './components/UserProfile/EditUserProfile';
import ExpenseReport from './components/ExpenseReports/ExpenseReport';


class App extends Component {
  render() {
      return (
          <Router>

         <ApplicationHeader/>    
              
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path = "/products/:productId" exact component={DetailProduct}/>
                  <Route path = "/cart" exact component={Cart}/>
                  <Route path = "/cartReportDash" exact component={CartReportDash}/>
                  <Route path = "/cartHighestAmountReport" exact component={CartHighestAmountReport}/>
                  <Route path = "/cartLowestAmountReport" exact component={CartLowestAmountReport}/>
                  <Route path = "/clientBlackTea" exact component={ClientBlackTea}/>
                  <Route path = "/clientFlavouredTea" exact component={ClientFlavouredTea}/>
                  <Route path = "/clientGreenTea" exact component={ClientGreenTea}/>
                  <Route path = "/clientLoosenTea" exact component={ClientLoosenTea}/>
                  <Route path = "/adminHome" component = {adminHome}></Route>
                  <Route path = "/editProduct/:id" component = {EditProducts}></Route>
                  <Route path = "/addProducts" component = {AddProducts}></Route>
                  <Route path = "/blackTea" component = {BlackTea}></Route>
                  <Route path = "/GreenTea" component = {GreenTea }></Route>
                  <Route path = "/LoosenTea" component = {Loosen}></Route>
                  <Route path = "/Income" component = {report}></Route>
                  <Route path = "/allOrders" component = {AdminOrders}></Route>
                  <Route path = "/awaitingPayments" component = {AwaitingPayments}></Route>
                  <Route path = "/chnagePaymentStatus/:id" component = {EditPayment}></Route>
                  <Route path = "/chnageDeliveryStatus/:id" component = {EditDelivery}></Route>
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
