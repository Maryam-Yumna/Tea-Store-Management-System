import React , {useEffect , useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import AdminHeader from "../adminHeader";
import {toast} from 'react-toastify';

toast.configure()
function CartReport(){

    //Fetch the cart items
    /*const [cartItems , setCartItems] = useState([]);
    //'reduce()' function accepts two parameters. previous item and the current item
    const itemsPrice = cartItems.reduce((a , c) => a + c.price , 0);
    const totalQuantity = cartItems.reduce((a , c) => a + c.qty , 0);
    const fullAmount = itemsPrice * totalQuantity;

    useEffect(() =>{
        fetch("http://localhost:8070/cart/allCartItems").then(res =>{
            if(res.ok){
                return res.json();
                console.log(cartItems);
            }
        }).then(jsonRes => setCartItems(jsonRes))
    })*/

    //For inputs (Start date and the last date)
    /*const [input , setInput] = useState({
        startDate : '',
        lastDate : ''
    })

    function handleChange(event){
        const {name , value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name] : value
            }
        })
    }*/

//     function handleSubmit(event){
//         event.preventDefault();
//         const starting = event.target.startDate.value;
//         const ending = event.target.lastDate.value;
//         console.log("First Name : " + starting + "\nLast Name : " + ending)
//     }

    /*function handleClick(event){
        //prevent the default state
        //it will not refresh the page after clicking the button
        event.preventDefault();
        console.log(input);

//         const newNote = {
//             title : input.title,
//             content : input.content
//         }
//
//         axios.post('http://localhost:3001/create' , newNote); //passing the newNote to the url given within single quotes
    }*/

    return(
    <div>
        <AdminHeader/>
        <div className = "container">
            <br/><br/>
            <h4 className = "text-center text-success font-monospace">Generate Reports related Shopping Cart</h4>
            <br/><br/>
            <div className ="row text-center">
{/*                 <div className = "col"> */}
{/*                     <Link to="/cartReport-1" className="btn btn-success font-size-09 text-light">Number of Products Added to Shopping Cart in a given Date</Link> */}
{/*                     <input type = "date" className = "form-control" /> */}
{/*                 </div> */}
{/*                 <div className = "col"> */}
{/*                     <Link to="/cartReport-2" className="btn btn-success font-size-09 text-light">Number of Products Added to Shopping Cart in a given Month</Link> */}
{/*                     <input type = "text" className = "form-control" /> */}
{/*                 </div> */}
                <div className = "col">
                    <Link to="/cartHighestAmountReport" className="btn btn-success btn-lg font-size-09 text-light">Report regarding the cart items with <b>High</b> prices</Link>
                </div>
                <div className = "col">
                    <Link to="/cartLowestAmountReport" className="btn btn-success btn-lg font-size-09 text-light">Report regarding the cart items with <b>Low</b> prices</Link>
                </div>
            </div>
            <br/>

            <br/><br/>

        </div><br/>
    </div>
    )
}

export default CartReport;