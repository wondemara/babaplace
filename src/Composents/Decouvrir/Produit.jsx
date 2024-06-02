import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';

const Produit = React.memo(() => {
  return (
    <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
    <div className='dec_produit'>
      <img className='dec_produit__img' src="Assets/herob.png" alt="imagee produit" />
      <div className='dec_produit__div'>
          <p>Casablance</p>
          <h4 className='dec_produit__div__h4'>Un appartement tout près de la mer</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <p className='dec_produit__div__adresse'><span className='span'>Adresse : </span> Lot chems Mt fleurie 2</p>
          <div className='dec_produit__div__prix'>
            <p className='dec_produit__div__prix__p'>disponible maintenant <FaCheck /></p>
            <p>à partir de : <span className='span'>1250dh</span></p>
          </div>
         <NavLink to='/detail_produit'><button className='button'>Voir plus <MdNavigateNext /></button></NavLink> 
      </div>
    </div>
    </LazyLoad>
  )
})

export default Produit
