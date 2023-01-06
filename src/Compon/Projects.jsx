import s1 from '../img/p1.png'
import s2 from '../img/p2.png'
import s3 from '../img/p4.png'
import s4 from '../img/p3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../css/Projects.css'
import { useEffect } from 'react';
  /* Built by Yassine.info */

function Projects() {

  useEffect(()=>{

    AOS.init({duration:1000});
  },[])
    return (
 
       <div className='Projects' id='projects'> 
       
       
  
       <div className="image-grid" >

       <div className="image a " data-aos="fade-up" >
    
       <img className="image__img" src={s1} alt="Bricks" loading="lazy"></img>
   
     </div>


      
       <div className="image b" data-aos="fade-up" >
  
       <img className="image__img" src={s2} alt="Bricks" loading="lazy"></img>

     </div>

      
       <div className="image c" data-aos="fade-up" >
      
       <img className="image__img" src={s3} alt="Bricks" loading="lazy"></img>
    
  
     </div>
     


     
       <div className="image d" data-aos="fade-up" >
     
       <img className="image__img" src={s4} alt="Bricks" loading="lazy"></img>

       </div>
   
     </div>
   

       
       </div>
       

      

    )

}

export default Projects;