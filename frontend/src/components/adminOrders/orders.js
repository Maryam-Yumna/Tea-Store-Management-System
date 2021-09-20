import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

class orders extends Component {
  constructor(props) {
    super(props);
    this.state = {

      currentDateTime: new Date().toLocaleString(),
      Orders: [],
    };

    
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8070/order/allOrders`);
    const data = await response
      .json()
      .then((data) => {
        this.setState({
          Orders: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    // this.setState({Items: data});
    console.log(data);
  }
  render() {
    return (
      <div>
       
        <div class="row">
          <div class="col-sm-2">
            <div
              class="d-flex flex-column flex-shrink-0 p-3 bg-light"
              style={{ height: "100%" }}
            >
              <a
                href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              >
                <br />
                <br />

                <span class="fs-4" style={{ color: "#298a43" }}>
                  Orders
                </span>
              </a>

              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a
                    href="/awaitingPayments"
                    style={{ float: "left" }}
                    class="nav-link link-dark fs-6"
                    aria-current="page"
                  >
                    Awaiting Payments
                  </a>
                </li>
                <li>
                  <a
                    href="/awaitingDelivery"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Awaiting Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="/paid"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Paid and Deliverd
                  </a>
                </li>
                <li>
                  <a
                    href="/allOrders"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    All Orders
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div class="col-sm-10">
            <br />
            <div
              class="container"
              style={{ background: "", padding: "5px" }}
            >
              <div class="row">
                <div class="col-2">
                  <img style={{ width: "200px" }} src = "https://i.ibb.co/SsrNRsw/undraw-healthy-options-sdo3.png"/>
                  
                </div>
                <div class="col">
                  <h6 style={{ padding: "7px" }}>
                  <h4> Customer Orders</h4>
                    Today: {this.state.currentDateTime}
                  </h6>
                </div>
              </div>
            </div>

       
         
            <table class="table">
              <thead>
              <tr>
              
                 
                  <th scope="col">Order Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Contact and delivery Details</th>
                  <th scope="col">Ordered Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total(LKR)</th>
                  <th scope="col">Payment status</th>
                  <th scope="col">Delivery status</th>
                </tr>
              </thead>
              <tbody>
           
              {this.state.Orders.map((order) => (
                <tr>
                  
             
                  <td>{order.orderdate}</td>
                  <td>{order.firstName}</td>
                  <td>{order.email}<br /> 
                   {order.phone}<br /> {order.address}</td>
                  <td>{order.productName}</td>
                  <td>{order.qty}</td>
                  <td>{order.total}</td>
                  <td>{order.paymentStatus}</td>
                  <td>
                  {order.deliveryStatus}
                  </td>
              
                </tr>
              ))}
              </tbody>
            </table>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default orders;
