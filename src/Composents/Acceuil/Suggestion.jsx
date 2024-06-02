import React from 'react'
import LazyLoad from 'react-lazyload'
import { NavLink } from 'react-router-dom'

const Suggestion = React.memo(() => {
  return (
    <div className='suggestion'>
      <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={100}>
      <NavLink to="/sqdEZRIU">
      <img className='img' src="Assets/herob.png" alt="imagee principal de la maison" loading='lazy'/>
      <div className='suggestion_information'>
         <h4 className='h4'>Mont Fleuri</h4>
         <div className='suggestion_information__div'>
          <p>⭐⭐⭐</p>
          <p><span className='span'> 1700dh</span></p>          
         </div>
      </div>
      </NavLink>
      </LazyLoad>
    </div>
  )
})

export default Suggestion
