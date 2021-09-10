import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

class AwaitingPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <div>
        <AdminHeader></AdminHeader>
        <div class="row">
          <div class="col-sm-3">
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
          <div class="col-sm-9">
            <br />
            <div
              class="container"
              style={{ background: "#b0ebc0", padding: "5px" }}
            >
              <div class="row">
                <div class="col">
                  <h4> Awaiting Payments Orders</h4>
                </div>
                <div class="col">
                  <h6 style={{ padding: "7px" }}>
                    Today: {this.state.currentDateTime}
                  </h6>
                </div>
              </div>
            </div>

            <br />
            <table class="table">
              <thead>
              <tr>
                  <th scope="col"></th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Customer Number</th>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total(LKR)</th>
                  <th scope="col">paymnet status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                 
                  <td>14872</td>
                  <td>2020-07-06</td>
                  <td>L.L peprea</td>
                  <td>07067456345</td>
                  <td>Earl Grey – 25 Tea Bag</td>
                  <td>2</td>
                  <td>500</td>
                  <td>
                    {" "}
                    <form>
                      <select class="form-select" id="country" required>
                        <option value="">Pending</option>
                       
                        <option>Completed</option>
                      </select>
                    </form>
                  </td>
                  <td><button type="button" class="btn btn-success">Save</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                 
                  <td>75432</td>
                  <td>2020-07-06</td>
                  <td>R.K disa</td>
                  <td>07067456345</td>
                  <td>Gereen tea – 25 Tea Bag</td>
                  <td>1</td>
                  <td>700</td>
                  <td>
                    {" "}
                    <form>
                      <select class="form-select" id="country" required>
                        <option value="">Pending</option>
                       
                        <option>Completed</option>
                      </select>
                    </form>
                  </td>
                  <td><button type="button" class="btn btn-success">Save</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                 
                  <td>75432</td>
                  <td>2020-07-06</td>
                  <td>R.K disa</td>
                  <td>07067456345</td>
                  <td>Gereen tea – 25 Tea Bag</td>
                  <td>1</td>
                  <td>700</td>
                  <td>
                    {" "}
                    <form>
                      <select class="form-select" id="country" required>
                        <option value="">Pending</option>
                       
                        <option>Completed</option>
                      </select>
                    </form>
                  </td>
                  <td><button type="button" class="btn btn-success">Save</button></td>
                </tr>
<tr>
                <th scope="row">4</th>
                  <td>64666</td>
                  <td>2020-07-06</td>
                  <td>P disa</td>
                  <td>07067456345</td>
                  <td>Ayurvedic Herbal Tea</td>
                  <td>1</td>
                  <td>200o</td>
                
                  <td>
                    {" "}
                    <form>
                      <select class="form-select" id="country" required>
                        <option value="">Pending</option>
                       
                        <option>Completed</option>
                      </select>
                    </form>
                  </td>
                  <td><button type="button" class="btn btn-success">Save</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AwaitingPayments;
