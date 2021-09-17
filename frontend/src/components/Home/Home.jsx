import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import AboutUs from '../AboutUs/AboutUs';
import {Link} from 'react-router-dom';
import Search from '../SearchProductClientSide/Search';

function Home(){

    //Retrieve all products to the home page
    const[inputs , setInput] = useState([{
            productName : "",
            price : "",
            description : "",
    }])

    useEffect(() =>{
        fetch("http://localhost:8070/products").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })

    //Implementing the search feature
    const[searchTerms , setSearchTerms] = useState("")

    const updateSearchTerms = (newSearchTerm) =>{
        setSearchTerms(newSearchTerm);

        console.log(newSearchTerm);
    }

    return <div className= 'container'>
           <br/> <br/>
           <div>
                <Search
                    refreshFunction = {updateSearchTerms}
                />
           </div>
           <br/> <br/>
               <section className="mt-2 ">
                   <div className = "row" >
                   {inputs.map(input =>
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