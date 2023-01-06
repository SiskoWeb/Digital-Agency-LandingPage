
import emailjs from '@emailjs/browser';
import thanks from '../img/thanks.svg'
import '../css/Contact.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 


// import 'animate.css';
import '../css/Aboutus.css'


import React, { useState ,useEffect } from "react";
import { Fragment } from 'react';


function Contact() {




    const [fullName, setFullName] = useState('')
    const [email, setNEmail] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState(false)

    const handelName = (e) => {
        setFullName(e.target.value)

    }
    const handelNumber = (e) => {
        setNumberPhone(e.target.value)

    }
    const handelEmail = (e) => {
        setNEmail(e.target.value)

    }
    const handelMsg = (e) => {
        setMsg(e.target.value)

    }
    // const [modal, setModal] = useState("popupMsg");
    // const [noActive, setNoActive] = useState("popup");





    const preventScroll = (e) => {

        e.stopPropagation();

        return false;
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        if (fullName.length == 0 || numberPhone.length == 0 || email.length == 0 || msg.length == 0) {
            setError(true)

        }
        else {
            emailjs.sendForm('service_j2n1ecu', 'template_hfhd0wn', e.target, '2TMhWRZf28cHTXZj_')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
            setError(false)
            handelerOpenPopup()
            setFullName("")
            setNEmail("")
            setNumberPhone("")
            setMsg("")
            // toggleModal()

            // setModal("popupMsg");

        }


    }

    const handelerOpenPopup = () => {
        document.getElementById("popup").classList.add("popupMsg")

        document.getElementById("blurs").classList.add("overFlowActive")

    }


    // const [modal, setModal] = useState("");

    // const toggleModal = () => {
    //     setModal(!modal);
    // };


    // if (modal) {
    //     document.body.classList.add('overlay')
    // } else {
    //     document.body.classList.remove('overlay')
    // }

    // useEffect(()=>{

    //     AOS.init({duration:2000});
    //   },[])

    return (

        <div className='Contact'   >
            <form className='Form' id='blureForm' onSubmit={handleSubmit}>
                <div className='input_1'>


                    <div className='Form_input inputvalid'>
                        <input name='name' type="text" placeholder='Nom*' onChange={handelName}></input>
                        {error && fullName.length <= 0 ?
                            <label className='errorMSG animate__animated animate__shakeX'>First Name can't be Empty</label> : ""}
                    </div>


                    <div name='entreprise' className='Form_input inputvalid'>
                        <input type="text" name='Entreprise' placeholder="Nom entreprise"></input>

                    </div>


                </div>


                <div className='input_1'>


                    <div className='Form_input inputvalid'>
                        <input name='number' type="number"  placeholder='Téléphone*' onChange={handelNumber}></input>
                        {error && numberPhone.length <= 10 ?
                            <label className='errorMSG animate__animated animate__shakeX'>Number Phone can't be Empty (Make sur Entre all Numbers)</label> : ""}
                    </div>


                    <div name="Fonction" className='Form_input inputvalid'>
                        <input name='Fonction' type="text" placeholder="Fonction"></input>

                    </div>


                </div>

                <div className='input_1'>


                    <div className='Form_input inputvalid'>
                        <input name='Email' type="email" placeholder='Email*' onChange={handelEmail}></input>
                        {error && email.length <= 0 ?
                            <label className='errorMSG animate__animated animate__shakeX'>Email can't be Empty</label> : ""}
                    </div>




                </div>

                <div className='input_checkbox'>


                    <h2>Object du contact:</h2>
                    <div className='checkbox_list'>

                        <div className='checker'>

                            <label htmlFor="Identité _Visuelle"><input  type="checkbox" id="Identité _Visuelle" name="Identité Visuelle" ></input> <p>Identité Visuelle</p></label>
                        </div>

                        <div className='checker'>

                            <label htmlFor="Création_de_contenu"><input type="checkbox" id="Création_de_contenu" name="Création de contenu" ></input> <p>Création de contenu</p></label>
                        </div>

                        <div className='checker'>

                            <label htmlFor="Marketing"><input type="checkbox" id="Marketing" name="Marketing" ></input> <p>Social Media Marketing</p></label>
                        </div>

                        <div className='checker'>

                            <label htmlFor="Site_WEB"><input type="checkbox" id="Site_WEB" name="Site WEB" ></input> <p>Site WEB</p></label>
                        </div>
                        <div className='checker'>

                            <label htmlFor="App_Mobile"><input type="checkbox" id="App_Mobile" name="App Mobile" ></input> <p>App Mobile</p></label>
                        </div>
                        <div className='checker'>

                            <label htmlFor="Vidéo"><input type="checkbox" id="Vidéo" name="Vidéo promotionnelle" ></input> <p>Vidéo promotionnelle</p></label>
                        </div>

                        <div className='checker'>

                            <label htmlFor="SEO"><input type="checkbox" id="SEO" name="SEO/SEA" ></input> <p>SEO/SEA</p></label>
                        </div>
                        <div className='checker'>

                            <label htmlFor="Autre"><input type="checkbox" id="Autre" name="Autre" ></input> <p>Autre</p></label>
                        </div>
                    </div>


                </div>

                <div className='Form_input msgBarContect ' >
                    <input type="text" name='message' placeholder='Votre message*' onChange={handelMsg}></input>
                    {error && msg.length <= 8 ?
                        <label className='errorMSG animate__animated animate__shakeX'>Message can't be Empty</label> : ""}</div>


                <div className='btndev'>
                    <input className="btn_submit" type="submit" value="Envoyer" ></input>
                </div>


            </form>
            <Thanks />
        </div>



    )

}



function Thanks() {

    const handelerClosePopup = () => {
        document.getElementById("popup").classList.remove("popupMsg")
        document.getElementById("blurs").classList.remove("overFlowActive")
    }

    return (
        <Fragment>
            <div onDoubleClick={handelerClosePopup} className='blur' id='blurs'> </div>
            <div className='popup ' id='popup'>
                <div onClick={handelerClosePopup} className='smallBtnClose'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.22217" y="30" width="3.14269" height="39.2837" rx="1.57135" transform="rotate(-135 2.22217 30)" fill="#383838" />
                    <rect y="2.22168" width="3.14269" height="39.2837" rx="1.57135" transform="rotate(-45 0 2.22168)" fill="#383838" />
                </svg>
                </div>
                <img src={thanks}></img>
                <div className='downPop'><h2>Merci</h2>
                    <p>Vous recevrez une réponse sous peu</p>
                    <div onClick={handelerClosePopup} className="btnClose" >Fermer</div>
                </div>

            </div>
        </Fragment>
    )
}


export default Contact;