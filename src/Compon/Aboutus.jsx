import Vision from './Vision'
import Agency from './Agency'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../css/Title.css'
import Team from './Team'

// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { NavHashLink } from 'react-router-hash-link';
import '../css/Aboutus.css'
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter ,Route,NavLink,} from "react-router-dom";
// import { NavHashLink as Link } from 'react-router-hash-link';
import { Routes } from 'react-router-dom';

function Aboutus() {
    useEffect(()=>{

        AOS.init({duration:2000});
      },[])
    return (
    
     
  
            <div className="Aboutus" id='Home' data-aos="fade-up">
         
         
            <BrowserRouter>
                <nav>
                  

                   
                     

                        <NavLink to="/Team" >La team <div className='underNv '></div></NavLink>
                        <NavLink to="agence" >L’agence<div className='underNv'></div></NavLink>
                        <NavLink to="vision" >Notre vision<div className='underNv'></div></NavLink>
                        
                      


                  
                </nav>

                <div className='headerbar'>
            
                </div>
<Routes>
<Route path='*' element={<Team/>}/>
<Route path='/Team' element={<Team/>}/>
<Route path='/agence' element={<Agency/>}/>
<Route path='/vision' element={<Vision/>}/>

</Routes>
               
              
                </BrowserRouter>
             
            </div>
           

    )

}
export default Aboutus;