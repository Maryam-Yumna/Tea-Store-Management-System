import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import AdminHeader from '../adminHeader';
import Navbar from '../nav bar/Navbar';
class ApplicationHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{},
            logged:"false"
        }
        this.logout = this.logout.bind(this);
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
    logout(){
        console.log("loggedout")
        this.setState({
            user:{}
        });
        localStorage.clear();
        window.location.href = '/'
        // this.props.history.push('/');
        
    }
    render() {
        return (
            <div>
                {this.state.user.userType === "customer"?(
                    <div>
                        <Header logged={this.state.logged} logout={this.logout}/>
                        <Navbar/>
                    </div>
                ):this.state.user.userType === "admin"?
                (
                    <div>
                        <AdminHeader logged={this.state.logged} logout={this.logout}/>
                    </div>
                ):
                (
                    <div>
                        <Header logged={this.state.logged}/>
                        <Navbar/>
                    </div>
                )}
            </div>
        )
            
    }
}

export default ApplicationHeader;