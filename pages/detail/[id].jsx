import React from 'react'
import { useRouter } from 'next/router'
// PropTypes Pdtes

import { ProductAttributes } from '@/components/CardProduct/ProductAttributes'
import { DetailReviewItem } from '@/components/DetailReviewItem/DetailReviewItem'
import { Button } from '@/components/Button/Button'

import { productDetail } from '../../mocks/ProductListMock'

import {
   detail__container,
   detail__button_icon,
   detailproduct__container,
   detail__reviews,
   detailproduct__attributes
} from '@/styles/components/Detail.module.scss'

const Detail = () => {
   const { query, back } = useRouter()

   console.log(query.id)

   return(
      <section className={detail__container}>
         <Button type='button' onClick={() => back()} width ='150px' height='40px'>
            <img className={detail__button_icon} src='/icons/right-arrow.png' alt='Arrow'/>
            Atrás
         </Button>
         <div className={detailproduct__container}>
            <div className={detailproduct__attributes}>
               <div>
                  <img src={productDetail[0].img} alt={`Image ${productDetail[0].name}`} />
               </div>
               <ProductAttributes
                  {...productDetail[0]}
               />
            </div>
            <div className={detail__reviews}>
               <ul>
                  {
                     productDetail[0].reviews.map((review, i) =>
                        <li key={i}>
                           <DetailReviewItem {...review} name={productDetail[0].name}/>
                        </li>
                     )
                  }
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Detail