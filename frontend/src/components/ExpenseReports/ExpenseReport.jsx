import React, { Component } from 'react';

class ExpenseReport extends Component {
    constructor(props) {
            super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <div className="container mb-5">
                <div className = "container text-center mt-3 mb-3"> 
                <h2 className="fw-bold mb-0">Expense Report</h2>
                </div>
                
                <div class="container w-75">
                <form className="row" onSubmit={this.onSubmit}>
                    
                    <div className="col">
                    <label for="floatingMonth">Month</label>
                                <select 
                                                class="form-select" 
                                                name="month"
                                                aria-label="Default select example"
                                                value=""
                                                required>
                                                <option value="">Select Month</option>
                                                <option value="Phone Bill">January</option>
                                                <option value="Electricity Bill">February</option>
                                                <option value="Water Bill">March</option>
                                                <option value="Purchases">April</option>
                                                <option value="Electricity Bill">May</option>
                                                <option value="Water Bill">June</option>
                                                <option value="Purchases">July</option>
                                                 <option value="Electricity Bill">August</option>
                                                <option value="Water Bill">September</option>
                                                <option value="Purchases">October</option>
                                                <option value="Rent">November</option>
                                                <option value="Other">December</option>
                                            </select>
                                            
                                
                        </div>
                        
                        <div className="col">
                        <label for="floatingInput">Year</label>
                                    <input 
                                        type="number" 
                                        className="form-control rounded-4" 
                                        id="floatingInput" 
                                        placeholder="year"
                                        value=" " 
                                        name ="year"
                                        onChange={this.onChange}
                                        required/>
                                    
                        </div>
                        <div className="col">
                        <button className="w-100 mt-3 btn btn-lg rounded-4 btn-success" type="submit" >Generate Report</button>
                        </div>
                            </form>
                </div>
                    
                    
                
                    </div>
                    {/* <form class="row g-3">
                    <div class="col-auto">
                    <label htmlFor="type" className="form-label">Expense Type</label>
                                            <select 
                                                class="form-select" 
                                                name="type"
                                                aria-label="Default select example" 
                                                // onChange={this.onChange} 
                                                // value={this.state.type}
                                                required>
                                                <option value="">Select Month</option>
                                                <option value="Phone Bill">January</option>
                                                <option value="Electricity Bill">February</option>
                                                <option value="Water Bill">March</option>
                                                <option value="Purchases">April</option>
                                                <option value="Rent">May</option>
                                                <option value="Other">June</option>
                                                <option value="Phone Bill">July</option>
                                                <option value="Electricity Bill">August</option>
                                                <option value="Water Bill">September</option>
                                                <option value="Purchases">October</option>
                                                <option value="Rent">November</option>
                                                <option value="Other">December</option>
                                            </select>
                        
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="number" class="form-control" id="inputPassword2" placeholder="year" value =""/>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </form> */}
            </div>
        );
    }
}

export default ExpenseReport;