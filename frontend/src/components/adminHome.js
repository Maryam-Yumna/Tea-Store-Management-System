import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "./adminHeader";
import { Link } from "react-router-dom";

class adminHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: [],
      searchTerm: "",
    };
    this.showDetails = this.showDetails.bind(this);
    this.searchTerm = this.search.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8070/product/`);
    const data = await response
      .json()
      .then((data) => {
        this.setState({
          Products: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(data);
  }
  search(e) {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  }
  showDetails(product) {
    product.show = !product.show;
    this.setState({ ...product });
    console.log(this.state);
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
                <br />
                <br />
                <span class="fs-4" style={{ color: "#298a43" }}>
                  Categories
                </span>
              </a>

              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a
                    href="/blackTea"
                    style={{ float: "left" }}
                    class="nav-link link-dark fs-6"
                    aria-current="page"
                  >
                    Black Tea
                  </a>
                </li>
                <li>
                  <a
                    href="/GreenTea"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Earl Tea
                  </a>
                </li>
                <li>
                  <a
                    href="/GreenTea"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Green Tea
                  </a>
                </li>
                <li>
                  <a
                    href="/LoosenTea"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Loosen Tea Leaf
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ float: "left" }}
                    class="nav-link link-dark"
                  >
                    Flavoured Tea
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>

          <div class="col-sm-10">
            <div class="album py-5 bg-light">
              <div class="container">
                <input
                  class="search-box"
                  onKeyUp={(e) => this.searchTerm(e)}
                  type="text"
                  class="form-control me-2"
                  placeholder="Search products..."
                ></input>
                <ul class="collapse-able">
                  {this.state.Products.filter((item) => {
                    return (
                      item.productName
                        .toLowerCase()
                        .indexOf(this.state.searchTerm) > -1
                    );
                  }).map((item) => {
                    return (
                      <div
                        style={{ width: "23%", float: "left", margin: "10px" }}
                      >
                        <div class="row">
                          <div class="col s12 m7">
                            <div
                              class="card"
                              style={{
                                width: "17rem",
                                padding: "3px",
                              }}
                            >
                              <div
                                className="card p-3 "
                                style={{
                                  width: "16rem",
                                  color: "#298a43",
                                  borderWidth: "2px",
                                  margin: "1px",
                                  backgroundColor: "#f2f2f2",
                                  padding: "3px",
                                }}
                              >
                                <img
                                  src={item.photo}
                                  className="card-img-top rounded"
                                  alt="..."
                                  style={{ height: "186px" }}
                                />
                              </div>
                              <span
                                class="card-title"
                                style={{ color: "black", height: "40px" }}
                              >
                                <b>{item.productName}</b>
                              </span>
                              <div class="card-content">
                                <p>{item.price} LKR</p>
                                <p style={{ color: "#298a43" }}>
                                  <b>{item.availability}</b>
                                </p>
                                <p>{item.quantity} </p>
                                <p>Delivery within :{item.deliverywithin} </p>
                              </div>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-secondary"
                                  >
                                    <Link
                                      to={"/editProduct/" + item._id}
                                      style={{
                                        textDecoration: "none",
                                        color: "#787b80",
                                      }}
                                    >
                                      Edit
                                    </Link>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-secondary"
                                    onClick={() => {
                                      deleteItem(item._id);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                                <small class="text-muted">9 mins</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let deleteItem = (id) => {
  axios
    .delete("http://localhost:8070/product/deleteProduct/" + id)
    .then((response) => {
      console.log(response.data);
      alert("Product details deleted ");
    })
    .catch((e) => {
      console.log(e);
    });
};

let updateItem = (id) => {
  axios
    .delete("http://localhost:8070/product/updateProduct/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default adminHome;
