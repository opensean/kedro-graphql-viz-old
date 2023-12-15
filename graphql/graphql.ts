// Generic Queries

export const pipelinesQuery = gql`
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


export const pipelineTemplatesQuery = gql`
  query pipelineTemplates($limit: Int!, $cursor: String){
    pipelineTemplates(limit: $limit, cursor: $cursor) {
      pageMeta {
        nextCursor
        count
      }
      pipelineTemplates {
        describe
        id
        name
      }
    }
  }
`