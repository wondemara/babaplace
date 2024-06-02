import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer__new_letter">
        <div className="footer__new_letter__element">
            <div className='element__texte'>
               <p className='p'>Sign up to our Newsletter</p>
               <p>For a weekly curated collection of 3 things you can watch, read or listen to switch off from the busy everyday.</p>
            </div>
            <div className="element__input">
                <input className='input' type="text" placeholder='message...'/>
                <button className='button'>Send</button>
            </div>
            <p className='ligne'></p>
        </div>
       </div>
       <div className="footer_info">
            <img className='img' src="/Assets/logo.webp" alt="logo"  loading='lazy'/>
             <div>
                <p>Découvrez votre nouveau chez-vous : confort,</p>
                <p> communauté et économies pour une expérience</p>
                <p>étudiante inoubliable</p>
             </div>
             <div className="footer_info__contact">
          <div className="footer_info__contact__phone">
           <FaPhoneAlt />
           <a className='a' href="tel:+2120000000">+2120000000</a>
          </div>
          <div className="footer_info__contact__mail">
           <FaPhoneAlt />
            <a className='a' href="mailto:babaplace9@gmail.com">babaplace9@gmail.com</a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
