import React, { Component } from 'react';
import axios from 'axios';

class AddExpenses extends Component {
    constructor(){
        super();
        this.state={
           type:"",
           amount: 0,
           description: "",
           paymentDate:"",
           typeError: false,
           dateError: false  
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);
        this.insert = this.insert.bind(this);
    }

    componentDidMount(){
        
    }

    validate(){
        var today = new Date();
        var year = today.getFullYear();
        var month =(today.getMonth() + 1);
        if(month<10){
            month = "0"+(month);
        }
        
        var day = today.getDate();
        if(day<10){
            day = "0"+(day);
        }
        var today = year + '-' + month + '-' + day
        console.log("1");
        console.log("payday",this.state.paymentDate < today)
        
        if(this.state.paymentDate> today){
            console.log("2");
            console.log(this.state.paymentDate);
            this.setState({
                dateError: true
            });
            return false;
            console.log("date error")
        }else{
            console.log("3");
            this.setState({
                dateError: false
            });
            return true;
        }
    }
    onSubmit(e){
        e.preventDefault();
        const valid = this.validate();
        console.log(valid)
        if(valid){
            console.log("valid")
            this.insert();
        }
        // this.validate().then(this.insert())

        // console.log( this.state.typeError === false && this.state.dateError === false)
        
    }
    insert(){
        if(this.state.dateError === false){
            console.log( this.state.typeError === false && this.state.dateError === false)
            let Expense ={
                type:this.state.type,
                amount: this.state.amount,
                description: this.state.description,
                paymentDate: this.state.paymentDate
            }
            axios.post('http://localhost:8070/expense/newExpense', Expense)
            .then(response=>{
                console.log(response.data);
                this.props.history.push('/expenses')
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
        console.log(e.target.value, 'state',this.state.type);
        
    }
    render() {
        return (
            <div>
                <div className="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-5 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h2 className="fw-bold mb-0">Add Expense</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e)=>{this.props.history.push('/expenses')}}></button>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <div className="formWrapper">
                                    <form className="row g-3" onSubmit={this.onSubmit}>
                                        <div className="col-md-6">
                                            <label htmlFor="type" className="form-label">Expense Type</label>
                                            <select 
                                                class="form-select" 
                                                name="type"
                                                aria-label="Default select example" 
                                                onChange={this.onChange} 
                                                value={this.state.type}
                                                required>
                                                <option value="">Select Type</option>
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
                                                type="number" 
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
                                                value={this.state.paymentDate} 
                                                name ="paymentDate" 
                                                id="paymentDate"
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>
                                        {
                                            this.state.dateError?
                                            <div>
                                                <label htmlFor="expenseDateError" className="form-label" style={{color:"red"}}>
                                                    You cannot enter future dates. Please enter a valid date
                                                </label>
                                            </div>:
                                            <div></div>
                                        }
                                        <div className="col-md-12">
                                            <label htmlFor="description" className="form-label">Descripton</label>
                                            <textarea
                                                name="description" 
                                                className="form-control" 
                                                placeholder="Expense Description" 
                                                id="description"
                                                onChange={this.onChange}
                                                required>
                                            </textarea>
                                        </div>
                                        
                                        <button type="submit" className="w-100 mb-2 btn btn-lg rounded-4 btn-success" >Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddExpenses;