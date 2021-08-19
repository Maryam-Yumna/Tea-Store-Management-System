import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

class orders extends Component {
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
                  <h3> All Orders</h3>
                </div>
                <div class="col">
                  <h6 style={{ padding: "7px" }}>Today: {this.state.currentDateTime}</h6>
                </div>
              </div>
            </div>

            <br />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default orders;
