import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://0.0.0.0:5000/graphql',
  documents: './query.graphql',
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo'
      ]
    },
    'codegen.mock.ts':{
      plugins: [
        'typescript-mock-data'
      ]
    }
  }
}
 
export default config