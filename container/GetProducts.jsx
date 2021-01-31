import React from 'react'
import { Query } from 'react-apollo'


export const GetProducts = ({ query }) => {

   return(
      <Query query={query}>
         {
            (props) => {
               console.log(props, 'response')
               return <p>Ay vamos!</p>
            }
         }
      </Query>
   )
}