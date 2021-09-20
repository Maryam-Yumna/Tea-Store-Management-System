import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

let EditPayment = (props) => {
  const intialState = {
    _id: "",
    orderdate: "",
    firstName: "",
    email: "",
    phone: "",
    address: "",
    productName: "",
    price: "",
    qty: "",
    total: "",
    paymentMethod: "",
    paymentStatus: "",
    deliveryStatus: "",
  };
  const [gotData, setTrue] = useState(false);
  const [item, setItem] = useState(intialState);
  useEffect(() => {
    axios
      .get(`http://localhost:8070/order/getOrder/` + props.match.params.id)
      .then((res) => {
        setItem(res.data);

        setTrue(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.match.params.id]);
  const orderDate = (e) => {
    let newItem = { ...item };

    newItem.orderDate = e.target.value;
    setItem(newItem);
  };

  const firstName = (e) => {
    let newItem = { ...item };

    newItem.firstName = e.target.value;
    setItem(newItem);
  };

  const email = (e) => {
    let newItem = { ...item };

    newItem.email = e.target.value;
    setItem(newItem);
  };
  const phone = (e) => {
    let newItem = { ...item };

    newItem.phone = e.target.value;
    setItem(newItem);
  };

  const address = (e) => {
    let newItem = { ...item };

    newItem.address = e.target.value;
    setItem(newItem);
  };

  const productName = (e) => {
    let newItem = { ...item };

    newItem.productName = e.target.value;
    setItem(newItem);
  };
  const price = (e) => {
    let newItem = { ...item };

    newItem.price = e.target.value;
    setItem(newItem);
  };
  const qty = (e) => {
    let newItem = { ...item };

    newItem.qty = e.target.value;
    setItem(newItem);
  };

  const total = (e) => {
    let newItem = { ...item };

    newItem.total = e.target.value;
    setItem(newItem);
  };
  const paymentMethod = (e) => {
    let newItem = { ...item };

    newItem.paymentMethod = e.target.value;
    setItem(newItem);
  };
  const paymentStatus = (e) => {
    let newItem = { ...item };

    newItem.paymentStatus = e.target.value;
    setItem(newItem);
  };
  const deliveryStatus = (e) => {
    let newItem = { ...item };

    newItem.deliveryStatus = e.target.value;
    setItem(newItem);
  };

  const updateOrder = () => {
    let data = {
      _id: item._id,
      orderdate: item.orderdate,
      firstName: item.firstName,
      email: item.email,
      phone: item.phone,
      address: item.address,
      productName: item.productName,
      price: item.price,
      qty: item.qty,
      total: item.total,
      paymentMethod: item.paymentMethod,
      paymentStatus: item.paymentStatus,
      deliveryStatus: "Completed",
    };

    axios
      .put(
        "http://localhost:8070/order/updateOrder/" + props.match.params.id,
        data
      )
      .then(function (response) {
        console.log(response.data);
        alert("successfully updated Payment status");
      })
      .catch(function (er) {
        console.log(er);
      });
    console.log(data);
    console.log(item.id);
  };

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
          <div class="container" style={{ background: "", padding: "5px" }}>
            <div class="row">
              <div class="col-2"></div>
              <div class="col"></div>
            </div>
          </div>
          {gotData ? (
            <form onSubmit={updateOrder} class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-3">
                  <h6 style={{ padding: "px" }}>
                    <h4>Payment status update</h4>
                    <img
                      style={{ width: "200px" }}
                      src="https://i.ibb.co/D57xWHb/undraw-Online-payments-re-y8f2.png"
                    />
                  </h6>
                </div>
                <div class="col-sm-3">
                  <label for="firstName" class="form-label">
                    Ordered Date:
                  </label>
                  <input
                    style={{ color: "#298a43" }}
                    type="text"
                    style={{ border: "none" }}
                    class="form-control"
                    id="firstName"
                    value={item.orderdate}
                    onChange={orderDate}
                    required
                  />
                </div>

                <div class="col-sm-6">
                  <label for="category" class="form-label">
                    <b> Change payment status :</b>
                  </label>
                  <div class="alert alert-success" role="alert">
                    Please make sure that cusotmer has make the payment to
                    chanage the payment status!!
                  </div>
                  <div class="alert alert-success" role="alert">
                    Delivery status will automatically get updated!!
                  </div>

                  <select
                    onChange={paymentStatus}
                    style={{ color: "#298a41" }}
                    value={item.paymentStatus}
                    class="form-select"
                    id="category"
                    required
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                  <input
                    style={{ color: "#298a43" }}
                    type="text"
                    class="form-control"
                    id="firstName"
                    value={"Completed"}
                    onChange={deliveryStatus}
                    required
                  />
                </div>
                <div class="col-sm-2"></div>

                <div class="col-sm-5">
                  <label for="lastName" class="form-label">
                    <b> Customer Details :</b>
                  </label>
                  <table>
                    <tr>
                      <td>Customer:</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.firstName}
                          required
                          onChange={firstName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.email}
                          required
                          onChange={email}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Contact Number :</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.phone}
                          required
                          onChange={phone}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Home Address :</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.address}
                          required
                          onChange={address}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="col-sm-5">
                  <label for="lastName" class="form-label">
                    <b> Order details :</b>
                  </label>
                  <table>
                    <tr>
                      <td>Product:</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.productName}
                          onChange={productName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Reqired Quantity :</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.qty}
                          required
                          onChange={qty}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Total price(LKR) :</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          style={{ border: "none" }}
                          value={item.total}
                          required
                          onChange={total}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <hr class="my-4" />

              <button
                style={{ background: "#298a43" }}
                class="w-100 btn btn-primary"
                type="submit"
              >
                Change payment status
              </button>
            </form>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EditPayment;
