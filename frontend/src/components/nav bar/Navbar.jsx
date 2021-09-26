import React from 'react';
import {Link} from 'react-router-dom';
import homeIcon from 'url:../../../public/Icons/ic_home.svg';

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-opacity-75">
             <div className="container-fluid">
                {/*Home*/}
               <Link className="navbar-brand " to="/" >
                    <img src = {homeIcon} alt="" width = "34"/>   |
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/*Categories drop down*/}
                   <li className="nav-item dropdown">
                     <Link  className="navbar-brand dropdown-toggle " to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Categories
                     </Link>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                       <li><Link className="dropdown-item" to="/">Black Tea</Link></li>
                       <li><Link className="dropdown-item" to="/">Green Tea</Link></li>
                       <li><Link className="dropdown-item" to="/">Loosen Tea Leaf</Link></li>
                       <li><Link className="dropdown-item" to="/">Flavoured Tea</Link></li>
                     </ul>
                   </li>
                    {/*About Us*/}
                   <li  className="nav-item">
                      <Link className="navbar-brand " aria-current="page" to="/">
                        | About Us |
                      </Link>
                   </li>
                   {/*Contact Us*/}
                   <li className="nav-item">
                      <Link  className="navbar-brand " aria-current="page" to="/">
                        Contact Us
                      </Link>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>

}

export default Navbar;

