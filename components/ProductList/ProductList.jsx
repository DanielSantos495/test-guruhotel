import React from 'react'

import { Product } from '@/components/Product/Product'
import { GetProducts } from '../../container/GetProducts'

import { products } from '../../mocks/ProductListMock'

import {
   productlist__container,
   productlist__no_search,
   productlist__search
} from '@/styles/components/ProductList.module.scss'

export const ProductList = (props) => {

   const {
      query
   } = props

   return(
      <section className={productlist__container}>
         {/* <div>
            <GetProducts query={query} />
         </div> */}
         <div className={productlist__no_search}>
            <h3>¡Escoge qué quieres hacer y dónde!</h3>
            <h2>Shops</h2>
         </div>
         <div className={productlist__search}>
            <ul>
               {
                  products.map((item, i) =>
                     <li key={i}>
                        <Product {...item} />
                     </li>
                  )
               }
            </ul>
         </div>
      </section>
   )
}