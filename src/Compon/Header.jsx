
import logo from '../img/logo.png'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { NavHashLink } from 'react-router-hash-link';
import '../css/Header.css'
import React, { useState } from "react";
import 'animate.css';

import { BrowserRouter, NavLink } from "react-router-dom";


function Header() {





  const [toggle, setToggle] = useState(true)


// animation for icon navbar mobile
  const toggleModal = () => {
    setToggle(!toggle);
    console.log(toggle)
    if (toggle) {
      document.getElementById("bar1").classList.add("active")
      document.getElementById("bar2").classList.add("active")
      document.getElementById("bar3").classList.add("active")
      document.getElementById("contactID").classList.remove("contact")
      document.querySelector(".rightBar").classList.add("showMobile")
      // document.querySelector(".rightBar").style.display = ("flex")

    } else {
      document.getElementById("bar1").classList.remove("active")
      document.getElementById("bar2").classList.remove("active")
      document.getElementById("bar3").classList.remove("active")
      document.getElementById("contactID").classList.add("contact")

      document.querySelector(".rightBar").classList.remove("showMobile")
      // document.querySelector(".rightBar").style.display = ("none")
    }

  };


  // const clickHandel = (e)=>{
  // console.log(e.target.classList)
  // console.log("####".repeat(10))
  // document.querySelector(e.target.classList.add("sele"))



  // };



  // const navActive = ()=>{
  // const btnConatiner = document.getElementById("rightBarID")
  // const btns = document.getElementsByClassName("btnH")

  // for(var i = 0;i <btns.length;i++){

  //   btns[i].addEventListener("click",function(){
  // var current = document.getElementsByClassName("active")
  // current[0].className = current[0],className.replace("active");
  // this.className+="active"
  //   })
  // }
  // }


  // for add active link and switch to button user cick on it
  const clickTo = (id) => {
    let hero = document.getElementById(id);
    // Stop Page Reloading
    hero && hero.scrollIntoView();
  }

  return (



    <div className="header" id='Home'>



      <nav>
        <a onClick={e => {
          let hero = document.getElementById("Home");
          e.preventDefault();  // Stop Page Reloading
          hero && hero.scrollIntoView();
        }} >  <img className='animate__zoomIn  animate__animated logoH' src={logo} alt="Pyxel" /> <img /></a>



        <div className="hamburger-menu" onClick={toggleModal} id="btnMobile">
          <div id='bar1' className="bar-top"></div>
          <div id='bar2' className="bar-middle "></div>
          <div id='bar3' className="bar-bottom"></div>
        </div>
        <BrowserRouter>
          <div className="rightBar animate__animated animate__backInDown" id='rightBarID'  >
            <NavLink onClick={() => clickTo("Home")} to="Home"  >Acceuil</NavLink>
            <NavLink onClick={() => clickTo("Projects")} to="Projects" >Projets</NavLink>
            <NavLink onClick={() => clickTo("Services")} to="Services" >Services</NavLink>
            <NavLink onClick={() => clickTo("Contact")} id='contactID' className="contact" to="Contact" >Contactez-nous</NavLink>
            <a className='freebie'  >Freebie</a>


          </div>

        </BrowserRouter>
      </nav>
   
    </div>


  )

}
export default Header;