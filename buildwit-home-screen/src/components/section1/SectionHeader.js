import React from "react";
import './SectionHeader.css';
import SingleButton from "../singleButton/SingleButton";
import Button from "../button/Button";
import logo from "../../images/logo.svg";



const SectionHeader = () => {
    return (
        <div className="section-1">
        
        <div className="section-1-header">
        <img className="section-1-logo-img"  src={logo}/>
        <div className="section-1-list-div">
            <ul className="section-1-list-ul">
                <li className="section-1-list"><a href="#" className="section-1-link">How it Works</a></li>
                <li className="section-1-list"><a href="#" className="section-1-link">Pricing</a></li>
                <li className="section-1-list"><a href="#" className="section-1-link">Resources</a></li>
                <li className="section-1-list"><a href="#" className="section-1-link">About</a></li>
            </ul>
        </div>
        <div className="section-1-btn-div">
            <SingleButton/> 
             <Button/>
        </div>

        </div>
        





       </div>
    )
}
export default SectionHeader