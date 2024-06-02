import React from 'react'
import LazyLoad from 'react-lazyload'
import { NavLink } from 'react-router-dom'

const Produit = React.memo(() => {
  return (
    <div className='produit'>
      <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
      <img className='img' src="Assets/herob.png" alt="imagee principal de la maison" loading='lazy'/>
      <div className='produit_information'>
         <h4 className='h4'>Mont Fleuri</h4>
         <p>⭐⭐⭐</p>
         <p className='produit_information__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe neque ratione ex autem provident...</p>
         <div className='produit_information__div'>
           <p>Prix: <span className='span'> 1700dh</span></p>
           <NavLink to="/dsqfds"><p className='p_link'>Details</p></NavLink>
         </div>
      </div>
      </LazyLoad>
    </div>
  )
})

export default Produit
