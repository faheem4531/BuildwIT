import React from "react";
import './SectionHeader.css';
import SingleButton from "../singleButton/SingleButton";
import Button from "../button/Button";
import logo from "../../images/logo.svg";
import video1 from "../../images/short-clip.mp4";


const SectionHeader = () => {
    return (
        <div className="section-1">

            <div className="section-1-header">

                <div className="logo-list-div">
                    <img className="section-1-logo-img" src={logo} />
                    <div className="section-1-list-div">
                        <ul className="section-1-list-ul">
                            <li className="section-1-list list-1"><a href="#" className="section-1-link">How it Works</a></li>
                            <li className="section-1-list"><a href="#" className="section-1-link">Pricing</a></li>
                            <li className="section-1-list"><a href="#" className="section-1-link">Resources</a></li>
                            <li className="section-1-list"><a href="#" className="section-1-link">About</a></li>
                        </ul>
                    </div>
                </div>

                <div className="section-1-btn-div">
                    <SingleButton />
                    <Button buttonTitle='Login/Sign Up' />
                </div>

            </div>

            <div className="section-1-content">

                <div className="section-1-content-video-div">
                    <video autoPlay loop muted className="section-1-content-video" src={video1} />
                </div>


                <div className="section-1-content-textbox">
                    <h1 className="section-1-content-heading ">
                        <span className="text-1">Buildw</span>
                        <span className="text-2">IT</span>
                    </h1>
                    <div className="section-1-content-para-div" >
                        <p className="section-1-content-para">We allow Architects, Atrists & Enthusiats to model, visualize and analyze buildings.</p>
                        <p className="section-1-content-para">Powered by World leading technologies to bring interative enviroment for everyone.</p>
                    </div>
                    <div className="btn-width"><Button buttonTitle='Create a Free Account' /></div>
                </div>



            </div>






        </div>
    )
}
export default SectionHeader