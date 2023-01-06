
import 'animate.css';

import '../css/team.css'

import t1 from '../img/ayoub.svg'
import t2 from '../img/basma.svg'
import t3 from '../img/ahmed.svg'

function team(){

 
    return (
      <div className='team ' >
<Ahmed/>
<Basma/>
<Ayoub/>
      </div>
    )
 
}

function Ayoub(){

 
    return (
   
      <div className="image a animate__animated animate__bounceInLeft" >
     
      <img className="image__img" src={t2} alt="Bricks" loading="lazy"></img>
      <div className="titles">
          <div className="image__title">Ayoub</div>
          <div className="image__p">Graphic et Motion<br></br> designer</div>
    
      </div>
  
    </div>
    
    )
 
}

function Ahmed(){

 
    return (
        <div className="image b animate__animated animate__bounceInLeft" >
     
      <img className="image__img " src={t3} alt="Bricks" loading="lazy"></img>
      <div className="titles">
          <div className="image__title">Ahmed</div>
          <div className="image__p">Ui / Ux et Brand<br></br> designer</div>
      </div>
  
    </div>
    )
 
}
function Basma(){

 
    return (
        <div className="image c animate__animated animate__bounceInLeft" >
     
        <img className="image__img" src={t1} alt="Bricks" loading="lazy"></img>
        <div className="titles">
            <div className="image__title">Mohamed</div>
            <div className="image__p">Developpeur web et<br></br> mobile</div>
        </div>
    
      </div>
    )
 
}

export default team;