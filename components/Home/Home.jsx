import React, { useState } from 'react'
import { gql } from 'apollo-boost'

import { Search } from '@/components/Search/Search'
import { ProductList } from '@/components/ProductList/ProductList'

const GET_SEARCH = gql`
   query getSearch {
      business(id: "garaje-san-francisco") {
         name
         id
         alias
         rating
         url
      }
   }
`

export const Home = () => {

   const [form, setForm] = useState({
      place: '',
      location: ''
   })

   const handleInput = e => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const handleButton = e => {
      console.log('button search')
   }

   return(
      <>
         <Search
            form={form}
            handleInput={handleInput}
            handleButton={handleButton}
         />
         <ProductList
            query={GET_SEARCH}
         />
      </>
   )
}