import React , {useEffect , useState} from 'react';
import axios from "axios";
import CardImage from 'url:../../../public/images/cardImage.jpg';
import AboutUs from '../AboutUs/AboutUs';
import {Link} from 'react-router-dom';
import Search from '../SearchProductClientSide/Search';
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

///////////////////////////////////////////////////////////////////////////////////////////
    //Implementing the search feature
    /*const[searchTerms , setSearchTerms] = useState("")

    const updateSearchTerms = (newSearchTerm) =>{
        setSearchTerms(newSearchTerm);
        console.log(newSearchTerm);

        const variable = {
            skip : 0,
            limit : Limit,
            filters : Filters,
            searchTerm : newSearchTerm
        }

        setSkip(0);
        setSearchTerms(newSearchTerm)
        //getProducts(variable)

        axios.get('http://localhost:8070/products').then(response => {
            setInput(response.data)
        })

    }*/
    /////////////////////////////////////////////////////////////////////

    /*function filterContent(inputs , searchTerm){
        toast.warn(searchTerm , {position: toast.POSITION.TOP_CENTER});
        const result = inputs.filter((input)=>input.productName.includes(searchTerm));
        setInput({
            inputs:result
        });//----------------------------
    }

    //function handleTextSearch(event){
    const handleTextSearch = (event) => {
        const searchTerm = event.currentTarget.value;

        axios.get('http://localhost:8070/products').then(response => {
            if(response.data.success){
                filterContent(response.data.inputs , searchTerm);
                toast.success(searchTerm , {position: toast.POSITION.TOP_CENTER});
                //setInput(response.data);
            }
        })

        console.log(event.currentTarget.value);

    }*/


    return <div className= 'container'>
           <br/> <br/>
           <div>
                {/*<Search
                    //Update search data into the parent component
                    //refreshFunction = {updateSearchTerms}
                />*/}
           </div>
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
               <section className="mt-2 ">
                   <div className = "row" >
                   {inputs.filter((input)=> {
                        if(searchTerm == ""){
                            return input;
                        }else if(input.productName.toLowerCase().includes(searchTerm.toLowerCase())){
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