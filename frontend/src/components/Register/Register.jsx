import React, { Component } from 'react';
import axios from 'axios';

const initialState ={
    firstName:'',
    lastName:'',
    password:'',
    confirmPassword:'',
    address:'',
    email:'',
    userType:'',
    error: false,
    message:""
}

class Register extends Component {
    constructor() {
        super();
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValid = this.isValid.bind(this);

    }
    componentDidMount(){

    }

    onSubmit(e){
        e.preventDefault();

        let User ={
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            password: this.state.password,
            email: this.state.email
        }

        const valid = this.isValid();        
        if(valid)
        {
            console.log("submitted")
            axios.post('http://localhost:8070/user/register', User)
            .then(response=>{
                localStorage.setItem('token', response.data.token);
                window.location.href = '/';
            })
            .catch(error=>{
                console.log(error.message)
                alert(error.message);
            });
        }
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    isValid(){
        if(this.state.password.length < 8 ){
            this.setState({
                error:true,
                message:"Password should contain more than 7 characters"
            });
            return false;
        } else if(this.state.password !== this.state.confirmPassword){
            this.setState({
                error: true,
                message:"Password and confirm password does not match. Please check again"
            });
            return false;
        }else{
            this.setState({
                error: false,
                message: ""
            });
            return true;
        }
    }

    render() {
        return (
            <div>
                <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Register</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e)=>{this.props.history.push('/')}}></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="loginForm" onSubmit={this.onSubmit}>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="First Name"
                                        value={this.state.firstName} 
                                        name ="firstName"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="Last Name"
                                        value={this.state.lastName} 
                                        name ="lastName"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="floatingInput">Last Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="name@example.com"
                                        value={this.state.email} 
                                        name ="email"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="floatingInput">Email </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="password" 
                                        className="form-control rounded-4" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        value={this.state.password} 
                                        name ="password"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                <input 
                                    type="password" 
                                    className="form-control rounded-4" 
                                    id="floatingPassword" 
                                    placeholder="Password"
                                    value={this.state.confirmPassword} 
                                    name ="confirmPassword"
                                    onChange={this.onChange}
                                    required/>
                                <label for="floatingPassword">Confirm Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="Address"
                                        value={this.state.address} 
                                        name ="address"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="floatingInput">Address</label>
                                </div>
                                
                                {
                                    this.state.error== true?
                                    <div className="p-2">
                                        <label htmlFor="errorMessage" style={{color:"red"}}>{this.state.message}</label>
                                    </div>:
                                    <div></div>
                                }
                                <button className="w-100 mb-2 btn btn-lg rounded-4 btn-success" type="submit" >Register</button>
                            </form>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Register;