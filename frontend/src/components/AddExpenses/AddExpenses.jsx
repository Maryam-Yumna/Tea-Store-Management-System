import React, { Component } from 'react';
import axios from 'axios';
import AdminHeader from '../adminHeader';

class AddExpenses extends Component {
    constructor(){
        super();
        this.state={
           type:"",
           amount: 0,
           description: "",
           paymentDate:""   
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        
    }

    onSubmit(){
        console.log("on submit");
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.value, 'state',this.state.type);
    }
    render() {
        return (
            <div>
                <AdminHeader/>
                <div className="container w-100 p-3 text-center">
                    <h1> Add New Expense</h1>
                </div>
                <div className="container w-50 p-3 ">
                <div className="formWrapper">
                    <form className="row g-3" onSubmit={this.onSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="type" className="form-label">Expense Type</label>
                            <select 
                                class="form-select" 
                                name="type"
                                aria-label="Default select example" 
                                onChange={this.onChange} 
                                value={this.state.value}>
                                <option value="">select Type</option>
                                <option value="Phone Bill">Phone Bill</option>
                                <option value="Electricity Bill">Electricity Bill</option>
                                <option value="Water Bill">Water Bill</option>
                                <option value="Purchases">Purchases</option>
                                <option value="Rent">Rent</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {this.state.type === "Other"? 
                            <div className="col-md-6">
                                <label htmlFor="other" className="form-label">Other Expense</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.other}
                                    name="other" 
                                    id="other"
                                    onChange={this.onChange}
                                    placeholder="Other Expense Type" 
                                    required
                                />
                        </div>:<div className="col-md-6"></div>}
                        <div className="col-md-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                vale={this.state.amount} 
                                name ="amount" 
                                id="amount"
                                onChange={this.onChange}
                                placeholder="Payment Amount" 
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="expenseDate" className="form-label">Expense Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={this.state.expenseDate} 
                                name ="expenseDate" 
                                id="expenseDate"
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="description" className="form-label">Descripton</label>
                            <textarea
                                name="description" 
                                class="form-control" 
                                placeholder="Expense Description" 
                                id="description"
                                onChange={this.onChange}
                                required>
                            </textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-lg text-white" style={{backgroundColor:"#585c61"}}>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default AddExpenses;