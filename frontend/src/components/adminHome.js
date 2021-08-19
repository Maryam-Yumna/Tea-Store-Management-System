import React , {Component} from 'react'
import axios from 'axios';
import AdminHeader from './adminHeader';


class adminHome extends Component{
    constructor(props){
        super(props);

    }

 

    render() {
        return (
           <div>

<AdminHeader />
  <div class="row">

<div class="col-sm-2">


  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light"style={{height:"100%" }} >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
     
      <br /><br /><br /><br />
      <span class="fs-4" style={{color:"#298a43" }} >Categories</span>
    </a>
 
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" style={{float:"left" }}  class="nav-link link-dark fs-6" aria-current="page">Home </a>
      </li>
      <li>
        <a href="#" style={{float:"left" }}  class="nav-link link-dark">
          
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" style={{float:"left" }}  class="nav-link link-dark">
         
          Orders
        </a>
      </li>
      <li>
        <a href="#" style={{float:"left" }}  class="nav-link link-dark">
          
          Products
        </a>
      </li>
      <li>
        <a href="#" style={{float:"left" }}  class="nav-link link-dark">
         
          Customers
        </a>
      </li>
    </ul>
    <hr />
   
  </div>
  
</div>


<div class="col-sm-10">

               
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
           
            <img width="100%" height="225" src = "data:image/jpeg;base64,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" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
             <img width="100%" height="225" src = "data:image/jpeg;base64,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" />
          
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
              <img width="100%" height="225" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv-IAsolse1pVeU30foPvL40JWTLO9lTfoA&usqp=CAU" />
          
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
              <img width="100%" height="225" src = "data:image/jpeg;base64,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" />
          
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  </div>
  </div>


  </div>
 



          
        )
      }
    }

export default adminHome ;