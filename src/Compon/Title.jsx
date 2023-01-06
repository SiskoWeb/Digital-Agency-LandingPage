import star from '../img/star.png'
import starE from '../img/starE.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../css/Title.css'
import { useEffect } from 'react';

function Title(props) {
    useEffect(()=>{

        AOS.init({duration:2000});
      },[])

      /* Built by Yassine.info */
    return (
        
        <div className="title" id={props.claso} data-aos="fade-up">
           
        
        <div className="starts">
            <img src={starE} alt="pyxel digital marketing agency" srcSet=""></img>
            <img  src={star} alt="pyxel digital marketing agency" srcSet=""></img>
            <img src={starE} alt="pyxel digital marketing agency" srcSet=""></img>
        </div>
        {props.title}
    </div>
      

    )

}

export default Title;