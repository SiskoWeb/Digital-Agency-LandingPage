
import 'animate.css';

import './App.css'
import Header from './Compon/Header'
import Home from './Compon/Home'
import Projects from './Compon/Projects'
import Services from './Compon/Services'
import Title from './Compon/Title'
import Aboutus from './Compon/Aboutus'
import Contact from './Compon/Contact'
import Clients from './Compon/Clients'
import Footer from './Compon/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    
    
    
  
    <div className="App">
   
    <div className='containerMain' >

<Header/>
<Home/>

<Title title = {  <h1> Jetez un coup d’Oeil sur<br></br> nos realisations</h1> } claso="Projects"/>
<Projects/>
<Title title = {  <h1> Nos Service</h1>}  claso="Services"/>
<Services/>

<Title title = {  <h1> Faison connaissance</h1>} claso="About"/>
<Aboutus/>
<Title title = {  <h1> Contact</h1>} claso="Contact"/>
<Contact/>

<Title title = {  <h1> nos clients</h1> } claso="clients"/>
<Clients/>
</div>
<Footer/>


    </div>
  )
}

export default App
