
import logo from '../img/logo.png'
import '../css/Footer.css'
import { Fragment } from 'react';

function Header() {


  /* Built by Yassine.info */

    return (
        <Fragment>
           <footer className='footer'>
           <div className='items'>
          <h2>Contact</h2>
          <p>Téléphone: +212 680746019</p>
          <p>Email : contact@pyxel.ma</p>
          <p>Instagram : newpyxel</p>
           </div>


           <div className='items mid'>
           <h2>Adresse</h2>
           <p>Rue 75, Sidi Maarouf -<br></br>
           Casablanca - Maroc </p>
           <a target="_blank" href="https://www.google.com/maps/place/New+Pyxel/@33.5312995,-7.6499723,15z/data=!4m5!3m4!1s0x0:0x2e59966a082f2d63!8m2!3d33.5312995!4d-7.6499724?shorturl=1">Localisation</a>


            </div>


            <div className='items acceuil'>
            <h2>Plan du site</h2>
            <a  href="#Home">Acceuil</a>
            <a  href="#Projects">Projets</a>
            <a  href="#Services">Services</a>
            <a  href="#About">A propos</a>
            <a  href="#Contact">Contact</a>
             </div>


             <div className='items buttomsFooter'>
       <div className='iconFooter'>
       <a target="_blank" href="https://mailxto.com/0abxcv"><img src='https://www.pyxel.ma/assets/email.043cec03.svg'></img></a>
       <a target="_blank" href="https://www.instagram.com/newpyxel"><img src='https://www.pyxel.ma/assets/instagram.e71c7f6d.svg'></img></a>
       <a target="_blank" href="https://api.whatsapp.com/message/U2TWXMAJCHOBF1?autoload=1&app_absent=0"><img src='https://www.pyxel.ma/assets/whatsapp.dc183410.svg'></img></a>
       <a target="_blank" href="https://www.behance.net/newpyxel"><img src='https://www.pyxel.ma/assets/behance.c60ceade.svg'></img></a>
       
       </div>
 
       <p>All Rights Reserved — 2022 © New Pyxel.</p>
       <p>Made with Figma & Love</p>
       </div>

           </footer>
        </Fragment>

    )

}
export default Header;