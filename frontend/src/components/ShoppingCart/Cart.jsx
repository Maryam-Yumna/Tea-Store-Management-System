import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom';
import DeleteIcon from 'url:../../../public/Icons/ic_delete.svg';
import BrokenHeart from 'url:../../../public/Icons/ic_brokenheart.svg';

toast.configure()
function Cart(){
    const[cartItems , setCartItems] = useState([]);

    useEffect(() =>{
//         fetch("http://localhost:8070/cart").then(res =>{
//             if(res.ok){
//                 return res.json();
//             }
//         }).then(jsonRes => setCartItems(jsonRes))
        //let token = localStorage.getItem("token");
        //fetch("http://localhost:8070/cart/user",{headers: {'authorization':token}}).then(res =>{
        fetch("http://localhost:8070/cart").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setCartItems(jsonRes))
    })

    //removeFromCart = (id) => {
    function removeFromCart(id){
        axios.delete('http://localhost:8070/cart' + `/delete/${id}`).then((res) => {
             toast.warn('Product is Removed from My Cart successfully!' , {position: toast.POSITION.BOTTOM_CENTER});
        });
    }

    //Feedback when the user clicks on "Cancel"
    function cancel(event){
        toast('Good Choice!' , {position: toast.POSITION.TOP_CENTER});
    }

    function decrementCount(event){
        toast('Product count is decreased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    function incrementCount(event){
        toast('Product count is increased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
    }

    return <div className= 'container'>
           <br/> <br/>
           <div className ='text-center'>
            {cartItems.length === 0 &&
                <div className = 'fs-4 fst-italic '><br/> <br/>
                    Shopping Cart is empty at the moment
                    <br/><br/>
                    <img src = {BrokenHeart} alt="" width = "300"/>
                </div>
            }
           </div>

           {cartItems.length !== 0 &&
           <div className = 'row' >
                <h3 className ="text-decoration-underline">Shopping Cart</h3><br/>
                    <div className ='col'>
                       <section className="mt-2 ">
                           <div className = "row g-0 " >
                           {cartItems.map(cartItem =>
                               <div className="card mb-3 shadow" >
                                 <div className="row g-0">
                                  <div className="col-md-4" >
                                    <img style={{width: '100%' , height:400}} src={cartItem.photo} className="card-img-top img-fluid" />
                                  </div>
                                   <div className="col-md-8">
                                      <div className="card-body">
                                        <h5 className="fw-bold">{cartItem.productName}</h5><br/>
                                       <p className="card-text fst-italic"><label>LKR {cartItem.price}.00</label></p>
                                       <p className="card-text">{cartItem.description}</p>
                                       <h1 className="card-text">{cartItem.qty}</h1>
                                       <br/> <br/>
                                        <div className ="row">
                                            {/*Remove button*/}
                                            <div className = "col">
                                                <button className = "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <img src = {DeleteIcon} alt="" width = "16"/> Remove
                                                </button>
                                            </div>
                                            <div className ="col">
                                                <button onClick ={decrementCount}  className = "fs-4 btn btn-dark">-</button>{/*Decrement*/}
                                                <input  className="text-center fs-5" name = "qty" style={{width:30 , height:30}} value = {cartItem.qty} disabled="true"/>
                                                <button onClick ={incrementCount}  className = "fs-4 btn btn-dark">+</button>{/*Decrement*/}
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
                                                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick ={() => removeFromCart(cartItem._id)}>Confirm</button>
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
                    </div>
                    <div className='col-2'>
                      <br/><br/>
                      <h3>Summary</h3>
                      <hr></hr><br/>
                        <div>
                            <p className = "fs-4 fst-italic">Total Amount :
                            <br/><br/>
                            LKR 7000.00
                            </p>
                        </div>
                      <br/><br/>
                    </div>
                      <div className ="row text-center">
                          <div className = "col"><br/><br/>
                              <Link to="/" className = "btn btn-success btn-lg">Next</Link>
                          </div>
                          <div className ="col"><br/><br/>
                              <a href ="/" className = "btn btn-outline-secondary btn-lg">Cancel</a>
                          </div>
                      </div>
           </div>
           }
      </div>
}

export default Cart;