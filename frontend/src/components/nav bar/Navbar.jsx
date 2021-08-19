import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-opacity-75">
             <div className="container-fluid">
               <Link className="navbar-brand" to="/">Home</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/*Categories drop down*/}
                   <li className="nav-item dropdown">
                     <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Categories
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                       <li><a className="dropdown-item" href="#">Category 1</a></li>
                       <li><a className="dropdown-item" href="#">Category 2</a></li>
                       <li><a className="dropdown-item" href="#">Category 3</a></li>
                     </ul>
                   </li>
                    {/*About Us*/}
                   <li className="nav-item">
                      <Link className="navbar-brand" aria-current="page" to="/">
                        About Us
                      </Link>
                   </li>
                   {/*Contact Us*/}
                   <li className="nav-item">
                      <Link className="navbar-brand" aria-current="page" to="/">
                        Contact Us
                      </Link>
                   </li>
                 </ul>
                 <form className="d-flex">
                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                   <button className="btn btn-outline-secondary text-white" type="submit">Search</button>
                 </form>
               </div>
             </div>
           </nav>

}

export default Navbar;

