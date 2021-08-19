import React, { Component } from "react";
import axios from "axios";
import AdminHeader from "../adminHeader";

class addProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AdminHeader></AdminHeader>
        <br />
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div
              class="formAddProducts"
              style={{ padding: "5%"}}
            >
              <h3>Add products</h3>
              <br />

              <form class="needs-validation" novalidate>




                <div class="row g-3">
                  <div class="col-sm-12">
                    <div class="custom-file" style={{ background: "#98d6a9" }}>
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose Image
                      </label>
                    </div>
                  </div>
                </div>
                <br />

                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid Product name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Product Price (LKR)
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid product price is required.
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="address" class="form-label">
                      Description
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="Enter product description"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter product Description.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="country" class="form-label">
                      Category
                    </label>
                    <select class="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid category.
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="country" class="form-label">
                      Quantity
                    </label>
                    <select class="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid quantity.
                    </div>
                  </div>

                  <div class="col-md-3"></div>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Availability</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked
                      required
                    />
                    <label class="form-check-label" for="credit">
                      In stock
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="debit">
                      Out of Stock
                    </label>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-md-12">
                    <label for="cc-name" class="form-label">
                      Delivery withn
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted">
                      Enter estimated delivery period
                    </small>
                  </div>

                  
                </div>

                <hr class="my-4" />

                <button  style={{ background: "#298a43" }} class="w-100 btn btn-primary" type="submit">
                  Add Product
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default addProduct;
