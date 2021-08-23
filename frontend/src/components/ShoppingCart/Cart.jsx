import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom';

toast.configure()
function Cart(props){
    const[inputs , setInput] = useState([{
            productName : "",
            price : "",
            description : "",
    }])

    useEffect(() =>{
        fetch("http://localhost:8070/cart").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })

    function removeFromCart(event){
        var userValue = window.confirm("Do you want to Remove the Product?");
        if(userValue == true){
            //add the deletion function here
            toast.warn('Product is Removed from My Cart successfully!' , {position: toast.POSITION.BOTTOM_CENTER});
        }else{
            //navigate the user back to the cart background
            toast('Thank you' , {position: toast.POSITION.TOP_CENTER});
        }
    }

    function decrementCount(event){
        toast('Product count is decreased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    function incrementCount(event){
        toast('Product count is increased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    return <div className= 'container '>
           <br/> <br/>
               <section className="mt-2 ">
                   <div className = "row g-0 " >
                   {inputs.map(input =>
                       <div className="card mb-3 shadow" >
                         <div className="row g-0">
                          <div className="col-md-4">
                            <img  src={CardImage} className="card-img-top img-fluid" />
                          </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="fw-bold">{input.productName}</h5><br/>
                               <p className="card-text">{input.price}</p>
                               <p className="card-text">{input.description}</p>
                               <br/> <br/>
                                <div className ="row">
                                    <div className = "col">
                                        <button onClick ={removeFromCart} className = "btn btn-danger">Remove</button>
                                    </div>
                                    <div className ="col">
                                        <button onClick ={decrementCount}  className = "fs-4 btn btn-dark">-</button>
                                        <input  className="text-center fs-5" name = "qty" style={{width:30 , height:30}} value = "1" disabled="true"/>
                                        <button onClick ={incrementCount}  className = "fs-4 btn btn-dark">+</button>
                                    </div>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                   )}
                   </div>
              </section>

                <div className ="row">
                    <div className = "col">
                        <Link to="/" className = "btn btn-success btn-lg">Next</Link>
                    </div>
                    <div className ="col">
                        <Link to="/" className = "btn btn-outline-secondary btn-lg">Cancel</Link>
                    </div>
                </div>

      </div>
}

export default Cart;