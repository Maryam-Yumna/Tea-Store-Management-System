import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import TeaBack from 'url:../../../public/images/TeaBack.jpg';

function Header(){
    return<div>
        <section>
            <div className = 'text-white ' class ='header'>
                <div >
                    <div className = 'row '>
                        <div className = 'me-auto col' >
                            <Link to ="/" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                                <img src= {TeaBack} className="img-fluid" style={{width: '100%' , height:400 ,backgroundSize: 'cover'}}/>
                            </Link>
                        </div>

                        <div class = "rightMenu">
                            <ul>
                                <li class="nav-item navbar-brand "><Link to = "/login">Login</Link></li>
                                <li class="nav-item navbar-brand "><Link to = "/register">Register</Link></li>
                                <li class="nav-item navbar-brand "><Link to = "/cart">My Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

}

export default Header;