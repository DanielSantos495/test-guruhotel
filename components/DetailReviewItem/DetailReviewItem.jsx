import React from 'react'
import PropTypes from 'prop-types'

import { detail__reviews_item } from '@/styles/components/DetailReviewItem.module.scss'

export const DetailReviewItem = (props) => {

   const {
      img,
      name,
      user,
      rating,
      content
   } = props

   return(
      <div className={detail__reviews_item} >
         <div>
            <img src={img} atl={`Foto ${name}`}/>
            <p>{user}</p>
            <span>
               <img src='/icons/star.png' alt='' />
               {rating}
            </span>
         </div>
         <p>{content}</p>
      </div>
   )
}

DetailReviewItem.propTypes = {
   img: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   user: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
   content: PropTypes.string.isRequired
}