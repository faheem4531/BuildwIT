import React from "react";
import './styleFooter.css';
import logo from '../../images/logo.svg';
import google from '../../images/Google.svg';
import twitter from '../../images/Twitter.svg';
import fb from '../../images/Facebook.svg';




const Footer = () =>{
    return(
        <div className="footer">

            <div className="footer-content">

                <div className="left-section">
                    <div className="logo-card">
                        <img src={logo}/>
                    </div>
                    <div className="icon-div">
                        <img src={fb}/>
                        <img src={twitter}/>
                        <img src={google}/>
                    </div>
                </div>
                <div className="right-section">

                    <ul className="list-1">
                        <li className="list-heading span">Our Clients</li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                    </ul>

                    <ul>
                        <li className="list-heading">Industries</li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                    </ul>

                    <ul>
                        <li className="list-heading">Products</li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                        <li><a href="#">Wesbite link</a></li>
                    </ul>


                </div>
                
            </div>

            <div className="copyright">Copyright © 2022 BuiltwIT. All rights reserved.</div>
        </div>
    )
}

export default Footer