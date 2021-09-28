import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class LoosenTea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8070/product/getCategory/`+"Loosen Tea Leaf");
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
    // this.setState({Items: data});
    console.log(data);
  }

  render() {
    return (
      <div class="container">
        <br/> <br/>
        <h2 className = "text-center fst-italic text-warning">Loosen Tea Leaf</h2>
        <hr></hr>
        <br/>
        <div className = "row">
            {this.state.Products.map((item) => (
              <div className = "col-3">
                 <div className="card shadow" >
                 <div >{/*Image of the card*/}
                    <Link to={`/products/${item._id}`}>
                        <img  style={{width: '100%' , height:300}} src={item.photo} className="card-img-top img-fluid" />
                    </Link>
                 </div>
                 <div className="card-body">
                   <h5 class="fw-bold">{item.productName}</h5><br/>
                   <p className="card-text fst-italic"><label>LKR {item.price}.00</label></p>
                   {/*<p className="card-text">{item.description}</p>*/}
                   <Link to={`/products/${item._id}`} className="btn btn-dark font-size-09 text-light">Read More...</Link>
                 </div>
                 </div><br/>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default LoosenTea;
