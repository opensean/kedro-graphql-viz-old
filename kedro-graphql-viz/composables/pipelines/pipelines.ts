import { ref } from 'vue';
import gql from 'graphql-tag';
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { apolloClient } from '@opensean/kedro-graphql-viz.composables.apollo-client';
import { Pipeline } from '@opensean/kedro-graphql-viz.entities.pipeline';

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





export const usePipelines = ({ 
  query = GET_PIPELINES,
  variables = { limit: 10, cursor: null, filter: null},
  options = {errorPolicy: 'all', notifyOnNetworkStatusChange: true}
}) => {

  const pipelines = ref([]);
  const count = ref(0);
  const loading = ref(true);
  const cursors = ref([null,null])
  const { onResult, onError } = provideApolloClient(apolloClient)(() => useQuery(query, variables, options))

  onResult(queryResult => {
    console.log(queryResult)
    if(queryResult.data){
      pipelines.value = queryResult.data.pipelines.pipelines.map((p) => Pipeline.from(p))
      if (count.value == 0){
        count.value = queryResult.data.pipelines.pageMeta.count
      }
      loading.value = queryResult.loading
      if (!cursors.value.includes(queryResult.data.pipelines.pageMeta.nextCursor)){
        cursors.value.push(queryResult.data.pipelines.pageMeta.nextCursor)
      }
    }
  })

  onError(error => {
      console.log(error.graphQLErrors)
      console.log(error.networkError)
  })


  return {
    pipelines: pipelines, 
    count: count, 
    cursors: cursors, 
    loading: loading
  }
}
