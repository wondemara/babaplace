import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { MdOutlineHomeWork } from "react-icons/md";
const Navigation = () => {
  return (
    <div className='profil_navigation'>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/personne_detail'>
           <IoPersonOutline className='icon'/>
           <h4>Personne Detail</h4>
         </NavLink >
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/biens'>
           <MdOutlineHomeWork className='icon'/>
           <h4>Bien</h4>
         </NavLink>
    </div>
  )
}

export default Navigation
