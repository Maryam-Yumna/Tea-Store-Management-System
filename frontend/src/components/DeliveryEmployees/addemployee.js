
import axios from "axios";
import AdminHeader from "../adminHeader";
import React,{useState}  from "react"


export default function AddEmployee(){

  const[EmpFirstName,setEmpFirstName] = useState("");
  const[EmpLastName,setEmpLastName] = useState("");
  const[Address,setAddress] = useState("");
  const[Gender,setGender] = useState("");
  const[ContactNumber,setContactNumber] = useState("");
  const[Region,setRegion] = useState("");
  const[AvailableTime,setAvailableTime] = useState("");
  const[JobType,setJobType] = useState("");
 

  function settingAvailability(event) {
    console.log(event.target.value);
  }
  function sentData(e){
    e.preventDefault();
  
  
     const newItem ={
          EmpFirstName,
          EmpLastName,
          Address,
          Gender,
          ContactNumber,
          Region,
          AvailableTime,
          JobType  
      }

      console.log(newItem)
      axios.post("http://localhost:8070/employee/newEmployee",newItem).then(()=>{
        alert("Delivery Employee Detail added")
      }).catch((err)=>{
        alert(err)
        console.log(newItem)
      })}

 
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
              <h3>Add Delivery Employee Details</h3>
              <br />

              <form onSubmit={sentData} class="needs-validation" novalidate>
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
                       minlength="5" 
                      required
                      title="should contain more than than five letters"
                      onChange={(e)=>{setEmpFirstName(e.target.value) }}
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                <div class="row g-3">
                  <div class="col-sm-12">
                    <label for="lastName" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      minlength="10" 
                      required
                      title="should contain more than than five letters"
                      onChange={(e)=>{setEmpLastName(e.target.value) }}
                    />
                    <div class="invalid-feedback">
                    Valid last name is required.
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
                      placeholder=""
                      minlength="20" 
                      required
                      title="must be atleast 20 letters"
                      onChange={(e)=>{setAddress(e.target.value) }}
                    />
                    <div class="invalid-feedback">
                    Valid Address is required.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="gender" class="form-label">
                    Gender
                    </label>
                    <select onChange = {(e)=>{
                      setGender(e.target.value)}}  class="form-select" id="gender" required>
                      <option value="">Choose...</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer Not to say</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a gender.
                    </div>
                  </div>
                
                  <div class="col-sm-6">
                    <label for="contactNumber" class="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="contactNumber"
                      placeholder=""
                      pattern="[0-9]+"
                      title="should contain only numbers"
                      required
                      onChange={(e)=>{ setContactNumber(e.target.value)}}
                    />
                    <div class="invalid-feedback">
                      Valid contact number is required.
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
                      placeholder="Enter Region"
                      required
                      title="should contain more than twenty letters"
                      minlength="5" 
                      onChange={(e)=>{
                        setRegion(e.target.value)}}
                    />
                    <div class="invalid-feedback">
                      Please enter the region
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="availableTime" class="form-label">
                    Available Time Slot
                    </label>
                    <select  onChange = {(e)=>{
              setAvailableTime(e.target.value)}} class="form-select" id="availableTime" required>
                      <option value="">Choose...</option>
                      <option>6 hours</option>
                      <option>9 hours</option>
                      <option>12 hours</option>
                      <option>18 hours</option>
              
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid time slot.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="jobType" class="form-label">
                     Job Type
                    </label>
                    <select  onChange = {(e)=>{
              setJobType(e.target.value)}} class="form-select" id="jobType" required>
                      <option value="">Choose...</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Weekly Basis</option>
                      <option>Hourly basis</option>
              
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid job type
                    </div>
                  </div>

                  <div class="col-md-3"></div>
                </div>

                <hr class="my-4" />

                <button
                  style={{ background: "#298a43" }}
                  class="w-100 btn btn-primary"
                  type="submit">
                  Add Delivery Employee Detail
                </button>

                </div>
                </div>
            </form>
            </div>
           </div>
           </div>
          </div>   
          </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
    );
  }



