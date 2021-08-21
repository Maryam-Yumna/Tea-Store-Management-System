import React , {useState} from 'react';
import axios from 'axios';

function AddProductForm(){

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

    function handleClick(event){
        event.preventDefault();

        const newProduct = {
            productName : input.productName,
            price : input.price,
            description : input.description
        }

        axios.post('http://localhost:8070/products' , newProduct); //passing the newNote to the url given within single quotes

        setInput({
            productName : "",
            price : "",
            description : ""
        });

    }

    return <div className = "container">
        <h1>add product form</h1>
        <form>
            <div className = "form-group">
                <input onChange={handleChange} name = "productName"  value = {input.productName} autocomplete = "off" className = "form-control" placeholder = "product name"/>
            </div>
            <br/>

            <div className = "form-group">
                <input onChange={handleChange} name = "price"  value = {input.price} autocomplete = "off" className = "form-control" placeholder = "price"/>
            </div>
            <br/>

            <div className = "form-group">
                <textarea onChange={handleChange} name = "description" value={input.description} autocomplete = "off" className = "form-control" placeholder = "description"/>
            </div>
            <br/>

            <button onClick={handleClick} className = "btn btn-lg btn-info">ADD product</button>
        </form>
    </div>
}

export default AddProductForm;