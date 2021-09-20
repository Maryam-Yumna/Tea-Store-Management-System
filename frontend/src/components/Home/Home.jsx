import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import AboutUs from '../AboutUs/AboutUs';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

toast.configure()
function Home(){

    //Retrieve all products to the home page
    const[inputs , setInput] = useState([{
            productName : "",
            price : "",
            description : "",
    }])

    const[searchTerm , setSearchTerm] = useState('')

    //Method 1 of accessing all products
    /*useEffect(() =>{
        fetch("http://localhost:8070/products").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })*/

    //Method 2 of accessing all products
    useEffect(() =>{
       axios.get('http://localhost:8070/products').then(response => {
            setInput(response.data);
       })
    })




    return <div className= 'container'>
           <br/> <br/>
           <div>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                    name = "searchTerm"
                    onChange = {event =>{
                        setSearchTerm(event.target.value);
                    }}
                    //onChange = {handleTextSearch}
                />
           </div>
           <br/> <br/>
               <section className="mt-2 ">
                   <div className = "row" >
                   {inputs.filter((input)=> {
                        if(searchTerm == ""){
                            return input;
                        }else if(input.productName.toLowerCase().includes(searchTerm.toLowerCase()) || input.price.includes(searchTerm)){
                            return input;
                        }
                   }).map(input =>
                       <div className = "col-3">
                           <div className="card shadow" >
                             <div >
                                <img  style={{width: '100%' , height:300}} src={input.photo} className="card-img-top img-fluid" />
                             </div>
                             <div className="card-body">
                               <h5 class="fw-bold">{input.productName}</h5><br/>
                               <p className="card-text fst-italic"><label>LKR {input.price}.00</label></p>
                               {/*<p className="card-text">{input.description}</p>*/}
                               <Link to={`/products/${input._id}`} className="btn btn-dark font-size-09 text-light">Read More...</Link>
                             </div>
                           </div><br/>
                       </div>
                   )}
                   </div>
              </section>
                <AboutUs/>
      </div>
}

export default Home;