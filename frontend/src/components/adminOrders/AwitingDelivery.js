import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

class AwaitingDelivery extends Component {
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
                  <h4> Awaiting Delivery Orders</h4>
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
                  <th scope="col">OrderId</th>
                  <th scope="col">Customer </th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">psotal code</th>
                  <th scope="col">District</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>97298579</td>
                  <td>P.P pepere</td>
                  <td>095735372</td>
                  <td>No 34 glboda rd , Kandy</td>
                  <td>2001</td>
                  <td>Kandy</td>
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
                  <td>057059</td>
                  <td>kal mark</td>
                  <td>095735372</td>
                  <td>No 59 glboda rd , Colombo2</td>
                  <td>2001</td>
                  <td>Colombo</td>
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
                  <td>57302</td>
                  <td>sara plais</td>
                  <td>095735372</td>
                  <td>no 45 pera Rd ,Balngoda</td>
                  <td>4562</td>
                  <td>Bangoda</td>
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
                  <td>97298579</td>
                  <td>P.P pepere</td>
                  <td>095735372</td>
                  <td>No 34 glboda rd , Kandy</td>
                  <td>2001</td>
                  <td>Kandy</td>
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
                  <th scope="row">5</th>
                  <td>057059</td>
                  <td>kal mark</td>
                  <td>095735372</td>
                  <td>No 59 glboda rd , Colombo2</td>
                  <td>2001</td>
                  <td>Colombo</td>
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
                  <th scope="row">6</th>
                  <td>57302</td>
                  <td>sara plais</td>
                  <td>095735372</td>
                  <td>no 45 pera Rd ,Balngoda</td>
                  <td>4562</td>
                  <td>Bangoda</td>
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
                  <td>97298579</td>
                  <td>P.P pepere</td>
                  <td>095735372</td>
                  <td>No 34 glboda rd , Kandy</td>
                  <td>2001</td>
                  <td>Kandy</td>
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
                  <th scope="row">5</th>
                  <td>057059</td>
                  <td>kal mark</td>
                  <td>095735372</td>
                  <td>No 59 glboda rd , Colombo2</td>
                  <td>2001</td>
                  <td>Colombo</td>
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
                  <td>97298579</td>
                  <td>P.P pepere</td>
                  <td>095735372</td>
                  <td>No 34 glboda rd , Kandy</td>
                  <td>2001</td>
                  <td>Kandy</td>
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
                  <th scope="row">5</th>
                  <td>057059</td>
                  <td>kal mark</td>
                  <td>095735372</td>
                  <td>No 59 glboda rd , Colombo2</td>
                  <td>2001</td>
                  <td>Colombo</td>
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

export default AwaitingDelivery;
