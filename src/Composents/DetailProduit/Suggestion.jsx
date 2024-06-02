import React from 'react'
import LazyLoad from 'react-lazyload'
import { IoAddCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Suggestion = () => {
  return (
    <NavLink to='/fdsfdsfdvfd'>
    <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
      <div className='det_suggestion'>
        <img className='det_sugestion__img' src="Assets/herob.png" alt="imagee de suggestion" loading='lazy'/>
        <div className='det_suggestion__texte'>
           <h6 className='det_suggestion__h6'>Double Bed & Side Tables</h6>
           <div className='det_suggestion__texte__prix'>
              <p>200dh</p>
              <IoAddCircleOutline />
           </div>
       </div>
      </div>
    </LazyLoad>
    </NavLink>
  )
}

export default Suggestion
