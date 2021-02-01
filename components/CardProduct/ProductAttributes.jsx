import React from 'react'
import PropTypes from 'prop-types'

import {
   product__attributes,
   product__attributes_status
} from '@/styles/components/ProductAttributes.module.scss'

export const ProductAttributes = (props) => {

   const {
      name,
      rating,
      reviews_count,
      location,
      contact,
      hours,
      status,
      price
   } = props


   return(
      <div className={product__attributes}>
         <span>
            <h4>{name}</h4>
            <span>
               <img src='/icons/star.png' alt='Icon star' />
               {rating} ({reviews_count})
            </span>
         </span>
         <div>
            <p>{location}</p>
            <p>{hours && `Horario: ${hours}`}</p>
         </div>
         <div>
            <p>Tel: {contact}</p>
            <p className={product__attributes_status}>{status}</p>
         </div>
         <p>{price && `Precios: ${price}`}</p>
      </div>
   )
}

ProductAttributes.propTypes = {
   name: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
   reviews_count: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
   contact: PropTypes.string.isRequired
}