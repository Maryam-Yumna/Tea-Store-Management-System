import React, { Component } from 'react';
import axios from 'axios';
import userProfileImage from '../../images/editProfile.png'

class EditUserProfile extends Component {

    constructor(props){
        super(props);
        this.state={
           firstName:"",
           lastName: "",
           address:"",
           email:"",
           password:"",
           phone:"",
           error: false,
           message:"",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
                id: data.data._id,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                address: data.data.address,
                email:data.data.email,
                phone:data.data.phone

            });
        })
        .catch(err=>{
            console.error(err);
        });
        }
    }

    onSubmit(e){
        e.preventDefault();
        let User ={
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone
        }
        let token = localStorage.getItem("token");
        const valid = this.isValid();        
        if(valid)
        {
            axios.put('http://localhost:8070/auth/updateUser', User, {
                headers:{
                    'authorization':token
                } 
            })
            .then(response=>{
                this.props.history.push('/myAccount')
            })
            .catch(error=>{
                console.log(error.message)
                this.setState({
                    error: true
                })
            })
        }
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    isValid(){
        var regex = /^\d{10}$/;
        if(!regex.test(this.state.phone)){
            this.setState({
                error: true,
                message:"Plese enter a valid phone number"
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
                        <div className="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content rounded-5 shadow">
                                    <div className="modal-header p-5 pb-4 border-bottom-0">
                                        <h2 className="fw-bold mb-0">Edit User Profile</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e)=>{this.props.history.push('/myAccount')}}></button>
                                    </div>
                                    <div className="modal-body p-5 pt-0">
                                        <form className="" onSubmit={this.onSubmit}>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="email" 
                                                className="form-control rounded-4" 
                                                id="email" 
                                                placeholder="name@example.com"
                                                name="email" 
                                                onChange={this.onChange} 
                                                value={this.state.email}
                                                disabled
                                                required
                                                />
                                            <label htmlFor="floatingInput">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control rounded-4" 
                                                id="firstName" 
                                                placeholder="name@example.com"
                                                name="firstName" 
                                                onChange={this.onChange} 
                                                value={this.state.firstName}
                                                required
                                                />
                                            <label htmlFor="floatingInput">First Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control rounded-4" 
                                                id="lastName" 
                                                placeholder="name@example.com"
                                                name="lastName" 
                                                onChange={this.onChange} 
                                                value={this.state.lastName}
                                                required
                                                />
                                            <label htmlFor="floatingInput">Last Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control rounded-4" 
                                                id="phone" 
                                                placeholder="phone"
                                                value={this.state.phone} 
                                                name ="phone"
                                                onChange={this.onChange}
                                                required
                                                />
                                            <label htmlFor="floatingInput">Phone</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control rounded-4" 
                                                id="address" 
                                                placeholder="name@example.com"
                                                name="address" 
                                                onChange={this.onChange} 
                                                value={this.state.address}
                                                required
                                                />
                                            <label htmlFor="floatingInput">Address</label>
                                        </div>
                                        {
                                            this.state.error== true?
                                            <div className="p-2">
                                                <label htmlFor="errorMessage" style={{color:"red"}}>{this.state.message}</label>
                                            </div>:
                                            <div></div>
                                        }
                                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-success" type="submit">Save Changes</button>
                                        
                                        </form>
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

export default EditUserProfile;