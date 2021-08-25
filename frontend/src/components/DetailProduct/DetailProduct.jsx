import React , {useEffect , useState} from 'react';
import axios from 'axios';
import CardImage from 'url:../../../public/images/cardImage.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
function DetailProduct(props){

    const [input , setInput] = useState({
        productName : '',
        price : '',
        description : ''
    })

    function handleChange(event){
        const {name , value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name] : value
            }
        })
    }

     function addToCartHandler(event){
        event.preventDefault();

        const newProduct = {
            productName : Product.productName,
            price : Product.price,
            description : Product.description,
            photo : Product.photo
        }

        axios.post('http://localhost:8070/cart' , newProduct); //passing the newNote to the url given within single quotes

        toast.success('Product is Added to My Cart successfully!' , {position: toast.POSITION.TOP_CENTER});

    }


    const productId = props.match.params.productId;
    const [Product , setProduct] = useState([]);

    useEffect(() =>{

       axios.get('http://localhost:8070/products' + `/products_by_id?id=${productId}&type=single`).then(response => {
            setProduct(response.data[0])
       })

    } , [])


    return (
    <div className = "postPage" style={{width: '100%'  , padding: '3rem 4rem'}}>

        <div className = "row gap-4 " gutter={[16 , 16]}>
            <div className = "col-3 " lg={12} xs={24}>
                <img style={{width: '100%' , height: 300 }} src={Product.photo} className="card-img-top img-fluid" />
            </div>

            <div className = "col-3 " lg={12} xs={24}>
                <h1 onChange={handleChange} name = "productName" value = {Product.productName} >{Product.productName}</h1>
                <p onChange={handleChange} name = "price"  value = {Product.price} className="card-text">{Product.price}</p>
                <p onChange={handleChange} name = "description" value={Product.description} className="card-text">{Product.description}</p>
                <br/>
                <button onClick ={addToCartHandler} className = "btn btn-success">Add To Cart</button>
            </div>

        </div>



    </div>
    )
}

export default DetailProduct;