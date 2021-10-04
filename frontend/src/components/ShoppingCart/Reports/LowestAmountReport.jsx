import React , {useEffect , useState} from 'react';
import axios from "axios";

function LowestAmountReport(){

    //Fetch the cart items
    const [cartItems , setCartItems] = useState([]);
    //'reduce()' function accepts two parameters. previous item and the current item
    const itemsPrice = cartItems.reduce((a , c) => a + c.price , 0);
    const totalQuantity = cartItems.reduce((a , c) => a + c.qty , 0);
    const fullAmount = itemsPrice * totalQuantity;

    useEffect(() =>{
        fetch("http://localhost:8070/cart/sort/lowest").then(res =>{
            if(res.ok){
                return res.json();
                console.log(cartItems);
            }
        }).then(jsonRes => setCartItems(jsonRes))
    })

    return (
        <div>
          <div className ="container">
               <br/>
               <h4 className = "text-center text-secondary">First 5 products with the lowest price which were added to the Shopping Cart</h4>
               <br/>
               <div className="table-responsive">
                   <table className="table">
                     <thead>
                       <tr className="table-dark">
                         <th scope="col">Date</th>
                         <th scope="col">Product Name</th>
                         <th scope="col">Price (LKR)</th>
                         <th scope="col">Quantity</th>
                         <th scope="col" className = "text-end ">Final Amount</th>
                       </tr>
                     </thead>
                     <tbody>
                         {cartItems.map(cartItem =>
                           <tr>
                             <th scope="row">{cartItem.addToCartDate}</th>
                             <td>{cartItem.productName}</td>
                             <td className = "text-end">{cartItem.price.toFixed(2)}</td>
                             <td className = "text-end">{cartItem.qty}</td>
                             <td className = "text-end">{cartItem.price.toFixed(2) * cartItem.qty}</td>
                           </tr>
                         )}
                     </tbody>
                     <thead>
                         <tr>
                           <th scope="col">Total</th>
                           <th scope="col"></th>
                           <th scope="col" className = "text-end">{itemsPrice.toFixed(2)}</th>
                           <th scope="col" className = "text-end">{totalQuantity}</th>
                           <th scope="col" className = "text-end">{fullAmount.toFixed(2)}</th>
                         </tr>
                     </thead>
                   </table>
               </div>
               <br/>
               <h5 className = "text-center text-success">Final Amount is : LKR {fullAmount.toFixed(2)}</h5>
               <br/>
          </div>

        </div>
    )
}

export default LowestAmountReport;