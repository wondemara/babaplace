import React from 'react'
import LazyLoad from 'react-lazyload'

const Affiche = React.memo(() => {
  return (
    <div className='affiche'>
     <LazyLoad height={500}  once={true}  debounce={1000}  throttle={1000} offset={200}>
      <div className="affiche__image">
        <img className='img' src="Assets/herob.png" alt="description imagee" />
      </div>
      <div className="affiche__texte">
        <h1 className='h1'>Trouver un Logement-Mettre en Location</h1>
        <p>Des chambres modernes et </p>
        <p>Confortables à deux pas de votre Université</p>
      </div>
      <div className='affiche__search_bar'>
           <div className="search__input">
              <div className="search__input__selection">
                <select className='select' name="location">
                    <option value="Location">Location</option>
                </select>
                <select className='select' name="Ville">
                    <option value="Date">Ville</option>
                </select>
                <select className='select' name="Price">
                    <option value="Price">Price</option>
                </select>
              </div>
              <div className="search__input__input">
                <input className='input' type="text"  placeholder='text...'/>
                <button className='button'>Search</button>
              </div>
           </div>
           <div className="search__boutton">
              <h3>Vous pourriez aimer </h3>
              <div className='search__boutton__div'>
                 <button className='boutton'>Fes</button>
                 <button className='boutton'>Meknes</button>
                 <button className='boutton'>Casablanca</button>
                 <button className='boutton'>Tanger</button>
              </div>
           </div>
      </div>
      </LazyLoad>
    </div>
  )
})

export default Affiche
