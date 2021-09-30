import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Incomereport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Income: [],
      firstDate: "",
      lastDate: "",
      grandtotal: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.printReport = this.printReport.bind(this);
  }
  componentDidMount() {}

  onSubmit(e) {
    e.preventDefault();

    var firstDate = this.state.firstDate;
    var lastDate = this.state.lastDate;

    this.setState({
      firstDate: firstDate,
      lastDate: lastDate,
    });

    let income = {
      firstDate: firstDate,
      lastDate: lastDate,
    };
    axios
      .get(
        `http://localhost:8070/order/getIncome/${firstDate}/${lastDate}`,
        income
      )
      .then((data) => {
        this.setState({ Income: data.data }, () => {
          var sum = 0;
          for (let i = 0; i < this.state.Income.length; i++) {
            sum += parseInt(this.state.Income[i].total);
            console.log("sum", sum);
          }

          this.setState({
            grandtotal: sum,
          });
          console.log(this.state.Income);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  printReport() {
    var content = document.getElementById("printablediv");
    var p = document.getElementById("ifmcontentstoprint").contentWindow;
    p.document.open();
    p.document.write(content.innerHTML);
    p.document.close();
    p.focus();
    p.print();
  }

  render() {
    return (
      <div>
        <br></br>
        <div>
          <form class="form-inline" onSubmit={this.onSubmit}>
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <label class="sr-only" for="inlineFormInputName2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    class="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    name="firstDate"
                    placeholder="Choose a date"
                    value={this.state.firstDate}
                    onChange={this.onChange}
                  />
                </div>
                <div class="col-4">
                  <label class="sr-only" for="inlineFormInputName2">
                    Last Date
                  </label>
                  <input
                    type="date"
                    class="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Choose a date"
                    name="lastDate"
                    value={this.state.lastDate}
                    onChange={this.onChange}
                  />
                </div>
                <div class="col-1"></div>

                <div class="col-3">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      style={{
                        background: "#298a43",
                        float: "right",
                        "font-size": "14px",
                      }}
                      class=" btn btn-primary"
                      type="submit"
                    >
                      Generate Report
                    </button>
                    <button
                      style={{
                        background: "#298a43",
                        float: "right",
                        "font-size": "14px",
                      }}
                      class=" btn btn-primary"
                      onClick={() => this.printReport()}
                    >
                      Print Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div></div>
        <div class="container" id="printablediv">
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <br /> <br />
              <center>
                <b>
                  <h4>Serine Tea -Income Report</h4>{" "}
                </b>
              </center>
              <center>
                <b>
                  From {this.state.firstDate} to {this.state.lastDate}
                </b>
              </center>
              <br />
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Sold count</th>
                    <th scope="col">Total(LKR)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Income.map((order) => (
                    <tr>
                      <td>{order.orderdate}</td>
                      <td>{order.productName}</td>
                      <td>{order.qty}</td>
                      <td>{order.total}</td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>

                    <td>
                      <b>
                        <h4>Total Income:</h4>
                      </b>
                    </td>
                    <td>
                      <b>
                        <h4> {this.state.grandtotal}</h4>
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <iframe
                id="ifmcontentstoprint"
                style={{ height: "0px", width: "0px", position: "absolute" }}
              ></iframe>
            </div>
            <div class="col-sm-1">
              <br />
            </div>
          </div>
        </div>
        <br /> <br />
        <br /> <br />
      </div>
    );
  }
}

export default Incomereport;
