
import 'animate.css';

import agence from '../img/agence.svg'
import '../css/Agency.css'
function Agency(){

 
    return (
      <div className='Agency' >
      <img className='animate__animated animate__bounceInLeft' srcSet={agence} loading="lazy"></img>
<div className='parag animate__animated animate__bounceInRight'>
<h3 className='p1'>Nous créons des idées plus simples, plus légères et plus désirables pour l'avenir.</h3>
<p className='p2'>Notre objectif pour l'avenir est de
fournir au marché des entreprises nos
 solutions de conception qui se développeraient avec le succès de l'entreprise et de nos clients.</p>
</div>

      </div>
    )
 
}
export default Agency;