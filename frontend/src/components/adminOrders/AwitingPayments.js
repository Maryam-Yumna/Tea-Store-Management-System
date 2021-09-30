import { Link } from 'react-router-dom'
import axios from "axios";
import AdminHeader from "../adminHeader";
import React ,{useState,useEffect,Component}from 'react'


let EditOrder=(props)=>{

  const intialState={
    "_id": "",
    "orderdate": "",
    "firstName": "",
    "email": "",
    "phone": "",
    "address": "",
    "productName": "",
    "price": "",
    "qty": "",
    "total": "",
    "paymentMethod": "",
    "paymentStatus": "",
    "deliveryStatus": "",

  }
  const [gotData,setTrue] =useState(false);
  const [item, setItem] = useState(intialState);
  
  useEffect(()=>{
    axios.get(`http://localhost:8070/order/awaitingpayments/`+"Pending")
    .then(res=>{
        setItem(res.data)
        
        setTrue(true);
        

    }).catch(e=>{
        console.log(e)

    })
},[props.match.params.id]);

const orderDate = e =>{
  let newItem ={ ...item}

  newItem.orderDate= e.target.value;
  setItem(newItem); 
}

const firstName = e =>{
  let newItem ={ ...item}

  newItem.firstName= e.target.value;
  setItem(newItem); 
}

const email = e =>{
  let newItem ={ ...item}

  newItem.email= e.target.value;
  setItem(newItem); 
}
const phone = e =>{
  let newItem ={ ...item}

  newItem.phone= e.target.value;
  setItem(newItem); 
}

const address = e =>{
  let newItem ={ ...item}

  newItem.address= e.target.value;
  setItem(newItem); 
}

const productName = e =>{
  let newItem ={ ...item}

  newItem.productName= e.target.value;
  setItem(newItem); 
}
const price = e =>{
  let newItem ={ ...item}

  newItem.price= e.target.value;
  setItem(newItem); 
}
const qty = e =>{
  let newItem ={ ...item}

  newItem.qty= e.target.value;
  setItem(newItem); 
}

const total = e =>{
  let newItem ={ ...item}

  newItem.total= e.target.value;
  setItem(newItem); 
}
const paymentMethod = e =>{
  let newItem ={ ...item}

  newItem.paymentMethod= e.target.value;
  setItem(newItem); 
}
const paymentStatus = e =>{
  let newItem ={ ...item}

  newItem.paymentStatus= e.target.value;
  setItem(newItem); 
}
const deliveryStatus = e =>{
  let newItem ={ ...item}

  newItem.deliveryStatus= e.target.value;
  setItem(newItem); 
}

const updateOrder = ()=>{
  let data =   {

    "_id": item._id,
    "orderdate": item.orderDate,
    "firstName": item.firstName,
    "email": item.email,
    "phone": item.phone,
    "address": item.address,
    "productName": item.productName,
    "price": item.price,
    "qty": item.qty,
    "total": item.total,
    "paymentMethod": item.paymentMethod,
    "paymentStatus": item.paymentStatus,
    "deliveryStatus": item.deliveryStatus,

  }
  axios.put('http://localhost:8070/order/update/'+item._id,data)
  .then(function (response){
     console.log(response.data)
     alert('successfully updated')
  }).catch(function(er){
     console.log(er)
  })
console.log(data)
console.log(item.id)

}
}

class AwaitingPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {

      currentDateTime: new Date().toLocaleString(),
      Orders: [],
    };

    
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8070/order/awaitingpayments/`+"Pending");
    const data = await response
      .json()
      .then((data) => {
        this.setState({
          Orders: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
   
    console.log(data);
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
            <div
              class="container"
              style={{ background: "", padding: "5px" }}
            >
              <div class="row">
                <div class="col-2">
                  <img style={{ width: "200px" }} src = "https://i.ibb.co/D57xWHb/undraw-Online-payments-re-y8f2.png"/>
                  
                </div>
                <div class="col">
                  <h6 style={{ padding: "7px" }}>
                  <h4> Awaiting Payments</h4>
                    Today: {this.state.currentDateTime}
                  </h6>
                </div>
              </div>
            </div>

       
         
            <table class="table">
              <thead>
              <tr>
                
                 
                  <th scope="col">Order Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Contact and delivery Details</th>
                  <th scope="col">Ordered Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total(LKR)</th>
                  <th scope="col">paymnet status</th>
                </tr>
              </thead>
             
              <tbody>
              
            
              {this.state.Orders.map((order) => (
                <tr>
                 
             
                  <td   >{order.orderdate}</td>
                  <td>{order.firstName}</td>
                  <td>{order.email}<br /> 
                   {order.phone}<br /> {order.address}</td>
                  <td>{order.productName}</td>
                  <td>{order.qty}</td>
                  <td>{order.total}</td>
                  <td>{order.paymentStatus}</td>
              
                  <td><button type="button" class="btn btn-success">
                  <Link to={"/chnagePaymentStatus/" + order._id} style={{textDecoration: 'none' ,color :"white" }}>Change Payment Status</Link>
                              </button></td>
                </tr>
              ))}
              </tbody>
            </table>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default AwaitingPayments;
