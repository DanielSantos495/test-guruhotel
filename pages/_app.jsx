
import ApolloClient from 'apollo-boost' //Conection apollo server
import { ApolloProvider } from 'react-apollo'

import '@/styles/utils/global.scss'
import '@/styles/utils/variable.css'

import { Layout } from '@/components/Layout/Layout'

const token = 'LRqTKdHPKl2Gi7dH0gEQBrAQf-54LDOWQgVUi_ZX8b4v2GIKFnDVrbTmJZPKZg0veTymiZfEaF5hUxSXISZPkGw9IEI7GScx8UuENzNdopYbPZ_B0gcjYAqrv2sVYHYx'

const client = new ApolloClient({
   uri: 'https://api.yelp.com/v3',
   request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
          AccessControlAllowOrigin: 'no-cors'
        }
      })
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