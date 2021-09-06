import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class adminHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          class="collapse "
          id="navbarHeader"
          style={{ background: "#298a43" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Home</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="text-white">
                      Sign Out
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="navbar navbar-dark  shadow-sm"
          style={{ background: "#298a43" }}
        >
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <h3>
                {" "}
                <strong>
                  <em>SerineTea</em>
                </strong>
              </h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <section
          class="py-5 text-center container"
          style={{
            backgroundImage: `url(https://www.ncl.com/sites/default/files/COL_06_NewTourSep21E_lg.jpg)`,
          }}
        >
          <div class="row py-lg-5">
            <div
              class="col-lg-6 col-md-8 mx-auto"
              style={{ background: "white" }}
            >
              <h1 style={{ color: "" }} class="fw-light">
                <strong>SerineTea</strong>
              </h1>
              <p style={{ color: "#298a43" }} class="lead text-muted">
                We are CSerineTea Store, a London based retailer of leading
                brands of Ceylon Tea.
              </p>
            </div>
          </div>
        </section>
        <nav class="py-2 border-bottom">
          <div class="container d-flex flex-wrap">
            <ul class="nav me-auto">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link link-dark px-2 active"
                  aria-current="page"
                >
                  {" "}
                  Home |
                </a>
              </li>
              <li class="nav-item">
                <a href="/adminHome" class="nav-link link-dark px-2">
                  Products |
                </a>
              </li>
              <li class="nav-item">
                <a href="/addProducts" class="nav-link link-dark px-2">
                  Add Products |
                </a>
              </li>
              <li class="nav-item">
                <a href="/allOrders" class="nav-link link-dark px-2">
                  Orders |
                </a>
              </li>
              <li class="nav-item">
                <a href="expenses" class="nav-link link-dark px-2">
                  Expenses | 
                </a>
              </li>
              <li class="nav-item">
                <a href="addExpenses" class="nav-link link-dark px-2">
                  Add Expenses | 
                </a>
              </li>
              <li class="nav-item">
                <a href="searchUser" class="nav-link link-dark px-2">
                  Users | 
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link link-dark px-2">
                  About
                </a>
              </li>
            </ul>
            <ul class="nav">
              <li class="nav-item">
              <ul class="nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"black"}}>
                Reports
              </a>
              <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link class="dropdown-item" to="#">User Reports</Link></li>
                <li><Link class="dropdown-item" to="#">Sales Reports</Link></li>
                <li><Link class="dropdown-item" to="/Income">Income Reports</Link></li>
                <li><Link class="dropdown-item" to="/Income">Reports</Link></li>
               
              </ul>
            </li>
            </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div style={{ background: "#298a43", height: "3px" }}></div>
      </div>
    );
  }
}

export default adminHeader;
