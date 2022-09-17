import React from 'react'
import './Section3.css';
import Button from "../button/Button";
import video2 from "../../images/short2.mp4";


const SectionThird= () => {
    return (
   
        <div className='section-3'> 
<div className='blank'>

</div>
            <div className='section-3-content'>
                <div className='primary-textbox'>
                    <div className='primary-heading'><span>How it Works</span></div>
                    <div className='para-div'>
                        <p className='primary-para'>With BuildwIT, anyone can generate, visualize and analyze buildings to make better decisions 
                        faster. You can easily add your own processes and expertise so you don’t start from square one with each new project.</p>
                        <p className='primary-para'>Quickly generate proposals by combining different building systems that intelligently interact. 
                        Include analysis and simulation tools created by industry experts to predict and drive performance. Take designs from concept to construction, system by system.</p>
                    </div>
                </div>
                <div className='section-3-video-div'>
                    <video className='section-3-video' controls loop src={video2}/>
                    <video className='section-3-video' controls loop src={video2}/>
                    <video className='section-3-video' controls loop src={video2}/>
                </div>

                   <div><Button buttonTitle='Get Started'/></div> 
 
                <div className='clip-background'></div>
          
            </div>





        </div> 
 

 )
}

export default SectionThird