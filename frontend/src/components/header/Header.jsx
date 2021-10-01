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
                                    <li className="nav-item navbar-brand " data-bs-toggle="modal" data-bs-target="#exampleModal"><Link to = "/">Logout</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/cart">My Cart</Link></li>
                                </div>):
                                <div>
                                    <li className="nav-item navbar-brand "><Link to = "/login">Login</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/register">Register</Link></li>
                                    <li className="nav-item navbar-brand "><Link to = "/cart">My Cart</Link></li>
                                </div>}
                                
                            </ul>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-sm">
                                <div className="modal-content">
                                <div className="modal-header" style={{backgroundColor: "#f54e42", color: "white"}}>
                                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" id="exclamation-triangle-fill" fill="white" viewBox="0 0 16 16">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <h5 className="modal-title" id="exampleModalLabel">Do you want to logout?</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" style={{backgroundColor: "#f54e42", color: "white"}} onClick={props.logout} >Yes, Logout</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

}

export default Header;