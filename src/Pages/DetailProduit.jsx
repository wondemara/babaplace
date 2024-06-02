import React from 'react'
import Hearder from '../Composents/Hearder'
import LazyLoad from 'react-lazyload'
import Footer from '../Composents/Footer'
import { MdOutlineMapsHomeWork } from "react-icons/md";
import Info from '../Composents/DetailProduit/Info';
import Maps from '../Composents/DetailProduit/Maps';
import Suggestion from '../Composents/DetailProduit/Suggestion';



const DetailProduit = () => {
  return (
    <div className='detailProduit'>
      <Hearder />
        <div className='detailProduit_descrip'>
          <h4>Appartement de Luxe de 4 Chambres avec Vue Imprenable</h4>
        </div>
        <br /><br />
        <div className='detailProduit__infos'> 
         <LazyLoad height={200}  once={true}  debounce={500}  throttle={500} offset={200}>
           <div className='infos__image'>
             <img className='img' src="Assets/herob.png" alt="imagee de la maison" loading='lazy'/>        
             <div className='infos__image__plus'>
               <img className='img' src="Assets/herob.png" alt="imagee de la maison" loading='lazy'/>        
               <img className='img' src="Assets/herob.png" alt="imagee de la maison" loading='lazy'/>        
               <img className='img' src="Assets/herob.png" alt="imagee de la maison" loading='lazy'/>                     
             </div>
           </div>
         </LazyLoad>
           <div className="infos__texte">
                <h3>Appartement de luxe</h3>
                <div className='infos__texte__service'>
                  <div className='service__iconne'>
                    <MdOutlineMapsHomeWork />
                    <p>wifi integré</p>
                  </div>
                  <div className='service__iconne'>
                    <MdOutlineMapsHomeWork />
                    <p>wifi integré</p>
                  </div>
                </div>
                <div className='infos__texte__prix'>
                    <div className='prix__infos'>
                      <p className='prix__infos__texte'>à partir de :</p>
                      <p className='prix__infos__numbre'>1450dh</p>
                    </div>
                    <div className='prix__infos'>
                      <p className='prix__infos__texte'>Caution :</p>
                      <p className='prix__infos__numbre'>1450dh</p>
                    </div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt minus tempora assumenda velit possimus qui ipsum libero rerum voluptatibus officia sunt iste, reiciendis doloremque in repudiandae, accusamus iure. Eos, sed voluptatibus nulla corrupti quis assumenda cumque porro exercitationem, accusantium totam iure consequatur architecto quisquam blanditiis reiciendis! Totam neque nostrum amet veniam aliquam deleniti voluptate tenetur tempore debitis fugit, ea, corrupti quod. Vitae cumque debitis laudantium necessitatibus deserunt est id quam ullam. Dolorum doloribus architecto, quaerat perferendis rem ad quia officia, nisi tempore voluptate dicta officiis dolore atque odit commodi adipisci expedita amet esse! Atque necessitatibus a cum iste? Possimus.</p>
                </div>
           </div>
        </div>
        <br /><br />
         <Info nom={"Informations"}/>
         <br /><br />
         <Maps />
         <br /><br />
         <Info nom={"Detail..."}/>
         <br /><br />
         <h3 className='detailProduit__suggestion__titre'>Suggestion</h3>
         <br /><br />
         <div className='detailProduit__suggestion'>
           <Suggestion />
           <Suggestion />
           <Suggestion />
           <Suggestion />
           <Suggestion />
           <Suggestion />
         </div>
         <br /><br />
        <Footer />
    </div>
  )
}

export default DetailProduit
