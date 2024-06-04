import React from 'react'
import Hearder from '../Composents/Hearder'
import Affiche from '../Composents/Acceuil/Affiche'
import Produit from '../Composents/Acceuil/Produit'
import Service from '../Composents/Acceuil/Service'
import Suggestion from '../Composents/Acceuil/Suggestion'
import Footer from '../Composents/Footer'
import Offre from '../Composents/Acceuil/Offre'



const Acceuil = () => {
  document.title = 'Babaplace'
  return (
    <div className='acceuil'>
       <Hearder/>
       <Affiche/>
        <div className='acceuil__center'>
           <h2 className='h2'>Appartement récemment <span className='span'>  ajoutée !</span></h2>
           <div className='acceuil__center__produit'>
             <Produit/>
             <Produit/>
             <Produit/>
             <Produit/>
             <Produit/>
             <Produit/>
           </div>
           <h2 className='h2'>Tout ce dont vous avez <span className='span'>  besoin !</span></h2>
          <div className='acceuil__center__service'>
              <Service/>
              <Service/>
              <Service/>

          </div>
           <h2 className='h2'>Suggestion<span className='span'>  d’appartement !</span></h2>        
          <div className="acceuil__center__suggestion">
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Acceuil
