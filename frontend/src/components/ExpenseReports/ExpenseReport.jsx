import React, { Component } from 'react';
import axios from 'axios';
import image from 'url:../../../public/images/teastore.png'

class ExpenseReport extends Component {
    constructor(props) {
            super(props);
            this.state={
                month: "",
                year: "",
                Expenses: [],
                firstDate:'',
                lastDate:'',
                total:0
            }

            this.onSubmit= this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
            this.convertDate = this.convertDate.bind(this);
            this.getTodayDate = this.getTodayDate.bind(this);
            this.print = this.print.bind(this);
    }
    componentDidMount(){

    }

    onSubmit(e){
        
        e.preventDefault();

        var last = new Date(this.state.year, this.state.month, 0).getDate();
        var firstDate= this.state.year+'-'+this.state.month+'-'+'01';
        var lastDate= this.state.year+'-'+this.state.month+'-'+ last;

        this.setState({
            firstDate: firstDate,
            lastDate: lastDate
        })

        let expense = {
            firstDate: firstDate,
            lastDate: lastDate
        }
        axios.get(`http://localhost:8070/expense/expenseForMonth/${firstDate}/${lastDate}`, expense)
        .then((data)=>{
            this.setState({
                Expenses: data.data
            }, ()=>{
                var sum = 0;
                for (let i = 0; i < this.state.Expenses.length; i++) {
                    sum += this.state.Expenses[i].amount;
                }
                console.log("sum",sum)
                this.setState({
                    total: sum
                })
                console.log(this.state.Expenses)
            })
        })
        .catch(err=>{
            console.error(err);
        });
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    convertDate(date){
        
        var date1 = new Date(date)
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
    getTodayDate(){
        var today = new Date();
        var month =(today.getMonth() + 1);
        if(month<10){
            month = "0"+(month);
        }
        
        var day = today.getDate();
        if(day<10){
            day = "0"+(day);
        }
        var date = today.getFullYear() + '-' + month + '-' + today.getDate();

        return(date);
    }
    print(){
        var content = document.getElementById("divcontents");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
   }
    render() {
        return (
            <div>
                <div className="container mb-5">
                    <div className = "container text-center mt-3 mb-3"> 
                        <h2 className="fw-bold mb-0">Expense Report</h2>
                    </div>
                
                    <div className="container w-75">
                        <form className="row" onSubmit={this.onSubmit}>
                            <div className="col">
                                <label for="floatingMonth">Month</label>
                                <select 
                                    className="form-select" 
                                    name="month"
                                    aria-label="Default select example"
                                    value={this.state.month}
                                    onChange={this.onChange}
                                    required
                                >
                                    <option value="">Select Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>                        
                            </div>
                                
                            <div className="col">
                                <label for="floatingInput">Year</label>
                                    <input 
                                        type="number" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="year"
                                        value={this.state.year} 
                                        name ="year"
                                        onChange={this.onChange}
                                        required/>
                                            
                            </div>
                            <div className="col">
                                <button className="w-100 mt-3 btn btn-lg rounded-4 btn-success" type="submit" >Generate Report</button>
                            </div>
                            {this.state.Expenses.length !== 0? <div className="col">
                                <button className="w-100 mt-3 btn btn-lg rounded-4 btn-secondary" onClick={() => this.print()}>Print</button>
                            </div>:
                            <div></div>}
                        </form>
                    </div>
                    {this.state.Expenses.length !== 0 ?  
                            <div id="divcontents" className="container m-5 p-5" style={{border: "2px solid grey", borderRadius: "5px"}}>
                                    <h3 style={{textAlign:"center"}}>Expense Reort</h3>
                                    <h5 className="m-3">Report Date: {this.getTodayDate()}</h5>
                                    <h5 className="m-3">Expense Report for: {this.state.firstDate} - {this.state.lastDate}</h5>
                                    <h5 className="m-3">Total Expenses: Rs. {this.state.total}</h5>
                                    <div>
                                        <table className="table table-info table-striped table-hover w-100" style={{margin: "auto"}} >
                                            <thead>
                                                <tr>
                                                    <th scope="col" id ='expenseType'>Expense Type</th>
                                                    <th scope="col" id ='description'>Description</th>
                                                    <th scope="col" id ='paymentDate'>Payment Date</th>
                                                    <th scope="col" id ='paymentDate'>Record Date</th>
                                                    <th scope="col" id ='amount'>Amount</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.Expenses.map((expense)=>{
                                                    return(
                                                        <tr key={expense._id}>
                                                            <td id ='expenseType'>{expense.type}</td>
                                                            <td id ='trDescription'>{expense.description}</td>
                                                            <td id ='trPaymentDate'>{this.convertDate(expense.paymentDate)}</td>
                                                            <td id ='trPaymentDate'>{this.convertDate(expense.recordDate)}</td>
                                                            <td id ='trAmount'>{expense.amount}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <iframe id="ifmcontentstoprint" style={{height: "0px", width: "0px", position: "absolute"}}></iframe>
                                </div>
                                
                        : <div className="container m-1 p-0" style={{border:"3px solid grey", borderRadius:"5px"}} >
                            <h4 className="p-5"style={{textAlign: "center"}}>
                                {
                                    this.state.firstDate !== "" && this.state.lastDate !== ""?
                                    <div>
                                        No Expense Records  for {this.state.firstDate} - {this.state.lastDate}
                                    </div>: <div></div> 
                                }
                                <img src={image}/>
                            </h4>
                        </div>}
                </div>
            </div>
        );
    }
}

export default ExpenseReport;