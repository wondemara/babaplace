import React from 'react'
import { CiSquareRemove } from "react-icons/ci";

const ImagePlus = React.memo(({SetVue}) => {
    const [imagee ,SetImage] = React.useState('/Assets/herob.png')
  return (
    <div className='imageplus'>
       <button className='imageplus__fermer' onClick={()=>SetVue(false)}>
         <CiSquareRemove />
       </button>
       <div className='imageplus__image'>
         <img className='image__img' src={imagee} alt="imagee principale" loading='lazy'/>
         <div className='imageplus__image__autre'>
           <img onClick={()=>SetImage('/Assets/herob.png')} className='img' src={'/Assets/herob.png'} alt="imagee principale" loading='lazy'/>
           <img onClick={()=>SetImage('/Assets/herob.png')} className='img' src={'/Assets/herob.png'} alt="imagee principale" loading='lazy'/>
           <img onClick={()=>SetImage('/Assets/logo.webp')} className='img' src={'/Assets/logo.webp'} alt="imagee principale" loading='lazy'/>
           <img onClick={()=>SetImage('/Assets/herob.png')} className='img' src={'/Assets/herob.png'} alt="imagee principale" loading='lazy'/>
           <img onClick={()=>SetImage('/Assets/herob.png')} className='img' src={'/Assets/herob.png'} alt="imagee principale" loading='lazy'/>

         </div>
       </div>

    </div>
  )
})

export default ImagePlus
