import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import LazyLoad from 'react-lazyload';

const Service = () => {
  return (
    <div className='service'>
      <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
      <IoHomeOutline  className='icon'/>
      <h5 className='h5'>Louez</h5>
      <p className='p'>Trouvez rapidement votre appartement</p>
      </LazyLoad>
    </div>
  )
}

export default Service
