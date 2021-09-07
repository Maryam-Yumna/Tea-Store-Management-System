import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }
    componentDidMount(){
        let token = localStorage.getItem("token");
        if(token){
            this.setState({
                logged: "true"
            });
            axios.get(`http://localhost:8070/auth/loggedUser`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            
            this.setState({
                user: data.data
            },()=>console.log(this.state.user));
        })
        .catch(err=>{
            console.error(err);
        });
        }
    }
    render() {
        return (
            <div>
                <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-5 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h2 className="fw-bold mb-0">User Profile</h2>
                            </div>

                            <div className=" p-5 pt-0 ">
                                <div class="mb-3 row">
                                    <label for="staticFirstName" class="col-sm-3 col-form-label">First Name</label>
                                    <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="staticFirstName" value={this.state.user.firstName}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="staticLastName" class="col-sm-3 col-form-label">Last Name</label>
                                    <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="staticLastName" value={this.state.user.lastName}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                                    <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.user.email}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="staticAddress" class="col-sm-3 col-form-label">Address</label>
                                    <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="staticAddress" value={this.state.user.address}/>
                                    </div>
                                </div>
                                {/* <div class="mb-3 row">
                                    <label for="staticPassword" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-7">
                                    <input type="password" readonly class="form-control-plaintext" id="staticPassword" value="rose"/>
                                    </div>
                                </div> */}
                                <div class="mb-3 row">
                                    <div class="col-sm-6">
                                        <button class="btn btn-success mb-3" onClick={(e)=>{this.props.history.push('/editUserProfile')}}> Edit </button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button  class="btn btn-danger mb-3"> Delete Account </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
            </div>
        );
    }
}

export default UserProfile;