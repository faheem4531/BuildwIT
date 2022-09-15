import React from "react";
import './Button.css';


const Button = ({buttonTitle}) => {
    return (
        <div>
            <div className="btn-div">
                <button className="btn-main">{buttonTitle}</button>
            </div>
       
     </div>
    )
}
export default Button