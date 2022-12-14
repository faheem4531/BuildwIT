import React from "react";
import './Form.css';
import Button from "../button/Button";
import imageb from '../../images/sec-5-img.PNG';

 


const SectionForm = () => {
    return(
        <div className="section-form">

            <div className="section-form-card">
              
                    <h1 className="form-heading">Inquire your Interest</h1>
                    <div className="input-section top-space">
                        <input className=" inputs margin-right" type="text" placeholder="Full Name" />
                        <input className="inputs" type="text" placeholder="Username" />
                    </div>
                    <div className="input-section">
                        <input className="inputs margin-right" type="email" placeholder="Email Address" />
                        <input className="inputs" type="text" placeholder="Country" />
                    </div>
                    <textarea className="textarea"></textarea>
                    <Button buttonTitle='Submit'/>
                

            </div>  <img className="sec-5-img" src={imageb}/>
             {/* <div className="image-div">
               </div> */}
            </div> 
    )
}

export default SectionForm