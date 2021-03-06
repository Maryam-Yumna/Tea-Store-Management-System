import React , {useEffect , useState} from 'react';
import axios from 'axios';
import CardImage from 'url:../../../public/images/cardImage.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom';
import '../../App.css';

toast.configure()
function DetailProduct(props){

    const productId = props.match.params.productId;
    const [Product , setProduct] = useState([]);
    const [cartItems , setCartItems] = useState([]);

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
            }
        }).then(jsonRes => setCartItems(jsonRes))
    })

    //Add to cart function
     function addToCartHandler(event){
        event.preventDefault();
        console.log("CartIts",cartItems);
        const exist = cartItems.find((item) => item.item === Product._id);

        if(exist){

            const newQty = {
                qty:exist.qty + 1
            };

            axios.put('http://localhost:8070/cart' + `/put/${exist._id}`, newQty);

            //Display a toast message
            toast('Product count is increased by 1' , {position: toast.POSITION.BOTTOM_RIGHT});

        }else{
            const newProduct = {
                item : Product._id,
                productName : Product.productName,
                price : Product.price,
                description : Product.description,
                photo : Product.photo,
                qty : 1
            }

            let token = localStorage.getItem("token");
            axios.post('http://localhost:8070/cart' , newProduct, {headers: {'authorization':token}});


            //Taost message when the product is added to the shopping cart
            toast.success('Product is Added to My Cart successfully!' , {position: toast.POSITION.TOP_CENTER});
        }

    }

    //Accessing a single product
    useEffect(() =>{

       axios.get('http://localhost:8070/products' + `/products_by_id?id=${productId}&type=single`).then(response => {
            setProduct(response.data[0])
       })

    } , [])


    return (
    <div className = " detailproductbgimg postPage" style={{width: '100%'  , padding: '3rem 4rem' }}>
        <div className = "row gap-4 " gutter={[16 , 16]}>
            <div className = "col-3 " lg={12} xs={24}>
                <img style={{width: '100%' , height: 300 }} src={Product.photo} className="card-img-top img-fluid" />
            </div>

            <div className = "col " lg={12} xs={24}>
                <h3 name = "productName" value = {Product.productName} >{Product.productName}</h3>
                <hr></hr>
                <p name = "price"  value = {Product.price} className="fs-5 fw-bold card-text fst-italic"><label>LKR {Product.price}.00</label></p>
                <p name = "description" value={Product.description} className="fw-normal fs-5 font-monospace card-text">{Product.description}</p>
                <p name = "category" value={Product.category} className="fs-5 card-text">Belongs to the category of <label className = "text-success">{Product.category}</label></p>
                <p name = "deliverywithin" value={Product.deliverywithin} className="fs-5 card-text">Deliver within <label className = "text-success">{Product.deliverywithin}</label></p>
                <br/>
                <button onClick ={addToCartHandler} className = "btn btn-success">Add To Cart</button>
            </div>
            <br/>
            <Link to="/" class="fs-4 link-success fw-bold fst-italic"> Go back</Link>
        </div>
    </div>
    )
}

export default DetailProduct;