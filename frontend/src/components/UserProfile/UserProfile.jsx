import React, { Component } from 'react';
import axios from 'axios';
import userProfileImage from '../../images/userProfile2.png'

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{
                firstName: '',
                lastName:'',
                phone: '',
                email: '',
                address: '',
                registeredDate: '',
                userType: '',
                reason:''

            },
            error:'',
            reason:''
        }
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
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
    onDelete(e){
        console.log("clicked delete");
        e.preventDefault();
        let User =this.state.user
        User.reason = this.state.reason;
        let token = localStorage.getItem("token");
        
        this.setState({
            error: ''
        }, ()=>{
            if(this.state.reason !== ''){
                axios.post('http://localhost:8070/deletedUser/save',User)
                .then(response=>{
                    return axios.delete('http://localhost:8070/user/',{
                    headers:{
                        'authorization':token
                    } 
                })
                .then(response=>{
                    localStorage.removeItem("token");
                    alert("Your account has been deleted");
                    window.location.href = '/';
    
                })
                })
                .catch(error=>{
                    console.log(error.message);
                })
            }else{
                this.setState({
                    error: "Please enter the reason"
                },()=>{
                    console.log("error", this.state.error)
                })
            }
        })
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(this.state.reason);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col"
                        style={{
                            backgroundImage:"url("+userProfileImage+")", 
                            backgroundPosition:"center", 
                            backgroundRepeat:"no-repeat", 
                            backgroundSize:"contain", 
                            overflow:"hidden", 
                            width:"75%"
                        }}>
                    </div>
                    <div className="col-8">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-5 shadow">
                                <div className="modal-header p-5 pb-4 border-bottom-0">
                                    <h2 className="fw-bold mb-0">User Profile</h2>
                                </div>

                                <div className=" p-5 pt-0 ">
                                    <div className="fw-bold mb-3 row">
                                        <label htmlFor="staticFirstName" className="col-sm-3 col-form-label">First Name</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly className="form-control-plaintext" id="staticFirstName" value={this.state.user.firstName}/>
                                        </div>
                                    </div>
                                    <div className="fw-bold mb-3 row">
                                        <label htmlFor="staticLastName" className="col-sm-3 col-form-label">Last Name</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly className="form-control-plaintext" id="staticLastName" value={this.state.user.lastName}/>
                                        </div>
                                    </div>
                                    <div className="fw-bold mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.user.email}/>
                                        </div>
                                    </div>
                                    <div className="fw-bold mb-3 row">
                                        <label htmlFor="staticPhone" className="col-sm-3 col-form-label">Phone</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly className="form-control-plaintext" id="staticPhone" value={this.state.user.phone}/>
                                        </div>
                                    </div>
                                    <div className="fw-bold mb-3 row">
                                        <label htmlFor="staticAddress" className="col-sm-3 col-form-label">Address</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly className="form-control-plaintext" id="staticAddress" value={this.state.user.address}/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col-sm-6">
                                            <button className="btn btn-success mb-3" onClick={(e)=>{this.props.history.push('/editUserProfile')}}> Edit </button>
                                        </div>
                                        <div type="button" className="col-sm-6" data-bs-toggle="modal" data-bs-target="#deleteAccountModel">
                                            <button  className="btn btn-danger mb-3"> Delete Account </button>
                                        </div>
                                            <div className="modal fade" id="deleteAccountModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    <div className="modal-header" style={{backgroundColor: "#f54e42", color: "white"}}>
                                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" id="exclamation-triangle-fill" fill="white" viewBox="0 0 16 16">
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                        </svg>
                                                        <h5 className="modal-title" id="exampleModalLabel">Delete this account?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        To confirm that you want to delete this account please enter the reason that you are deleting the account.
                                                            <form>
                                                                <div className="mb-3 mt-3">
                                                                    <div className="form-floating mb-3">
                                                                        <input 
                                                                            type="text" 
                                                                            className="form-control rounded-4" 
                                                                            id="reason" 
                                                                            placeholder="reason"
                                                                            name="reason" 
                                                                            onChange={this.onChange} 
                                                                            value={this.state.reason}
                                                                            />
                                                                        <label htmlFor="floatingInput">Reason</label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            {
                                                                this.state.error !== ''? 
                                                                <div className="p-2">
                                                                    <label htmlFor="errorMessage" style={{color:"red"}}>{this.state.error}</label>
                                                                </div>:
                                                                <div>

                                                                </div>
                                                        }
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn" style={{backgroundColor: "#f54e42", color: "white"}} onClick={this.onDelete}>Yes, Delete</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
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