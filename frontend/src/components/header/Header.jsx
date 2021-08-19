import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Header(){
    return<div>

        <section>
            <div className = 'text-white ' class ='header'>
                <div className ='container'>
                    <div className = 'row '>
                        <div className = 'mr-auto col' >
                            <br/>
                            <h1 >
                                <Link to ="/" className = 'nav-link text-white'>SereniTea</Link>
                            </h1>
                        </div>
                        <div class = "rightMenu">
                            <ul>
                                <li class="nav-item navbar-brand"><a href = "#">Login</a></li>
                                <li class="nav-item navbar-brand"><a href = "#">Register</a></li>
                                <li class="nav-item navbar-brand"><a href = "/cart">My Cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>

}

export default Header;