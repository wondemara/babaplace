import React from 'react'
import LazyLoad from 'react-lazyload'

const Maps = () => {
  return (
    <div className='maps'>
      <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
        <div className='maps_ele'>
          <h5>9840 International Drive, Orlando, FL</h5>
          <img className='maps__img' src="Assets/herob.png" alt="l'adresse map" loading='lazy' />
        </div>
      </LazyLoad>  
    </div>
  )
}

export default Maps
