import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Filtre = React.memo(() => {
  return (
    <div className='filtre'>
      <h5 className='filtre_h5'>Prix</h5>
      
      <div className='filtre__div'>
      <label htmlFor="" className='filtre_selection'>
        <input type="radio" className='input'/>
        <p className='p'><FaCheck /></p>
        <div>0dh à 150dh</div>
      </label>
      <label htmlFor="" className='filtre_selection'>
        <input type="radio" className='input'/>
        <p className='p'><FaCheck /></p>
        <div>0dh à 150dh</div>
      </label>
      </div>
    </div>
  )
})

export default Filtre
