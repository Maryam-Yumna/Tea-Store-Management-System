import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function Footer(){
    return<div>
        <br/><br/>
        <section>
            <div className = 'text-white ' class ='header'>
                <div className ="row">
                    <div className = "col"><br/><br/>
                        <Link to ="/" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                               SerineTea
                        </Link>
                    </div>

                    <div className ="col"><br/><br/>
                        <Link to ="/" className = 'fw-bolder nav-link text-white  fs-5 '>
                               MAIN MENU
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Home
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Categories
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               About Us
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Contact Us
                        </Link>
                    </div>
                    <div className ="col"><br/><br/>
                        <Link to ="/" className = 'fw-bolder nav-link text-white fs-5 '>
                               FIND US ON
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Facebook
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Twitter
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>

}

export default Footer;