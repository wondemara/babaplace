import React from 'react'

const Recherche = React.memo(() => {
  return (
    <div className='recherche'>
              <div className="search__input__selection">
               <div>
                <h4>Location</h4>
               <select className='select' name="location">
                    <option value="Mont_fleuri">Mont Fleuri</option>
                </select>
               </div>
               <div>
                <h4>Ville</h4>
                <select className='select' name="Ville">
                    <option value="Fes">Fes</option>
                </select>
                </div>
                <div>
                <h4>Prix</h4>
                <select className='select' name="Price">
                    <option value="2100">2100dh</option>
                </select>

              </div>
           </div>
              <div className="search__input__input">
                <input className='input' type="text"  placeholder='text...'/>
                <button className='button'>Search</button>
              </div>
           </div>
  )
})

export default Recherche
