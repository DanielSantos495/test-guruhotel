import React from 'react'
import PropTypes from 'prop-types'

import {
   cardproduct__container
} from '@/styles/components/CardProduct.module.scss'
import { ProductAttributes } from './ProductAttributes'

export const CardProduct = (props) => {

   const {
      img,
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
      <div className={cardproduct__container}>
         <div>
            <img src={img} alt={`Image ${name}`} />
         </div>
         <ProductAttributes
            name={name}
            rating={rating}
            reviews_count={reviews_count}
            location={location}
            contact={contact}
            hours={hours}
            status={status}
            price={price}
         />
      </div>
   )
}

CardProduct.propTypes = {
   img: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
   reviews_count: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
   contact: PropTypes.string.isRequired
}