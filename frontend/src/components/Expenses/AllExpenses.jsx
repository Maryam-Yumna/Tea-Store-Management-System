import React, { Component } from 'react';
import axios from 'axios';
import AdminHeader from '../adminHeader';

class AllExpenses extends Component{
    constructor(){
        super();
        this.state={
           Expenses:[],    
        }

        this.getExpenses = this.getExpenses.bind(this);
    }

    componentDidMount(){
        this.getExpenses();
    }
    getExpenses(){

        axios.get('http://localhost:8070/expense/')
        .then((data)=>{
            this.setState({
                Expenses: data.data
            }, ()=>{console.log(this.state.Expenses)})
            console.log("expenses",this.state.Expenses)
        })
        .catch(err=>{
            console.error(err);
        });
    }
    render(){
        return(
            
            <div className="">
                <AdminHeader />
                <div className="container w-100 p-3 text-center" id="expenses">
                        <h2>Expenses</h2>
                        <button id='btnAddNewExpense' type="button" className="btn btn-success">Add New Expense</button>
                    <div className="container w-75 p-3">
                        {this.state.Expenses.length !== 0 ?  
                            <table className="table table-info table-striped table-hover" >
                                <thead>
                                    <tr>
                                        <th scope="col" id ='expenseType'>Expense Type</th>
                                        <th scope="col" id ='amount'>Amount</th>
                                        <th scope="col" id ='paymentDate'>Payment Date</th>
                                        <th scope="col" id ='description'>Description</th>
                                        <th scope="col" id ='action'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Expenses.map((expense)=>{
                                        return(
                                            <tr key={expense._id}>
                                                <td id ='expenseType'>{expense.type}</td>
                                                <td id ='trAmount'>{expense.amount}</td>
                                                <td id ='trPaymentDate'>{expense.paymentDate}</td>
                                                <td id ='trDescription'>{expense.description}</td>
                                                <td id ='trAction'><button id='btnEdit' type="button" className="btn btn-success" onClick={()=>this.editExpense(expense._id)}>Edit</button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        : <div/>}
                    </div>
                    </div>
            </div>
        )
    }
}
export default AllExpenses;