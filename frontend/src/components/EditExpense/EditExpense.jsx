import React, { Component } from 'react';
import axios from 'axios';

class EditExpense extends Component {

    constructor(props){
        super(props);
        this.state={
           type:"",
           amount: 0,
           description: "",
           paymentDate:"",
           expenseID: '',   
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getExpense = this.getExpense.bind(this);
        this.convertDate = this.convertDate.bind(this);
    }
    componentDidMount(){
        this.getExpense();
    }
    getExpense(){
        const  id =this.props.location.state.data;
        axios.get(`http://localhost:8070/expense/getbyid/${id}`)
        .then((data)=>{
            this.setState({
                type: data.data.type,
                amount: data.data.amount,
                description: data.data.description,
                paymentDate: data.data.paymentDate,
                expenseID: data.data._id,
            });
            this.convertDate(data.data.paymentDate);
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
        this.setState({
            paymentDate: convertedDate
        });
    }
    onSubmit(e){
        e.preventDefault();
        let Expense ={
            id: this.state.expenseID,
            type:this.state.type,
            amount: this.state.amount,
            description: this.state.description,
            paymentDate: this.state.paymentDate
        }
        axios.put('http://localhost:8070/expense/updateExpense', Expense)
        .then(response=>{
            // console.log(response.data);
            this.props.history.push('/expenses')
        })
        .catch(error=>{
            console.log(error.message)
            this.setState({
                error: true
            })
        })
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h2 className="fw-bold mb-0">Edit Expense</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e)=>{this.props.history.push('/expenses')}}></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onSubmit={this.onSubmit}>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control rounded-4" 
                                    id="type" 
                                    placeholder="name@example.com"
                                    name="type" 
                                    onChange={this.onChange} 
                                    value={this.state.type}
                                    disabled
                                    required
                                    />
                                <label htmlFor="floatingInput">Expense Type</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control rounded-4" 
                                    id="amount" 
                                    placeholder="name@example.com"
                                    name="amount" 
                                    onChange={this.onChange} 
                                    value={this.state.amount}
                                    required
                                    />
                                <label htmlFor="floatingInput">Amount</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="date" 
                                    className="form-control rounded-4" 
                                    id="paymentDate" 
                                    placeholder="name@example.com"
                                    name="paymentDate" 
                                    onChange={this.onChange} 
                                    value={this.state.paymentDate}
                                    required
                                    />
                                <label htmlFor="floatingInput">Payment Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control rounded-4" 
                                    id="description" 
                                    placeholder="name@example.com"
                                    name="description" 
                                    onChange={this.onChange} 
                                    value={this.state.description}
                                    required
                                    />
                                <label htmlFor="floatingInput">Description</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-success" type="submit">Save Changes</button>
                            
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditExpense;
