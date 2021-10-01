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

    const [cartItems , setCartItems] = useState([]);

    //'reduce()' function accepts two parameters. previous item and the current item
    const itemsPrice = cartItems.reduce((a , c) => a + c.price * c.qty , 0);
    let discount = 0//itemsPrice > 2000 ? 0 : 50;
    //const total = itemsPrice - discount;

    if(itemsPrice > 2000){
        discount = itemsPrice * 0.25;
    }

    let total = itemsPrice - discount;

    useEffect(() =>{
//         fetch("http://localhost:8070/cart").then(res =>{
//             if(res.ok){
//                 return res.json();
//             }
//         }).then(jsonRes => setCartItems(jsonRes))
        let token = localStorage.getItem("token");
        fetch("http://localhost:8070/cart/user",{headers: {'authorization':token}}).then(res =>{
            if(res.ok){
                return res.json();
                console.log(cartItems);
            }
        }).then(jsonRes => setCartItems(jsonRes))
    })

    //removeFromCart = (id) => {
    function removeFromCart(id){
        let token = localStorage.getItem("token");
        axios.delete('http://localhost:8070/cart' + `/delete/${id}`, {headers: {'authorization':token}}).then((res) => {
             toast.warn('Product is Removed from My Cart successfully!', {position: toast.POSITION.BOTTOM_CENTER});
        });
    }

    //Feedback when the user clicks on "Cancel"
    function cancel(event){
        toast('Good Choice!' , {position: toast.POSITION.TOP_CENTER});
    }

    function decrementCount(id){

        const exist = cartItems.find((item) => item._id === id);

        if(exist){
            const newQty = {
                qty:exist.qty - 1
            };

            if( exist.qty === 1 ){
                removeFromCart(exist.item);
            }else{
                axios.put('http://localhost:8070/cart' + `/put/${id}`, newQty);
            }

            //Display a toast message
            toast('Product count is decreased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    //Update the count by increasing the qty by 1
    function incrementCount(id){

        const exist = cartItems.find((item) => item._id === id);

        if(exist){
            const newQty = {
                qty:exist.qty + 1
            };

            axios.put('http://localhost:8070/cart' + `/put/${id}`, newQty);

            //Display a toast message
            toast('Product count is increased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    return <div className= 'cartbgimg'>
     <div className= 'container'>
           <br/> <br/>
           <div className ='text-center'>
               {cartItems.length === 0 &&
                   <div className = 'fs-4 fst-italic text-white'><br/> <br/>
                       Shopping Cart is empty at the moment
                       <br/><br/>
                       <img src = {BrokenHeart} alt="" width = "300"/>
                   </div>
               }
           </div>
           {cartItems.length !== 0 &&
           <div className = 'row' >
                <h3 className ="fw-bold fst-italic text-white">Shopping Cart</h3><br/>
                <hr></hr>
                    <div className ='col'>
                       <section className="mt-2 ">
                           <div className = "row g-0 " >
                           {cartItems.map(cartItem =>
                               <div className="card mb-3 card shadow" >
                                 <div className="row g-0">
                                  <div className="col-md-4" >
                                    <img style={{width: '100%' , height:400}} src={cartItem.photo} className="card-img-top img-fluid" />
                                  </div>
                                   <div className="col-md-8">
                                      <div className="card-body">
                                        <h5 className="fw-bold">{cartItem.productName}</h5><br/>
                                       <p className="card-text fst-italic"><label>LKR {cartItem.price}.00</label></p>
                                       <p className="card-text">{cartItem.description}</p>
                                       <br/> <br/>
                                        <div className ="row">
                                            {/*Remove button*/}
                                            <div className = "col">
                                                <button className = "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <img src = {DeleteIcon} alt="" width = "16"/> Remove
                                                </button>
                                            </div>
                                            <div className ="col">
                                                <button onClick ={() => decrementCount(cartItem._id)}  className = "fs-4 btn btn-dark">-</button>{/*Decrement*/}
                                                <label  className="text-center fs-5 fw-bolder" name = "qty" style={{width:30 , height:30}} value = {cartItem.qty} >{cartItem.qty}</label>
                                                <button onClick ={() => incrementCount(cartItem._id)} className = "fs-4 btn btn-dark">+</button>{/*Decrement*/}
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
                                                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick ={() => removeFromCart(cartItem.item)}>Confirm</button>
                                                      {/* <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick ={() => removeFromCart(cartItem._id)}>Confirm</button> */}
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
                    <div className='col-4'>
                      <br/><br/>
                      <h3 className = "fs-4 text-white text-decoration-underline" >Summary</h3>
                      <hr ></hr><br/>
                        <div className = "bg-light"><br/>
                            <p className = "p-3 fs-5 fst-italic text-secondary fw-bold">Total Amount : LKR {itemsPrice.toFixed(2)}</p>
                            <p className = "p-3 fs-5 fst-italic text-secondary fw-bold" >Discount : LKR {discount.toFixed(2)}</p>
                            <p className = "p-3 fs-5 fst-italic text-success fw-bold" >Finale Amount : LKR {total.toFixed(2)}</p><br/>
                        </div>
                      <br/><br/>
                    </div>
                      <div className ="row text-center">
                          <div className = "col"><br/><br/>
                              <Link to="/" className = "btn btn-success btn-lg">Next</Link>
                          </div>
                          <div className ="col"><br/><br/>
                              <a href ="/" className = "btn btn-outline-light btn-lg">Cancel</a>
                          </div>
                      </div>
           </div>
           }
      </div><br/><br/>
      </div>
}

export default Cart;