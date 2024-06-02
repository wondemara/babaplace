import React from 'react'
import Hearder from '../Composents/Hearder'
import LazyLoad from 'react-lazyload'
import Footer from '../Composents/Footer'
import Recherche from '../Composents/Decouvrir/Recherche'
import Filtre from '../Composents/Decouvrir/Filtre'
import Produit from '../Composents/Decouvrir/Produit';



const Decouvrir = () => {
    document.title = 'Decouvert des produits babaplace'
  return (
    <div className='decouvrir'>
      <Hearder />     
      <LazyLoad height={200} once={true} debounce={500} throttle={1000} offset={300}>
      <img className='decouvrire__img' src="Assets/herob.png" alt="imagee d'affiche" loading='lazy'/>
       <h5 className='h5'>Biens</h5>
       <Recherche/>
       <br /><br />
       <div className="decouvrir_center">
          <Filtre />
          <div className='center__produit_Liste'>
            <Produit />
            <Produit />
            <Produit />
          </div>
       </div>
        <Footer />
      </LazyLoad>
    </div>
  )
}

export default Decouvrir
