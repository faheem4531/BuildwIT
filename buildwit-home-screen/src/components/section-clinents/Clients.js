import React from "react";
import './styleClients.css';
import left from '../../images/icon-left.png';
import right from '../../images/icon-right.png';


const Clients = () => {
    return(
        <div className="clients-container">

            <div className="upper-clip"></div>

            <div className="mid-div">
 
            <div className="textbox">
                <h1 className="primary-heading">Our Clients</h1>
                <p className="client-para">With BuildwIT, anyone can generate, visualize and analyze buildings to make better decisions faster. You can easily add your own processes and expertise so you don’t start from square one with each new project.</p>
            </div>
                

            <div className="clients-row">
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 1</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 2</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 3</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 4</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 5</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 6</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 7</span>
                </div>
                <div className="card-div">
                    <div className="client-card"></div>
                    <span>Client 8</span>
                </div>
            </div>
            </div>

            <div className="bottom-clip"></div>

        </div>
    )
}


export default Clients