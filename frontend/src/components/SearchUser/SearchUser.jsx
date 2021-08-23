import React, { Component } from 'react';
import axios from 'axios';
import AdminHeader from '../adminHeader';

class SearchUser extends Component {
    constructor(){
        super();
        this.state={
           Users:[],
        }
        this.getAllUsers = this.getAllUsers.bind(this);
    }
    componentDidMount(){
        this.getAllUsers();
    }

    getAllUsers(){

        axios.get('http://localhost:8070/user/')
        .then((data)=>{
            this.setState({
                Users: data.data
            }, ()=>{console.log(this.state.Users)})
            console.log("Users",this.state.Users)
        })
        .catch(err=>{
            console.error(err);
        });
    }
    render() {
        return (
            <div>
                <AdminHeader/>
                <div>
                <div className="container w-100 p-3 text-center" id="users">
                        <h2>Search User</h2>
                        {/* <button id='btnAddNewExpense' type="button" className="btn btn-success">Add New Expense</button> */}
                        <div className= "container w-25 p-3">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    <div className="container w-75 p-3">
                        {this.state.Users.length !== 0 ?  
                            // <table className="table table-dark table-striped table-hover" >
                            <table className="table table-success table-striped table-hover" >
                                <thead>
                                    <tr>
                                        <th scope="col" id ='fullName'>Expense Type</th>
                                        <th scope="col" id ='email'>Email</th>
                                        <th scope="col" id ='phone'>Phone</th>
                                        <th scope="col" id ='address'>address</th>
                                        <th scope="col" id ='registredDate'>Registred Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Users.map((user)=>{
                                        return(
                                            <tr key={user._id}>
                                                <td id ='fullName'>{user.firstName} {user.lastName}</td>
                                                <td id ='trEmail'>{user.email}</td>
                                                <td id ='trPhone'>{user.phone}</td>
                                                <td id ='trAddress'>{user.address}</td>
                                                <td id ='trRegistredDate'>{user.registeredDate}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        : <div/>}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchUser;