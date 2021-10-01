import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import facebook from 'url:../../../public/Icons/ic_facebook.svg';
import twitter from 'url:../../../public/Icons/ic_twitter.svg';
import instagram from 'url:../../../public/Icons/ic_instagram.svg';

function Footer(){
    return<div>

        <section>
            <div className = 'text-white ' class ='header'>
                <div className ="row">
                    {/*Company Name itself*/}
                    <div className = "col"><br/><br/>
                        <a href ="#" className = 'fw-bold nav-link text-white fst-italic fs-1 '>
                               SerineTea
                        </a>
                    </div>

                    <div className ="col"><br/><br/>
                        <label  className = 'fw-bolder nav-link text-white  fs-5 '>
                               MAIN MENU
                        </label>
                        <a href ="#" className = 'nav-link text-white fst-italic fs-5 '>
                               Home
                        </a>
                        <a href ="#" className = 'nav-link text-white fst-italic fs-5 '>
                               Categories
                        </a>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               About Us
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               Contact Us
                        </Link>
                    </div>
                    <div className ="col"><br/><br/>
                        {/*Social Media*/}
                        <label className = 'fw-bolder nav-link text-white fs-5 '>
                               FIND US ON
                        </label>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               <img src = {facebook} alt="" width = "16"/> Facebook
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               <img src = {twitter} alt="" width = "16"/> Twitter
                        </Link>
                        <Link to ="/" className = 'nav-link text-white fst-italic fs-5 '>
                               <img src = {instagram} alt="" width = "16"/> Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>

}

export default Footer;