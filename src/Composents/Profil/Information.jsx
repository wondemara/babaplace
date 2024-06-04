import React from 'react'
import { MdOutlineAddAPhoto } from "react-icons/md";

const Information = () => {
    const [est ,Setest] =React.useState(false)
  return (
    <div className='information'>
        <div className='information__entete'>
            <div className='entete__texte'>
                 <h3>Personal Details</h3>
                 <p>Update your info and find out how it's used.</p>
            </div>
            <div className='entete__image'>
                <img className='entete__image__img' src="/Assets/herob.png" alt="profil personne" loading='lazy'/>
                <div className='entete__image__iconne'>
                    <input className='input' type="file" accept="image/*"/>
                    <MdOutlineAddAPhoto />
                </div>
                <p>Salim</p>
            </div>
        </div>
        <br /><br />
        <div className="information__plus">
        {!est?<button onClick={()=> Setest(true)} className='information__plus__button'>Modifier</button>:
        <button className='information__plus__button'>Enregistrer</button>}
             <br />
             <div className='information__plus__info'>
                <p>Nom</p>
                {est?<input className='input' type="text" defaultValue='Diallo' />:
                <p>Diallo</p>}
             </div>
             <p className='ligne'></p>
             <div className='information__plus__info'>
                <p>Prenom</p>
                {est?<input className='input' type="text" defaultValue='Salim' />:
                <p>Salim</p>}
             </div>
             <p className='ligne'></p>
             <div className='information__plus__info'>
                <p>Adress</p>
                {est?<input className='input' type="text" defaultValue='Mont fleury' />:
                <p>Mont fleury</p>}
             </div>
             <p className='ligne'></p>
             <div className='information__plus__info'>
                <p>Email</p>
                {est?<input className='input' type="text" defaultValue='SalimDiallo@gmail.com' />:
                <p>SalimDiallo@gmail.com</p>}
             </div>
             <p className='ligne'></p>
             <div className='information__plus__info'>
                <p>Tel</p>
                {est?<input className='input' type="text" defaultValue='+212000000000' />:
                <p>+212000000000</p>}
             </div>
             <p className='ligne'></p>
             <div className='information__plus__info'>
                <p>BirthDay</p>
                {est?<input className='input' type="text" defaultValue='12/09/2024' />:
                <p>12/09/2024</p>}
             </div>
             
        </div>
    </div>
  )
}

export default Information
