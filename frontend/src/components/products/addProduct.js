
import axios from "axios";
import AdminHeader from "../adminHeader";
import React,{useState}  from "react"


export default function AddProduct(){

  const[productName,setproductName] = useState("");
  const[description,setDescription] = useState("");
  const[category,setCategory] = useState("");
  const[price,setPrice] = useState("");
  const[quantity,setQuantity] = useState("");
  const[availability,setAvailability] = useState("");
  const[photo,setPhoto] = useState("");
  const[deliverywithin,setDeliverywithin] = useState("");
 

  function settingAvailability(event) {
    console.log(event.target.value);
  }
  function sentData(e){
    e.preventDefault();
  
  
     const newItem ={
          productName,
          price,
          description,
          category,
          availability,
          quantity,
          photo,
          deliverywithin
          
      }

      console.log(newItem)
      axios.post("http://localhost:8070/product/newProduct",newItem).then(()=>{
        alert("Item added")
      }).catch((err)=>{
        alert(err)
        console.log(newItem)
      })}

 
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
              <h3>Add products</h3>
              <br />

              <form onSubmit={sentData} class="needs-validation" novalidate>
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
                     
                      required
                      onChange={(e)=>{setPhoto(e.target.value) }}
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
                      placeholder=""
                       minlength="10" 
                      required
                      title="should contain more than than five letters"
                      onChange={(e)=>{setproductName(e.target.value) }}
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
                      required
                      onChange={(e)=>{ setPrice(e.target.value)}}
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
                      placeholder="Enter product description"
                      required
                      title="should contain more than twenty letters"
                       minlength="10" 
                      onChange={(e)=>{
                        setDescription(e.target.value)}}
                    />
                    <div class="invalid-feedback">
                      Please enter product Description.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="category" class="form-label">
                      Category
                    </label>
                    <select onChange = {(e)=>{
              setCategory(e.target.value)}}  class="form-select" id="category" required>
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
                    <select  onChange = {(e)=>{
              setQuantity(e.target.value)}} class="form-select" id="quantity" required>
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
                <select  onChange = {(e)=>{
              setAvailability(e.target.value)}} class="form-select" id="availability" required>
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
                    
                      onChange = {(e)=>{
                        setDeliverywithin(e.target.value)}}
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
                  Add Product
                </button>
              </form>
            </div></div>
              </div>
            </div>

            
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    );
  }



