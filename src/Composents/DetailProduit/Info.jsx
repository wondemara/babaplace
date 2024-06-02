import React from 'react'
import LazyLoad from 'react-lazyload'

const Info = ({nom}) => {
  return (
    <div className='info'>
      <LazyLoad height={200}  once={true}  debounce={400}  throttle={400} offset={200}>
      <div className='info_ele'>
        <h3>{nom}</h3>
        <div className='info__detail'>
            <div>
                <p>Ville</p>
                <h4>Casablanca</h4>
            </div>
            <div>
                <p>Adresse</p>
                <h4>9840 International Drive, Orlando, FL</h4>
            </div>
            <div>
                <p>Caution</p>
                <h4>2000dh</h4>
            </div>
            <div>
                <p>Chambre</p>
                <h4>10</h4>
            </div>
            <div>
                <p>Salon</p>
                <h4>2</h4>
            </div>
            <div>
                <p>Cuisine</p>
                <h4>1</h4>
            </div>
        </div>
        </div>
    </LazyLoad>
    </div>
  )
}

export default Info
