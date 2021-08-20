import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Header(){
    return<div>

        <section>
            <div className = 'text-white ' class ='header'>
                <div className ='container'>
                    <div className = 'row '>
                        <div className = 'me-auto col' >
                            <br/>
                                <Link to ="/" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                                    SereniTea
                                </Link>
                        </div>

                        <div class = "rightMenu">
                            <ul>
                                <li class="nav-item navbar-brand "><a href = "#">Login</a></li>
                                <li class="nav-item navbar-brand "><a href = "#">Register</a></li>
                                <li class="nav-item navbar-brand "><a href = "/cart">My Cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>

}

export default Header;