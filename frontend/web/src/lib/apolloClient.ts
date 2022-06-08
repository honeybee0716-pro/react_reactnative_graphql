import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const jwt = localStorage.getItem('jwt')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: jwt ? `Bearer ${jwt}` : ''
    }
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default apolloClient
