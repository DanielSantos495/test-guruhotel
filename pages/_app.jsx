
import ApolloClient from 'apollo-boost' //Conection apollo server
import { ApolloProvider } from 'react-apollo'

import '@/styles/utils/global.scss'
import '@/styles/utils/variable.css'

import { Layout } from '@/components/Layout/Layout'

const token = 'VFcT6l2zbbI6oAlyuQjembQgHttjgRnLXElDEFgw7mM8-WudbWehlF1HAB5AUOeqepTiDNJ9qvw2wGbvskVtx8eQRCfzMNB6P0GtvSIBj00sUGuHcpZ25y1fHzEXYHYx'

const client = new ApolloClient({
   uri: 'https://api.yelp.com/v3/graphql',
   request: operation => {
      operation.setContext({
         headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/graphql'
         }
      })
   },
   fetchOptions: {
      mode: 'no-cors'
   }
})

const MyApp = ({ Component, pagesProps }) => {

   return (
      <ApolloProvider client={client}>
         <Layout>
            <Component { ...pagesProps } />
         </Layout>
      </ApolloProvider>
   )
}

export default MyApp