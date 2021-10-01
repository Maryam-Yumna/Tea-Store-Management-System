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
                  <li data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Link class="text-white" to = "/">Logout</Link>
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
                <Link
                  to="/adminHome"
                  class="nav-link link-dark px-2 active"
                  aria-current="page"
                >
                  {" "}
                  Home |
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/adminHome" class="nav-link link-dark px-2">
                  Products |
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/addProducts" class="nav-link link-dark px-2">
                  Add Products |
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/allOrders" class="nav-link link-dark px-2">
                  Orders |
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/expenses" class="nav-link link-dark px-2">
                  Expenses | 
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/addExpenses" class="nav-link link-dark px-2">
                  Add Expenses | 
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/searchUser" class="nav-link link-dark px-2">
                  Users | 
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/#" class="nav-link link-dark px-2">
                  About
                </Link>
              </li>
			  <li class="nav-item">
                <Link to="/deliveryEmpdetails" class="nav-link link-dark px-2">
                  Delivery Employees
                </Link>
              </li>
            </ul>
            {/* <ul class="nav">
              <li class="nav-item">

                <Link to="#" class="nav-link link-dark px-2">
                  {" "}
                  Reports{" "}
                </Link>

              </li>
            </ul> */}
            <ul class="nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"black"}}>
                Reports
              </a>
              <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link class="dropdown-item" to="/expenseReport">Expense Reports</Link></li>
                <li><Link class="dropdown-item" to="#">Order Reports</Link></li>
                <li><Link class="dropdown-item" to="/cartReportDash">Cart Reports</Link></li>
                <li><Link class="dropdown-item" to="#">Sales Reports</Link></li>
                <li><Link class="dropdown-item" to="/Income">Income Reports</Link></li>
				<li><Link class="dropdown-item" to="/employeeReport">Delivery Employee Reports</Link></li>
              </ul>
            </li>
            </ul>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-sm">
                  <div className="modal-content">
                  <div className="modal-header" style={{backgroundColor: "#f54e42", color: "white"}}>
                  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" id="exclamation-triangle-fill" fill="white" viewBox="0 0 16 16">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                      <h5 className="modal-title" id="exampleModalLabel">Do you want to logout?</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn" style={{backgroundColor: "#f54e42", color: "white"}} onClick={this.props.logout} >Yes, Logout</button>
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                  </div>
                  </div>
              </div>
          </div>
        </nav>

        <div style={{ background: "#298a43", height: "3px" }}></div>
      </div>
    );
  }
}

export default adminHeader;
