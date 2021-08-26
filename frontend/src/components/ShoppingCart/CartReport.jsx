import React from 'react';
import {Link} from 'react-router-dom';

function CartReport(){
    return <div className = "container">
        <br/>
        <h4 className = "text-center text-decoration-underline">Generate Reports related Shopping Cart</h4>
        <br/><br/>
        <div className ="row text-center">
            <div className = "col">
                <Link to="/cartReport-1" className="btn btn-success font-size-09 text-light">Number of Products Added to Shopping Cart in a given Date</Link>
                <input type = "date" className = "form-control" />
            </div>
            <div className = "col">
                <Link to="/cartReport-2" className="btn btn-success font-size-09 text-light">Number of Products Added to Shopping Cart in a given Month</Link>
                <input type = "text" className = "form-control" />
            </div>
            <div className = "col">
                <Link to="/cartReport-3" className="btn btn-success font-size-09 text-light">Highest amount of price calculated in the Shopping Cart</Link>
            </div>
        </div>
    </div>
}

export default CartReport;