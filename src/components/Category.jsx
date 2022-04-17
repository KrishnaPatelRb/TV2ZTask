import React, { useRef} from "react"
import { useNavigate } from "react-router-dom"
import krishna from "../images/krishna.jpg"
import Revolution from "../images/Revolution.jpeg"
import AreaQ from "../images/AreaQ.jpeg"
import ChristmasStory from "../images/ChristmasStory.jpeg"
import Einstein from "../images/Einstein.jpeg"
import Fighter from "../images/Fighter.jpeg"
import FirstDog from "../images/FirstDog.jpeg"
import Hellsgate from "../images/Hellsgate.jpeg"
import Medici from "../images/Medici.jpeg"
import Modus from "../images/Modus.jpeg"
import Picnic from "../images/Picnic.jpeg"
import WolfCreek from "../images/WolfCreek.jpeg"


export default function Category(){
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const toNavigate=useNavigate()

    const slide1 = (scrollOffset) => {
        ref1.current.scrollLeft += scrollOffset;
      };

      const slide2 = (scrollOffset) => {
        ref2.current.scrollLeft += scrollOffset;
      };

      const slide3 = (scrollOffset) => {
        ref3.current.scrollLeft += scrollOffset;
      };
    return (<>
      <div className="categoryHeader">
          <div className="leftHeader">
              <h1>TV2Z</h1>
              <p>Movies</p>
              <p>Series</p>
              <p>Podcasts</p>
              <p>Radio</p>
          </div>
          <div className="rightHeader">
                <svg  className="search" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 19L14.65 14.65" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img className="userImage" src={krishna} alt="User" height={40}  width={40}/>
                <select className="userName">
                    <option value="Joan doe">Joan doe</option>
                </select>
                
          </div>
      </div>
      
      <p className="catogory-name">Family</p>
      <div className="slide-container">
         
         <svg className="arrow"  id="slider-left" onClick={()=>{
             slide1(-120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.8235 34.1765L17.2505 34.6047V34V32.3333V32.2296L17.177 32.1563L2.9819 18L17.177 3.84368L17.2505 3.77042V3.66666V2V1.3953L16.8235 1.82346L1.61683 17.071L0.828461 17.8186L0.637173 18L0.828461 18.1814L1.61681 18.929L16.8235 34.1765Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>
          
         <section className="conatainer" id="slider" ref={ref1} >
             
                <img className="MovieImage" height="135px" width="290px" src={Revolution} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={AreaQ} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={ChristmasStory} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Einstein} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Revolution} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={AreaQ} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={ChristmasStory} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Einstein} alt="" />
             
         </section>
         
         
         <svg className="arrow" id="slider-right" onClick={()=>{
             slide1(120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.17701 1.82346L0.75 1.3953V2V3.66667V3.77043L0.823465 3.84369L15.0186 18L0.823465 32.1563L0.75 32.2296V32.3333V34V34.6047L1.17701 34.1765L16.3836 18.929L17.172 18.1814L17.3633 18L17.172 17.8186L16.3837 17.071L1.17701 1.82346Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>

         
      </div>

      <p className="catogory-name">Action</p>
      <div className="slide-container">
         <svg className="arrow"  id="slider-left" onClick={()=>{
             slide2(-120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.8235 34.1765L17.2505 34.6047V34V32.3333V32.2296L17.177 32.1563L2.9819 18L17.177 3.84368L17.2505 3.77042V3.66666V2V1.3953L16.8235 1.82346L1.61683 17.071L0.828461 17.8186L0.637173 18L0.828461 18.1814L1.61681 18.929L16.8235 34.1765Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>
         
         <section className="conatainer" id="slider" ref={ref2} >
             
                <img className="MovieImage" height="135px" width="290px" src={Fighter} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={FirstDog} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Hellsgate} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Medici} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Revolution} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={AreaQ} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={ChristmasStory} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Einstein} alt="" />
             
         </section>
         
         <svg className="arrow" id="slider-right" onClick={()=>{
             slide2(120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.17701 1.82346L0.75 1.3953V2V3.66667V3.77043L0.823465 3.84369L15.0186 18L0.823465 32.1563L0.75 32.2296V32.3333V34V34.6047L1.17701 34.1765L16.3836 18.929L17.172 18.1814L17.3633 18L17.172 17.8186L16.3837 17.071L1.17701 1.82346Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>

      </div>
      <p className="catogory-name">Adventure</p>
      <div className="slide-container">
         <svg className="arrow"  id="slider-left" onClick={()=>{
             slide3(-120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.8235 34.1765L17.2505 34.6047V34V32.3333V32.2296L17.177 32.1563L2.9819 18L17.177 3.84368L17.2505 3.77042V3.66666V2V1.3953L16.8235 1.82346L1.61683 17.071L0.828461 17.8186L0.637173 18L0.828461 18.1814L1.61681 18.929L16.8235 34.1765Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>
         <section className="conatainer" id="slider" ref={ref3} >
             
                <img className="MovieImage" height="135px" width="290px" src={Modus} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Picnic} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={WolfCreek} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Einstein} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Revolution} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={AreaQ} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={ChristmasStory} alt="" />
                <img className="MovieImage" height="135px" width="290px" src={Einstein} alt="" />
             
         </section>
         
         <svg className="arrow" id="slider-right" onClick={()=>{
             slide3(120)
         }} width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.17701 1.82346L0.75 1.3953V2V3.66667V3.77043L0.823465 3.84369L15.0186 18L0.823465 32.1563L0.75 32.2296V32.3333V34V34.6047L1.17701 34.1765L16.3836 18.929L17.172 18.1814L17.3633 18L17.172 17.8186L16.3837 17.071L1.17701 1.82346Z" fill="white" stroke="white" stroke-width="0.5"/>
         </svg>

      </div>
      <div className="footer" >
         <p className="footer-text">2020 WT TV2Z. All rights reserved.</p>
      </div>
    </>)
}