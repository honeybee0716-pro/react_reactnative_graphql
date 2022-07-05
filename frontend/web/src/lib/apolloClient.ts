import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-community/async-storage'

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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    })

    if (
      graphQLErrors.some(({ message }) => {
        if (message.includes('JSON Web Token is not valid.')) {
          return true
        }
        return false
      })
    ) {
      if (!document.location.href.includes('/sign-in')) {
        // will need a solution for mobile here that doesn't involve document, unless we keep this in the web directory
        // and never move it to the shared directory, but would be nice if we could find a way to move this apollo client
        // creation to the shared directory, that way we don't need to create a seperate client for the mobile app
        document.location.href = '/sign-in'
      }
    }
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authFlowLink = authLink.concat(errorLink)

const link = authFlowLink.concat(httpLink)

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default apolloClient
