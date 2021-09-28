import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import AboutUs from '../AboutUs/AboutUs';
import {Link} from 'react-router-dom';
import SearchBarIcon from 'url:../../../public/Icons/ic_search.svg';
import '../../App.css';

function Home(){

    //Initialize the attributes to retrieve all the products to the home page
    const[products , setProduct] = useState([{
            productName : "",
            price : "",
            description : "",
    }])

    //Initialize the attributes to search a product
    const[searchTerm , setSearchTerm] = useState('')

    //Method 1 of accessing all products
    /*useEffect(() =>{
        fetch("http://localhost:8070/products").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setProduct(jsonRes))
    })*/

    //Method 2 of accessing all products
    useEffect(() =>{
       axios.get('http://localhost:8070/products').then(response => {
            setProduct(response.data);
       })
    })

    return <div className= 'homebgimg'>
     <div className= 'container'>
           <br/> <br/>
           {/*Search function*/}
           <div className="input-group mb-3">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                    name = "searchTerm"
                    onChange = {event =>{
                        setSearchTerm(event.target.value);
                    }}
                />
                <span class="input-group-text" id="basic-addon2">
                    <img src = {SearchBarIcon} alt="" width = "30"/>
                </span>
           </div>

           <br/> <br/>
               <section className="mt-2 ">
                   <div className = "row" >
                   {products.filter((input)=> {//Filter the search bar
                        if(searchTerm == ""){
                            return input;
                        }else if(input.productName.toLowerCase().includes(searchTerm.toLowerCase()) || input.price.includes(searchTerm)){
                            return input;
                        }
                   }).map(product =>
                       <div className = "col-3">
                           <div className="card shadow" >
                             <div >{/*Image of the card*/}
                                <Link to={`/products/${product._id}`}>
                                    <img  style={{width: '100%' , height:300}} src={product.photo} className="card-img-top img-fluid" />
                                </Link>
                             </div>
                             <div className="card-body">
                               <h5 class="fw-bold">{product.productName}</h5><br/>
                               <p className="card-text fst-italic"><label>LKR {product.price}.00</label></p>
                               {/*<p className="card-text">{product.description}</p>*/}
                               <Link to={`/products/${product._id}`} className="btn btn-dark font-size-09 text-light">Read More...</Link>
                             </div>
                           </div><br/>
                       </div>
                   )}
                   </div>
              </section>
                <AboutUs/>
      </div>
      </div>
}

export default Home;