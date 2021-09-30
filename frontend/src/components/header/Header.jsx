import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import TeaBack from 'url:../../../public/images/TeaBack.jpg';

function Header(props){
    return<div>
        <section>
            <div className = 'text-white ' className ='header'>
                <div >
                    <div className = 'row '>
                        <div className = 'me-auto col' >
                            <Link to ="/" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                                <img src= {TeaBack} className="img-fluid" style={{width: '100%'  ,backgroundSize: 'cover'}}/>
                            </Link>
                        </div>

                        <div className = "rightMenu">
                            <ul>
                                {/* <li className="nav-item navbar-brand "><Link to = "/login">Login</Link></li>
                                <li className="nav-item navbar-brand "><Link to = "/register">Register</Link></li> */}
                                {props.logged ==="true"?(<div>
                                    <li className="nav-item navbar-brand "><Link to = "/myAccount">My Account</Link></li>
                                    <li className="nav-item navbar-brand " onClick={props.logout}><Link to = "/">Logout</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/cart">My Cart</Link></li>
                                </div>):
                                <div>
                                    <li className="nav-item navbar-brand "><Link to = "/login">Login</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/register">Register</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/cart">My Cart</Link></li>
                                </div>}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

}

export default Header;