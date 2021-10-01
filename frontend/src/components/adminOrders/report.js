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
        <br />

<div >
  <b>  Choose a month to get Income Report        </b>
        <input style = {{height:"30px" , width:"500px"}} type="month"></input>
        </div>
    
        
        <div style={{ background: "#298a43", height: "3px" }}></div>
        <div class="container">
  <div class="row">
    <div class="col-sm-1">
    
    </div>
    <div class="col-sm-10">
        <br />   <br />
<center><b><h4>Serine Tea - Monthly Income Report</h4> </b></center>
<center><b>2021-May </b></center>


    <table class="table table-striped table-sm">
          <thead>
            <tr>
              
              <th scope="col">ProductId</th>
              <th scope="col">Product Name</th>
              <th scope="col">Sold count</th>
              <th scope="col">Total(LKR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>green tae pack</td>
              <td>10</td>
              <td>56006</td>
          
            </tr>
            <tr>
              <td>1,002</td>
              <td>Ginger Flavoured Black Tea – 20 Teabags</td>
              <td>5</td>
              <td>5600</td>
              
            </tr>
            <tr>
              <td>1,003</td>
              <td>Ayurvedic Herbal Tea – 160g Loose Tea</td>
            
              <td>5</td>
              <td>5600</td>
              
            </tr>
            <tr>
              <td>1,003</td>
              <td>Cinnamon Black Tea</td>
              <td>10</td>
              <td>12000</td>
            
            </tr>
            <tr>
            <td>1,003</td>
              <td>Ayurvedic 160g Loose Tea</td>
         
              <td>5</td>
              <td>5600</td>
            </tr>
            <tr>
            <td>1,003</td>
              <td>Cinnamon Black Tea</td>
              <td>10</td>
              <td>12000</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>Darjeeling Black Tea</td>
              <td>6</td>
              <td>5600</td>
             
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
         
              <td>7</td>
              <td>9000</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>green tae pack</td>
              <td>10</td>
              <td>56006</td>
          
            </tr>
            <tr>
              <td>1,002</td>
              <td>Ginger Flavoured Black Tea – 20 Teabags</td>
              <td>5</td>
              <td>5600</td>
              
            </tr>
            <tr>
              <td>1,003</td>
              <td>Ayurvedic Herbal Tea – 160g Loose Tea</td>
           
              <td>5</td>
              <td>5600</td>
              
            </tr>
            <tr>
              <td>1,003</td>
              <td>Cinnamon Black Tea</td>
              <td>10</td>
              <td>12000</td>
            
            </tr>
            <tr>
            <td>1,003</td>
              <td>Ayurvedic 160g Loose Tea</td>
             
              <td>5</td>
              <td>5600</td>
            </tr>
            <tr>
            <td>1,003</td>
              <td>Cinnamon Black Tea</td>
              <td>10</td>
              <td>12000</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>Darjeeling Black Tea</td>
              <td>6</td>
              <td>5600</td>
              
             
            </tr>

            <tr>
              <td><h5>Total</h5></td>
              <td></td>
              <td></td>
              <td><h5>568000</h5></td>
              
             
            </tr>
         
          </tbody>
        </table>
    </div>
    <div class="col-sm-1">
        <br />
  <b><p style = {{color:"Blue"}}>Print Report</p></b>
    </div>
  </div>
</div>
      </div>
      
    );
  }
}

export default adminHeader;
