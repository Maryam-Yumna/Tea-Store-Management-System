import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class DeliveryEmpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8070/employee/`);
    const data = await response
      .json()
      .then((data) => {
        this.setState({
          Employees: data,
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
        <div class="row">
          <div class="col-sm-12">
                {this.state.Employees.map((EmpDetail) => (
                  <div style={{ width: "23%", float: "left", margin: "10px" }}>
                    <div class="row">
                      <div class="col s12 m7">
                      <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Working Region</th>
                                <th scope="col">Available Time</th>
                                <th scope="col">Job Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{EmpDetail.EmpFirstName} {EmpDetail.EmpLastname}</td>
                                <td>{EmpDetail.Address}</td>
                                <td>{EmpDetail.Gender}</td>
                                <td>{EmpDetail.ContactNumber}</td>
                                <td>{EmpDetail.Region}</td>
                                <td>{EmpDetail.AvailableTime}</td>
                                <td>{EmpDetail.JobType}</td>
                                <td>
                                <div class="btn-group">
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary">
                                    <Link to={"/editEmployee/" + EmpDetail._id}  style={{textDecoration: 'none' ,color :"#787b80" }}>Edit</Link>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                        onClick={()=>{ deleteEmpDetail(EmpDetail._id)}} >
                                        Delete
                                    </button>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                     </table>          
                   </div>
               </div>
             </div>     
                ))}
              </div>
            </div> 
        
    );
  }
}


let deleteEmpDetail = (id)=>{
  axios.delete('http://localhost:8070/employee/deleteEmployee/'+id)
.then(response => { 
    console.log(response.data)
    alert("Delivery Employee details deleted ")
 
  })
.catch(e=>{
    console.log(e)
});

}

let updateEmpDetails = (id)=>{
  axios.delete('http://localhost:8070/employee/updateEmployee/'+id)
.then(response => { 
    console.log(response.data)
 
  })
.catch(e=>{
    console.log(e)
});

}

export default DeliveryEmpDetails;
