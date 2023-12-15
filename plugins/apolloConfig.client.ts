import { createHttpLink, from, ApolloLink, split } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { provideApolloClient } from '@vue/apollo-composable'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocket } from "ws";

/**
 * See example: https://github.com/nuxt-modules/apollo/issues/442
 */
export default defineNuxtPlugin((nuxtApp) => {
  const envVars = useRuntimeConfig()
  const { $apollo }: any = nuxtApp

  // trigger the error hook on an error
  const errorLink = onError((err) => {
    nuxtApp.callHook('apollo:error', err) // must be called bc `@nuxtjs/apollo` will not do it anymore
  })

  // create an authLink and set authentication token if necessary
  // (Can not use nuxt apollo hook `apollo:auth` anymore bc `@nuxtjs/apollo` has no control anymore.)
  const authLink = setContext(async (_, { headers }) => {
    const someToken = '...'
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${someToken}`,
      },
    }
  })

  // create an customLink as example for an custom manual link
  const customLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
      return data
    })
  })

  // Default httpLink (main communication for apollo)
  const httpLink = createHttpLink({
    uri: `http://${window.location.hostname}:5000/graphql`,
    useGETForQueries: false,
  })

  // WebSocket link
  const wsLink = new GraphQLWsLink(
    createClient({
      webSocketImpl: WebSocket,
      url: `ws://${window.location.hostname}:5000/graphql`,
    }),
  );

  // Split link to handle both HTTP and WebSocket operations
  const splitLink = split(
    // split based on the operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    from([errorLink, authLink, customLink, httpLink])
  )

  $apollo.defaultClient.setLink(splitLink)

  // For using useQuery in `@vue/apollo-composable`
  provideApolloClient($apollo.defaultClient)
})