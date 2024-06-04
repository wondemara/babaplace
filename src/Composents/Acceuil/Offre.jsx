import React from 'react'
import { BsPersonArmsUp } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { PiPersonSimpleBikeFill } from "react-icons/pi";

const Offre = () => {
  return (
    <div className='offre'>
         <h3>Vous cherchez à louer votre maison rapidement et en toute sécurité ?</h3>
          <div>
            <div className='offre__texte'>
             <h5 className='offre__texte__h5'>Audience et Visibilité   <BsPersonArmsUp className='icons'/></h5>
             <p>Avec des milliers de visiteurs quotidiens, votre annonce atteindra un large public prêt à louer.</p>
            </div>
          </div>
          <div>
            <div className='offre__texte'>
             <h5 className='offre__texte__h5'>Simplicité et Rapidité  <PiPersonSimpleBikeFill className='icons'/></h5>
             <p>Publiez facilement votre annonce grâce à notre guide étape par étape et téléchargez vos photos en quelques clics.</p>
            </div>
          </div>
          <div>
            <div className='offre__texte'>
             <h5 className='offre__texte__h5'>Sécurité et Support  <MdSecurity className='icons'/></h5>
             <p>Nous vérifions les locataires et protégeons vos informations personnelles, avec une équipe de support disponible pour vous aider à chaque étape.</p>
            </div>
          </div>
         <h3>Vous êtes à la Recherche d'un Logement</h3> 
    </div>
  )
}

export default Offre
