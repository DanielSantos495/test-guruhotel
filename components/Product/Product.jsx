import React from 'react'
import PropTypes from 'prop-types'

import { product__container } from '@/styles/components/Product.module.scss'

export const Product = (props) => {

   const {
      img,
      name,
      rating,
      reviews_count,
      location,
      contact
   } = props

   return(
      <div className={product__container}>
         <img src={img} alt={`Image ${name}`} />
         <div>
            <span>
               <h4>{name}</h4>
               <img src='/icons/star.png' alt='Icon star' />
               {rating} ({reviews_count})
            </span>
            <p>{location}</p>
            <p>Teléfono: {contact}</p>
         </div>
      </div>
   )
}

Product.propTypes = {
   img: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
   reviews_count: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
   contact: PropTypes.string.isRequired
}