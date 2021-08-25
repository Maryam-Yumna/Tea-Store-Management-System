import React, { Component } from 'react';
import axios from 'axios';

const initialState ={
    password:'',
    email:'',
    userType:'',
    error: false
}

class Login extends Component {
    constructor() {
        super();
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount(){

    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        let User ={
            password: this.state.password,
            email: this.state.email
        }

        axios.post('http://localhost:8070/auth/login', User)
        .then(response=>{
            console.log(response.data);
            localStorage.setItem('token', response.data.token);

            let userType = response.data.user.userType;

            console.log(userType==="customer");
            if(response.data.message === "success"){
                this.setState({
                    message: ""
                });
                if (userType === "admin"){
                    window.location.href = '/adminHome'
                    // this.props.history.push('/adminHome');
                }else if(userType === "customer"){
                    window.location.href = '/'
                    // this.props.history.push('/');
                }else {
                    window.location.href = '/'
                    // this.props.history.push('/');
                }
            }
            console.log("userType", userType);    
        })
        .catch(error=>{
            console.log(error.message)
            this.setState({
                error: true
            })
        })
    }
    render() {
        return (
            <div>
                {/* <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin"> */}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Login</h2>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="loginForm" onSubmit={this.onSubmit}>
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
                                <label for="floatingInput">Email address</label>
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
                            {
                                this.state.error== true?
                                <div className="p-2">
                                    <label htmlFor="errorMessage" style={{color:"red"}}>Invalid email or password</label>
                                </div>:
                                <div></div>
                            }
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-success" type="submit" >Login</button>
                            </form>
                        </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Login;