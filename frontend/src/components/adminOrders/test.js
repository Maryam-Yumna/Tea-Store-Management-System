import React ,{useState,useEffect}from 'react'
import axios from "axios";
import AdminHeader from "../adminHeader";

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
},["pending"]);
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
      "orderdate": item.orderdate,
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



return (
  <div>
 
    <br />
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <div class="container" style={{background:"#c6d1ba"  ,padding:"0px"}}>
          <div class="row">
            <div class="col-6 col-md-4">  <img
                    width="100%"
                    height="100%"
                   
                    src="https://previews.123rf.com/images/purplebird18/purplebird181612/purplebird18161200025/68049295-green-tea-seamless-pattern-with-transparent-teapot-tea-leaves-and-drops-background-design-for-green-.jpg"
                  /></div>
            <div class="col-smcol-12 col-md-8"><div class="formAddProducts" style={{ padding: "5%" }}>
          <h3>Edit product</h3>
          <br />
          {

gotData ?(


          <form onSubmit={updateOrder}class="needs-validation" novalidate>
          <div class="row g-3">
              <div class="col-sm-12">
                <label for="firstName" class="form-label">
                  Product Image
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="photo"
                  placeholder=""
                  value={item.paymentMethod}
                  required
                 
                />
                <div class="invalid-feedback">
                  Valid Product Imgeis required.
                </div>
              </div>
              </div>
            <br />

            <hr class="my-4" />

            <button
              style={{ background: "#298a43" }}
              class="w-100 btn btn-primary"
              type="submit"
            >
              Edit Product
            </button>
          </form>
           ):(<p></p>)
          }
        </div></div>
          </div>
        </div>

        
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
)
}
export default EditOrder