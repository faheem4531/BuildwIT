import React from "react";
import './styleHomeScreen.css';
import SectionHeader from "../../components/section1/SectionHeader";
import SectionSecond from "../../components/section2/SectionSecond";
import SectionThird from "../../components/section3/SectionThird";



const HomeScreen = () => {
  return (
    <div className="screen-body">
       <div><SectionHeader/></div>
       <div><SectionSecond/></div>
       <div><SectionThird/></div>
    </div>
  )
}

export default HomeScreen