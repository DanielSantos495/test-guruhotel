import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import { Search } from '@/components/Search/Search'
import { GetProducts } from '../../container/GetProducts'

const GET_SEARCH = gql`
   query {
      search(term:"burrito",
      location:"san francisco") {
         total
         business {
            name
            rating
            review_count
            location {
               address1
               city
               state
               country
            }
         }
      }
   }
`

export const ProductList = () => {

   const [form, setForm] = useState({
      place: '',
      location: ''
   })

   const handleInput = e => {
      setForm({
         [e.target.name]: e.target.value
      })
   }

   const handleButton = e => {
      console.log('button search')
   }

   return(
      <section>
         <Search
            form={form}
            handleInput={handleInput}
            handleButton={handleButton}
         />
         <div>
            <GetProducts query={GET_SEARCH} />
         </div>
         <div>
            <h2>¡Escoge qué quieres hacer y dónde!</h2>
            <h3>Shops</h3>
         </div>
      </section>
   )
}