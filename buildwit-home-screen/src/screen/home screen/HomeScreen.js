import React from "react";
import './styleHomeScreen.css';
import SectionHeader from "../../components/section1/SectionHeader";
import SectionSecond from "../../components/section2/SectionSecond";
import SectionThird from "../../components/section3/SectionThird";
import SectionForth from "../../components/section4/SectionForth";
import SectionForm from "../../components/sectionForm/SectionForm";
import Clients from "../../components/section-clinents/Clients";
import Footer from "../../components/footer/Footer";


const HomeScreen = () => {
  return (
    <div className="screen-body">
       <SectionHeader/>
       <SectionSecond/>
       <SectionThird/>
       <SectionForth/>
       <SectionForm/>
       <Clients/>
       <Footer/>
    </div>
  )
}

export default HomeScreen