import s1 from '../img/s1.png'
import s2 from '../img/s2.png'
import s3 from '../img/s3.png'
import s4 from '../img/s4.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../css/Services.css'
import { useEffect } from 'react';

function Services() {
  useEffect(()=>{

    AOS.init({duration:2000});
  },[])
    return (
        <div className='services'   id='Home'>
        <div className="image-grid">

        <div className="image a" data-aos="fade-up">
     
        <img className="image__img" src={s1} alt="Bricks"></img>
        <div className="image__overlay image__overlay--primary">
            <div className="image__title">Branding</div>
      
        </div>
    
      </div>


       
        <div className="image b" data-aos="fade-up">
   
        <img className="image__img" src={s2} alt="Bricks"></img>
        <div className="image__overlay image__overlay--primary">
            <div className="image__title">ui/ux design</div>
      
        </div>
   
      </div>

       
        <div className="image c" data-aos="fade-up">
       
        <img className="image__img" src={s3} alt="Bricks"></img>
        <div className="image__overlay image__overlay--primary">
            <div className="image__title">video photographie</div>
      
        </div>
   
      </div>
      


      
        <div className="image d" data-aos="fade-up">
      
        <img className="image__img" src={s4} alt="Bricks"></img>
        <div className="image__overlay image__overlay--primary">
            <div className="image__title">strategie</div>
      
        </div>
        </div>
    
      </div>
        </div>

      

    )

}

export default Services;