import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='profil_navigation'>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/personne_detail'>
           <IoPersonOutline className='icon'/>
           <h4>Personne Detail</h4>
         </NavLink >
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/preferences'>
           <IoPersonOutline className='icon'/>
           <h4>Preferences</h4>
         </NavLink>
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/securite'>
           <IoPersonOutline className='icon'/>
           <h4>Securité</h4>
         </NavLink>
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/messages'>
           <IoPersonOutline className='icon'/>
           <h4>Messages</h4>   
         </NavLink>
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/setting'>
           <IoPersonOutline className='icon'/>
           <h4>Setting</h4>
         </NavLink>
         <p className='ligne'></p>
         <NavLink className={(e)=>e.isActive? 'active profil_navigation__info':'non profil_navigation__info'} to='/profil/salim/biens'>
           <IoPersonOutline className='icon'/>
           <h4>Bien</h4>
         </NavLink>
    </div>
  )
}

export default Navigation
