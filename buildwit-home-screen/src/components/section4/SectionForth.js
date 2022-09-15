import React from "react";
import './Section4.css';
import '../section3/Section3.css';
import Button from "../button/Button";
import image1 from "../../images/sample-project-1.svg";
import image2 from "../../images/sample-project-2.svg";
import image3 from "../../images/sample-project-3.svg";
import image4 from "../../images/sample-project-4.svg";


const sectionForth = () => {
    return(
        <div className="section-4">
            <div className="section-4-context">
                <div className="primary-textbox">
                    <h1 className="primary-heading">Sample Projects</h1>  
                    <div>
                        <p className='primary-para'>With BuildwIT, anyone can generate, visualize and analyze buildings to make better decisions 
                        faster. You can easily add your own processes and expertise so you don’t start from square one with each new project.</p>
                        <p className='primary-para'>Quickly generate proposals by combining different building systems that intelligently interact. 
                        Include analysis and simulation tools created by industry experts to predict and drive performance. Take designs from concept to construction, system by system.</p>
                    </div>
                </div>
                <div className="section-4-img-div">
                    <div className="img-1-box img-box">
                        <a  href="#">
                        <img className="section-4-img" src={image1}/>
                        </a>
                        <div class="img-dis"> Modern City Project</div>
                    </div>
                    
                    <div className="img-box">
                        <a  href="#">
                        <img className="section-4-img" src={image2}/>
                        </a>
                        <div class="img-dis"> City Project</div>
                    </div>     

                    <div className="img-box">
                        <a  href="#">
                        <img className="section-4-img" src={image3}/>
                        </a>
                        <div class="img-dis"> Urban Project</div>
                    </div>    

                    <div className="img-box">
                        <a  href="#">
                        <img className="section-4-img" src={image4}/>
                        </a>
                        <div class="img-dis"> Downtown Project</div>
                    </div>         

                </div>
                <Button buttonTitle='Discover all Projects'/>
            </div>
        </div>
    )
}
   
   


export default sectionForth