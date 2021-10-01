import React ,{useState,useEffect}from 'react'
import axios from "axios";
import AdminHeader from "../adminHeader";

let EditProduct=(props)=>{

  const intialState={
    "productName": " ",
  "price": "",
  "description": "",
  "category": "",
  "availability": "",
  "quantity": "",
  "photo": "",
  "deliverywithin": "",

  }
  const [gotData,setTrue] =useState(false);
  const [item, setItem] = useState(intialState);
  useEffect(()=>{
    axios.get('http://localhost:8070/product/'+props.match.params.id)
    .then(res=>{
        setItem(res.data)
        
        setTrue(true);
        

    }).catch(e=>{
        console.log(e)

    })
},[props.match.params.id]);

const handleName = e =>{
  let newItem ={ ...item}

  newItem.productName = e.target.value;
  setItem(newItem); 
}

  const handleprice = e =>{
    let newItem ={ ...item}
  
    newItem.price = e.target.value;
    setItem(newItem); 
  }
    
  const handledescription = e =>{
    let newItem ={ ...item}
  
    newItem.description= e.target.value;
    setItem(newItem); 

  }  
  const handledcategory = e =>{
    let newItem ={ ...item}
  
    newItem.category= e.target.value;
    setItem(newItem); 

  }
    const handledavailability = e =>{
      let newItem ={ ...item}
    
      newItem.availability= e.target.value;
      setItem(newItem); 
  

    }
      const handledquantity = e =>{
        let newItem ={ ...item}
      
        newItem.quantity= e.target.value;
        setItem(newItem); 
      }
  
        const handledphoto = e =>{
          let newItem ={ ...item}
        
          newItem.photo= e.target.value;
          setItem(newItem); 
        }
          
    const handleddelivery = e =>{
      let newItem ={ ...item}
    
      newItem.deliverywithin= e.target.value;
      setItem(newItem); 
    }
  
      const updateIetm = ()=>{
        let data =   {

          "productName": item.productName,
          "price": item.price,
          "description": item.description,
          "category": item.category,
          "availability": item.availability,
          "quantity": item.quantity,
          "photo": item.photo,
          "deliverywithin": item.deliverywithin,

        }


        axios.put('http://localhost:8070/product/updateProduct/'+props.match.params.id,data)
         .then(function (response){
            console.log(response.data)
            alert('productsuccessfully updated')
         }).catch(function(er){
            console.log(er)
         })
console.log(data)
console.log(props.match.params.id)
 

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


          <form onSubmit={updateIetm}class="needs-validation" novalidate>
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
                  value={item.photo}
                  required
                  onChange={handledphoto}
                />
                <div class="invalid-feedback">
                  Valid Product Imgeis required.
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
                  placeholder
                  value={item.productName} 
                  onChange={handleName}
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
                  id="price"
                  placeholder=""
                  pattern="[0-9]+"
                  title="should contain only numbers"
                  value={item.price} 
                  required
                  onChange={handleprice}
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
                  id="description"
                  value={item.description} 
                  placeholder="Enter product description"
                  required
                  onChange={handledescription}
                />
                <div class="invalid-feedback">
                  Please enter product Description.
                </div>
              </div>

              <div class="col-md-6">
                <label for="category" class="form-label">
                  Category
                </label>
                <select onChange={handledcategory}   value={item.category} class="form-select" id="category" required>
                  <option value="">Choose...</option>
                  <option>Black Tea</option>
                  <option>Earl Tea</option>
                  <option>Green Tea</option>
                  <option>Loosen Tea Leaf</option>
                  <option>Flavoured Tea</option>
                 
                </select>
                <div class="invalid-feedback">
                  Please select a valid category.
                </div>
              </div>
              <div class="col-md-6">
                <label for="quantity" class="form-label">
                 Available Quantity
                </label>
                <select  onChange={handledquantity}   value={item.quantity}  class="form-select" id="quantity" required>
                  <option value="">Choose...</option>
                  <option>100-500 pks</option>
                  <option>50-100 pks</option>
                  <option>20-50 pks</option>
                  <option>10-20 pks</option>
                  <option>1-10 pks</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid quantity.
                </div>
              </div>

              <div class="col-md-3"></div>
            </div>

            <hr class="my-4" />

            <h4 class="mb-3">Availability</h4>
            <select   onChange={handledavailability}   value={item.availability}  class="form-select" id="availability" required>
                  <option value="">Choose...</option>
                  <option>In Stock</option>
                  <option>Out Of Stock</option>
                 
                </select>
                <div class="invalid-feedback">
                  Please select a valid quantity.
                </div>
            
           
            <div class="row gy-3">
              <div class="col-md-12">
                <label for="cc-name" class="form-label">
                  Delivery withn
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="deliverywithin"
                  placeholder=""
                  onChange={handleddelivery}   value={item.deliverywithin} 
                />
                <small class="text-muted">
                  Enter estimated delivery period
                </small>
              </div>
            </div>

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
export default EditProduct