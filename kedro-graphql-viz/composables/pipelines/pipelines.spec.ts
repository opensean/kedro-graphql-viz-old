import { render } from "@testing-library/vue"

import { graphql, HttpResponse } from 'msw'

import { setupServer } from 'msw/node'

import { aPipelines } from "@opensean/kedro-graphql-viz.modules.codegen"


import { BasicPipelines } from './pipelines.composition'


const server = setupServer(

  graphql.query('pipelines', ({query, variables}) => {
    console.log('INTERCEPTED a "pipelines" GraphQL query:', query)
    return HttpResponse.json({
      data: {
        pipelines: {
          pipelines: aPipelines,
          pageMeta: {
            count: 1,
            nextCursor: null
          }          
        }
      }
    })
  })

)


test('basic case', async () => {

  server.listen()

  expect(BasicPipelines).toBeTruthy()

  const { findByText } = render(BasicPipelines)

  const result = await findByText('_typename')

  expect(result).toBeTruthy()

  server.close()

})

