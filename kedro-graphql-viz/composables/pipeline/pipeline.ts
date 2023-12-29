import { ref } from 'vue';
import gql from 'graphql-tag';
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { apolloClient } from '@opensean/kedro-graphql-viz.composables.apollo-client'
import { PlainPipeline, Pipeline } from '@opensean/kedro-graphql-viz.entities.pipeline'

const GET_PIPELINES = gql`
  query pipelines($limit: Int!, $filter: [String!], $cursor: String) {
      pipelines(limit: $limit, cursor:$cursor, filter: $filter) {
        pageMeta {
          nextCursor
          count
        }
        pipelines {
          id
          name
          status
          parameters {
            name
            type
            value
          }
          dataCatalog {
            name
            config
          }
          tags {
            key
            value
          }
        }
      }
    }
`

export const usePipelines = ({ variables = ref({ limit: itemsPerPage, cursor: nextCursor, filter: searchInput}),
                               options = {errorPolicy: 'all', notifyOnNetworkStatusChange: true}}) => {
  const query = provideApolloClient(apolloClient)(() => useQuery(GET_PIPELINES))
  return query.result.value
}