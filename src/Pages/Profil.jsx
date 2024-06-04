import React from 'react'
import Hearder from '../Composents/Hearder'
import Footer from '../Composents/Footer'
import Navigation from '../Composents/Profil/Navigation'
import Information from '../Composents/Profil/Information'


const Profil = () => {
  return (
    <div className='profil'>
      <Hearder/>
      <div className='profil_descrip'>
          <h4 className='profil_descrip__h4'>Admin de <span className='span'>Sidy Mohamed Salim Diallo</span></h4>
      </div>
      <br /><br />
       <div className='profil__center'>
           <Navigation />
           <Information />
       </div>
       <br /><br />
      <Footer/>
    </div>
  )
}

export default Profil
