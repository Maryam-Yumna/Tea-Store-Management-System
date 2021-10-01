import React ,{useState,useEffect}from 'react'
import axios from "axios";
import AdminHeader from "../adminHeader";

let EditEmployee=(props)=>{

  const intialState={
  "EmpFirstName": " ",
  "EmpLastName": "",
  "Address": "",
  "Gender": "",
  "ContactNumber": "",
  "Region": "",
  "AvailableTime": "",
  "JobType": "",

  }
  const [gotData,setTrue] =useState(false);
  const [item, setItem] = useState(intialState);
  useEffect(()=>{
    axios.get('http://localhost:8070/employee/'+props.match.params.id)
    .then(res=>{
        setItem(res.data)
        
        setTrue(true);
        

    }).catch(e=>{
        console.log(e)

    })
},[props.match.params.id]);

const handleEmpFirstName = e =>{
  let newItem ={ ...item}

  newItem.EmpFirstName = e.target.value;
  setItem(newItem); 
}

  const handleEmpLastName = e =>{
    let newItem ={ ...item}
    newItem.EmpLastName = e.target.value;
    setItem(newItem); 
  }
    
  const handleAddress = e =>{
    let newItem ={ ...item}  
    newItem.Address= e.target.value;
    setItem(newItem); 

  }  
  const handleGender = e =>{
    let newItem ={ ...item}
    newItem.Gender= e.target.value;
    setItem(newItem); 

  }
    const handleContactNumber = e =>{
      let newItem ={ ...item}
      newItem.ContactNumber= e.target.value;
      setItem(newItem); 
  

    }
      const handleRegion = e =>{
        let newItem ={ ...item}
        newItem.Region= e.target.value;
        setItem(newItem); 
      }
  
        const handleAvailableTime = e =>{
          let newItem ={ ...item}
          newItem.AvailableTime= e.target.value;
          setItem(newItem); 
        }
          
    const handleJobType = e =>{
      let newItem ={ ...item}
    
      newItem.JobType= e.target.value;
      setItem(newItem); 
    }
  
      const updateEmpDetail = ()=>{
        let data =   {

          "EmpFirstName": item.EmpFirstName,
          "EmpLastName": item.EmpLastName,
          "Address": item.Address,
          "Gender": item.Gender,
          "ContactNumber": item.ContactNumber,
          "Region": item.Region,
          "AvailableTime": item.AvailableTime,
          "JobType": item.JobType,
        
        }


        axios.put('http://localhost:8070/employee/updateEmployee/'+props.match.params.id,data)
         .then(function (response){
            console.log(response.data)
            alert('Delivery employee detail successfully updated')
         }).catch(function(er){
            console.log(er)
         })
    console.log(data)
    console.log(props.match.params.id)  
  }

return (
  <div>
    <AdminHeader></AdminHeader>
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
          <form onSubmit={updateEmpDetail} class="needs-validation" novalidate>
          <div class="row g-3">
              <div class="col-sm-12">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value={item.EmpFirstName}
                  required
                  onChange={handleEmpFirstName}
                />
                <div class="invalid-feedback">
                  Valid Product Imgeis required.
                </div>
              </div>
              </div>
            <br />

            <div class="row g-3">
              <div class="col-sm-12">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder
                  value={item.EmpLastName} 
                  onChange={handleEmpLastName}
                  required
                  
                />
                <div class="invalid-feedback">
                  Valid Product name is required.
                </div>
              </div>
              </div>


              <div class="row g-3">
              <div class="col-sm-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder
                  value={item.Address} 
                  onChange={handleAddress}
                  required
                  
                />
                <div class="invalid-feedback">
                  Valid Product name is required.
                </div>
              </div>

              <div class="col-md-6">
                <label for="gender" class="form-label">
                Gender
                </label>
                <select onChange={handleGender}   value={item.Gender} class="form-select" id="gender" required>
                  <option value="">Choose...</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Prefer Not to say</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid category.
                </div>
              </div>
              
              <div class="col-sm-6">
                <label for="contacNumber" class="form-label">
                 Contact Number 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder=""
                  pattern="[0-9]+"
                  title="should contain only numbers"
                  value={item.ContactNumber} 
                  required
                  onChange={handleContactNumber}
                />
                <div class="invalid-feedback">
                  Valid product price is required.
                </div>
              </div>

              <div class="col-12">
                <label for="region" class="form-label">
                  Region
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="region"
                  value={item.Region} 
                  placeholder="Enter product description"
                  required
                  onChange={handleRegion}
                />
                <div class="invalid-feedback">
                  Please enter product Description.
                </div>
              </div>

              <div class="col-md-6">
                <label for="availabletime" class="form-label">
                Available Time Slot
                </label>
                <select  onChange={handleAvailableTime}   value={item.AvailableTime}  class="form-select" id="quantity" required>
                  <option value="">Choose...</option>
                  <option>6 hours</option>
                  <option>9 hours</option>
                  <option>12 hours</option>
                  <option>18 hours</option>
              
                </select>
                <div class="invalid-feedback">
                  Please select a valid quantity.
                </div>
              </div>

              <div class="col-md-6">
                <label for="jobType" class="form-label">
                 Available Quantity
                </label>
                <select  onChange={handleJobType}   value={item.JobType}  class="form-select" id="jobType" required>
                  <option value="">Choose...</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Weekly Basis</option>
                  <option>Hourly basis</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid quantity.
                </div>
              </div>
              <div class="col-md-3"></div>
            </div>
            <hr class="my-4" />

            <button
              style={{ background: "#298a43" }}
              class="w-100 btn btn-primary"
              type="submit" >
              Edit Product
            </button>
          </form>
           ):(<p></p>)
          }
        </div>
        </div>
        </div>
       </div>

        
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
)
}
export default EditEmployee