import React, { Component } from 'react';
import axios from 'axios';
import searchImage from '../../images/search2.png'

class SearchUser extends Component {
    constructor(){
        super();
        this.state={
           Users:[],
           searchName:"",
           list:[],
           userDetails:"",
           userId: ""
        }
        this.getAllUsers = this.getAllUsers.bind(this);
        this.convertDate = this.convertDate.bind(this);
        this.suggestionSelected= this.suggestionSelected.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
        this.getList= this.getList.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.getAllUsers();
        console.log("userdetails",this.state.userDetails);
    }

    getAllUsers(){

        axios.get('http://localhost:8070/user/')
        .then((data)=>{
            this.setState({
                Users: data.data
            })
        })
        .catch(err=>{
            console.error(err);
        });
    }
    convertDate(date){
        
        var date1 = new Date(date);
        var year = date1.getFullYear();
        var month =(date1.getMonth() + 1);
        if(month<10){
            month = "0"+(month);
        }
        
        var day = date1.getDate();
        if(day<10){
            day = "0"+(day);
        }

        var convertedDate = year + '-' + month + '-' + day;
        return(convertedDate);
    }
    handleSearch(e){
        const value =e.target.value ;
         let list = [];
        
        this.setState({
            list, 
            searchName: value
        },()=>{
            if(value.length> 0){
                this.getList(value);
            }
        });
    }
    
    getList(){
        if(this.state.searchName === ""){
            this.setState({
                list:[]
            })
        }else{
            axios.get(`http://localhost:8070/user/search/${this.state.searchName}`)
            .then((data)=>{
                this.setState({
                    list: data.data
                })   
            })
            .catch(err=>{
                console.error(err);
            });
        }
    }

    suggestionSelected(id, firstName, lastName){
        console.log('suggesion selected');
        // console.log(name);
        // this.findItem(name);
        this.setState({
            searchName:  firstName +" "+ lastName,
            list: [],
            userId: id
        }, ()=>{
            console.log("user id",this.state.userId)
        });
        

    }
    handleSubmit(e){
        e.preventDefault();
        
        this.setState({
            searchName: '',
            SelectedItems: [],
            userDetails: ""
        },()=>{
            axios.get(`http://localhost:8070/user/${this.state.userId}`)
            .then((data)=>{
                this.setState({
                    userDetails: data.data
                }, ()=>{
                    console.log("user details",this.state.userDetails, data.data);
                })
            })
            .catch(err=>{
                console.error(err);
            });
        })
    }
    
    render() {
        return (
            <div>
                <div>
                <div className="container w-100 p-3 text-center" id="users">
                        <h2 className="fw-bold mb-0">Search User</h2>
                        <div className= "container w-25 p-3 mt-2 mb-2">
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <div style={{width:"225px"}}>
                                    <input 
                                        className="form-control me-2"
                                        type="search" 
                                        placeholder="Search" 
                                        aria-label="Search"
                                        onChange={this.handleSearch}
                                        value ={this.state.searchName}
                                        name="searchName"
                                        id="searchName"
                                        autoComplete="off"
                                        />
                                    {
                                        this.state.list.length>0? 
                                        // <div style={{border: "1px solid black", marginBlockStart: "0em"}} >
                                            <div 
                                                style={{ 
                                                    border: "1px solid #c4bebe", 
                                                    marginBlockStart: "0em", 
                                                    textAlign: "left", 
                                                    zIndex:"1", 
                                                    position: 'absolute',
                                                    width: "215px"}}>
                                            <ul className="list-group p-0" style={{listStyleType: "none"}}>
                                                {this.state.list.map((list)=> 
                                                    <li 
                                                        className="list-group-item list-group-item-action list-group-item-light" 
                                                        onClick = {()=>this.suggestionSelected(list._id, list.firstName, list.lastName)}
                                                        style={{ border: "none"}}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                                            width="16" 
                                                            height="16" 
                                                            fill="#c4bebe" 
                                                            className="bi bi-search" 
                                                            viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                        </svg> 
                                                        {list.firstName} {list.lastName} 
                                                    </li>)}
                                            </ul>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </div>
                                <div>
                                    <button className="btn btn-outline-success ms-1" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    
                    {this.state.userDetails === "" ?  
                    <div className="container w-75 p-3">
                            {/* <table className="table table-dark table-striped table-hover" > */}
                            <table className="table table-info table-striped table-hover" >
                                <thead>
                                    <tr>
                                        <th scope="col" id ='fullName'>Full Name</th>
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
                                                <td id ='trRegistredDate'>{this.convertDate(user.registeredDate)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            </div>
                        : 
                        <div className="container p-3">
                        <div className="row">
                            <div className="col" style={{backgroundImage:"url("+searchImage+")", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"contain", overflow:"hidden", width:"75%"}}  ></div>
                            <div className="col-8" style={{textAlign: "left"}}>
                                            <div className="modal-dialog" role="document">
                                                    <div className="modal-content rounded-5 shadow">
                                                        <div className="modal-header p-5 pb-4 border-bottom-0">
                                                            <h2 className="fw-bold mb-0">User Details</h2>
                                                        </div>

                                                        <div className=" p-5 pt-0 ">
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticFirstName" className="col-sm-3 col-form-label">First Name</label>
                                                                <div className="col-sm-7">
                                                                <input type="text" readOnly className="form-control-plaintext" id="staticFirstName" value={this.state.userDetails.firstName}/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticLastName" className="col-sm-3 col-form-label">Last Name</label>
                                                                <div className="col-sm-7">
                                                                <input type="text" readOnly className="form-control-plaintext" id="staticLastName" value={this.state.userDetails.lastName}/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                                                <div className="col-sm-7">
                                                                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.userDetails.email}/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticPhone" className="col-sm-3 col-form-label">Phone</label>
                                                                <div className="col-sm-7">
                                                                <input type="text" readOnly className="form-control-plaintext" id="staticPhone" value={this.state.userDetails.phone}/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 row">
                                                                <label htmlFor="staticAddress" className="col-sm-3 col-form-label">Address</label>
                                                                <div className="col-sm-7">
                                                                <input type="text" readOnly className="form-control-plaintext" id="staticAddress" value={this.state.userDetails.address}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>    
                                        </div>
                        </div>
                        </div>
                        }
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchUser;