import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom';

toast.configure()
function Cart(){
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

    //removeFromCart = (id) => {
    function removeFromCart(id){
        axios.delete('http://localhost:8070/cart' + `/delete/${id}`).then((res) => {
             toast.warn('Product is Removed from My Cart successfully!' , {position: toast.POSITION.BOTTOM_CENTER});
        });
    }

    function cancel(event){
        toast('Good Choice!' , {position: toast.POSITION.TOP_CENTER});
    }

    function decrementCount(event){
        toast('Product count is decreased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    function incrementCount(event){
        toast('Product count is increased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    return <div className= 'container '>
           <br/> <br/>
           <h3 className ="text-decoration-underline">Shopping Cart</h3><br/>
               <section className="mt-2 ">
                   <div className = "row g-0 " >
                   {inputs.map(input =>
                       <div className="card mb-3 shadow" >
                         <div className="row g-0">
                          <div className="col-md-4">
                            <img  src={input.photo} className="card-img-top img-fluid" />
                          </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="fw-bold">{input.productName}</h5><br/>
                               <p className="card-text">{input.price}</p>
                               <p className="card-text">{input.description}</p>
                               <br/> <br/>
                                <div className ="row">
                                    <div className = "col">
                                        <button className = "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Remove</button>
                                    </div>
                                    <div className ="col">
                                        <button onClick ={decrementCount}  className = "fs-4 btn btn-dark">-</button>
                                        <input  className="text-center fs-5" name = "qty" style={{width:30 , height:30}} value = "1" disabled="true"/>
                                        <button onClick ={incrementCount}  className = "fs-4 btn btn-dark">+</button>
                                        {/*Confirmation pop up box*/}
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div className="modal-dialog">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Oops...</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                              </div>
                                              <div className="modal-body">
                                                Do you want to Remove the Product?
                                              </div>
                                              <div className="modal-footer">
                                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick ={() => removeFromCart(input._id)}>Confirm</button>
                                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick ={cancel}>Cancel</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/*Confirmation pop up box*/}
                                    </div>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                   )}
                   </div>
              </section>
                <br/><br/>
                <h3 className ="text-decoration-underline">Summary</h3><br/>
                <div className = "fs-4">Total : US$7.20</div>
                <br/><br/>
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