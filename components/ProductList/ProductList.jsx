import React, { useState } from 'react'
import Link from 'next/link'

import { CardProduct } from '@/components/CardProduct/CardProduct'
import { GetProducts } from '../../container/GetProducts'

import { products } from '../../mocks/ProductListMock'

import {
   productlist__container,
   productlist__no_search,
   productlist__search
} from '@/styles/components/ProductList.module.scss'

export const ProductList = (props) => {

   const {
      query,
   } = props
   const [result, setResult] = useState(false)
   return(
      <section className={productlist__container}>
         {/* <div>
            <GetProducts query={query} />
         </div> */}
         {result &&
            <div className={productlist__no_search}>
               <h3>¡Escoge qué quieres hacer y dónde!</h3>
               <h2>Shops</h2>
            </div>
         }
         <div className={productlist__search}>
            <h2>Tipo de comercio <span></span> Lugar</h2>
            <ul>
               {
                  products.map((product, i) =>
                     <li key={i}>
                        <Link href={`/detail/${'product.id'}`}>
                           <a>
                              <CardProduct {...product} />
                           </a>
                        </Link>
                     </li>
                  )
               }
            </ul>
         </div>
      </section>
   )
}