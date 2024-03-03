import { render, screen } from "@testing-library/vue"

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

  console.log(aPipelines())
  server.listen()

  expect(BasicPipelines).toBeTruthy()

  render(BasicPipelines)
  
  const result = screen.getByText("_typename")

  server.close()

})

