import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import TeaBack from 'url:../../../public/images/TeaBack.jpg';
import cartIcon from 'url:../../../public/Icons/ic_cart.svg';
import loginIcon from 'url:../../../public/Icons/ic_login.svg';
import logoutIcon from 'url:../../../public/Icons/ic_logout.svg';
import signupIcon from 'url:../../../public/Icons/ic_signup.svg';
import userAccount from 'url:../../../public/Icons/ic_user_account.svg';

function Header(props){
    return<div>
        <section>
            <div className = 'text-white ' class ='header'>
                <div >
                    <div className = 'row '>
                        {/*Cover page*/}
                        <div className = 'me-auto col' >
                            <Link to ="/" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                                <img src= {TeaBack} className="img-fluid" style={{width: '100%'  ,backgroundSize: 'cover'}}/>
                            </Link>
                        </div>

                        <div class = "rightMenu">
                            <ul>
                                {/* <li class="nav-item navbar-brand "><Link to = "/login">Login</Link></li>
                                <li class="nav-item navbar-brand "><Link to = "/register">Register</Link></li> */}
                                {props.logged ==="true"?(<div>{/*When the user logged in*/}
                                    <li class="nav-item navbar-brand ">
                                        <Link to = "/myAccount">
                                            <img src = {userAccount} alt="" width = "20"/> Profile
                                        </Link>
                                    </li>
                                    <li class="nav-item navbar-brand " onClick={props.logout}>
                                        <Link to = "/">
                                            <img src = {logoutIcon} alt="" width = "20"/> Logout
                                        </Link>
                                    </li>
                                    <li class="nav-item navbar-brand ">
                                        <Link to = "/cart">
                                            <img src = {cartIcon} alt="" width = "20"/>  My Cart
                                        </Link>
                                    </li>
                                </div>):
                                <div>{/*When the user logged out*/}
                                    <li class="nav-item navbar-brand ">
                                        <Link to = "/login">
                                            <img src = {loginIcon} alt="" width = "20"/> Login
                                        </Link>
                                    </li>
                                    <li class="nav-item navbar-brand ">
                                        <Link to = "/register">
                                            <img src = {signupIcon} alt="" width = "20"/> Register
                                        </Link>
                                    </li>
                                    <li class="nav-item navbar-brand ">
                                        <Link to = "/login">
                                            <img src = {cartIcon} alt="" width = "20"/>  My Cart
                                        </Link>
                                    </li>
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