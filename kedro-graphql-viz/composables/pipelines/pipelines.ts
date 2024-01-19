import { ref, computed } from 'vue';
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { apolloClient } from '@opensean/kedro-graphql-viz.composables.apollo-client';
import { graphql } from '@opensean/kedro-graphql-viz.modules.codegen';
import gql from 'graphql-tag';

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
} = {}) => {
  const count = ref(0);
  const loading = ref(true);
  const cursors = ref([null,null])
  console.log(graphql(`
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
  `));
  //const { result, onResult, onError } = provideApolloClient(apolloClient)(() => useQuery(query, variables, options))
  const { result } = provideApolloClient(apolloClient)(() => useQuery(query, variables, options))
  const pipelines = computed(() => {
     console.log(result)
     return result.value?.pipelines ?? []}
     );

  //onResult(queryResult => {
  //  console.log(queryResult)
  //  //if(queryResult.data){
  //  //  pipelines.value = queryResult.data.pipelines.pipelines.map((p) => Pipeline.from(p))
  //  //  if (count.value == 0){
  //  //    count.value = queryResult.data.pipelines.pageMeta.count
  //  //  }
  //  //  loading.value = queryResult.loading
  //  //  if (!cursors.value.includes(queryResult.data.pipelines.pageMeta.nextCursor)){
  //  //    cursors.value.push(queryResult.data.pipelines.pageMeta.nextCursor)
  //  //  }
  //  //}
  //})

  //onError(error => {
  //    console.log(error)
  //    //console.log(error.graphQLErrors)
  //    //console.log(error.networkError)
  //})


  return {
    pipelines: pipelines, 
    count: count, 
    cursors: cursors, 
    loading: loading
  }
}
