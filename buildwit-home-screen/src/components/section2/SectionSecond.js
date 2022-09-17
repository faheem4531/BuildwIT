import React from 'react'
import './Section2.css';
import Button from "../button/Button";
import image from "../../images/sec-2-img.PNG";


const SectionSecond = () => {
  return (
 
      <div className='section-2'>     
        <div className='section-2-content'>
        <div className='section-2-content-text'>
          <div className='section-2-content-text-heading'><span>About Us</span></div>
          
          <div className='section-2-content-text-para-div'>
            <p className='s2-p-1'>With BuildwIT, anyone can generate, visualize and analyze buildings to make better decisions 
              faster. You can easily add your own processes and expertise so you don’t start from square one with each new project.</p>
            <p>Quickly generate proposals by combining different building systems that intelligently interact. 
              Include analysis and simulation tools created by industry experts to predict and drive performance. Take designs from concept to construction, system by system.</p>
          </div>
          <div className="section-2-content-text-btn">
          <Button buttonTitle='Get Started' />
          </div>
        </div>

        
        <img className='section-2-content-img' src={image} /> 
        
      </div>
        </div> 
 

  )
}

export default SectionSecond
