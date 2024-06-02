import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom"
const Hearder = React.memo(() => {
  return (
    <div className='hearder'>
        <div className="hearder__contact">
          <div className="hearder__contact__phone">
           <FaPhoneAlt />
           <a className='a' href="tel:+2120000000">+2120000000</a>
          </div>
          <div className="hearder__contact__mail">
            <a className='a' href="mailto:babaplace9@gmail.com">babaplace9@gmail.com</a>
          </div>
        </div>
        <div className="hearder__nav">
            <img className='img' src="/Assets/logo.webp" alt="logo"  loading='lazy'/>
            <div className="hearder__nav__link">     
              <li className='li'>
                <NavLink className={(e)=>e.isActive? 'active':'non'}  to="/" ><p className='p'>Acceuil</p></NavLink>
                <NavLink className={(e)=>e.isActive? 'active':'non'}  to="/decouvrir" ><p className='p'>Découvrir</p></NavLink>
                <NavLink className={(e)=>e.isActive? 'active':'non'}  to="/k" ><p className='p'>Mettre en location</p></NavLink>
                <NavLink className={(e)=>e.isActive? 'active':'non'}  to="/k" ><p className='p'>Travailler avec Nous</p></NavLink>
                <NavLink className={(e)=>e.isActive? 'active':'non'}  to="/k" ><p className='p'>A propos</p></NavLink>
              </li>
            </div>
            <NavLink  to="/" ><button className='btn'>Connexion</button></NavLink>
        </div>
    </div>
  )
})

export default Hearder
