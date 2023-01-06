

import 'animate.css';

import vision from '../img/vision.svg'
import '../css/Vision.css'

function Vision(){

   /* Built by Yassine.info */
    return (
      <div className='Vision' >
    
<div className='parag animate__animated  animate__bounceInRight'>
<h3 className='p1'>Nous apportons une vraie valeur, établissons desliens, construisons une communauté.</h3>
<p className='p2'>Notre objectif pour l'avenir est de
fournir au marché des entreprises nos
 solutions de conception qui se développeraient avec le succès de l'entreprise et de nos clients.</p>
</div>
<img className='animate__animated animate__bounceInLeft' srcSet={vision} loading="lazy"></img>
      </div>
    )
 
}
export default Vision;