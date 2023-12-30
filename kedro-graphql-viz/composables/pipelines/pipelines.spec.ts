import { render } from "@testing-library/vue"

import { graphql, HttpResponse } from 'msw'

import { setupServer } from 'msw/node'

import { mockPipelines } from '@opensean/kedro-graphql-viz.entities.pipeline'


import { BasicPipelines } from './pipelines.composition'


const server = setupServer(

  graphql.query('pipelines', ({query, variables}) => {

    return HttpResponse.json({
      data: {
        pipelines: {
          pipelines: mockPipelines,
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

  //const result = await findByText('Barry Allen')

  //expect(result).toBeTruthy()

  server.close()

})

