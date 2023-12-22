import type { PlainPipeline } from './pipeline.js';
import { mockDataCatalog } from '@opensean/kedro-graphql-viz.entities.data-catalog';
export const mockPipeline = {
  id: "100000000000000000000001",
  name: "example00",
  version: "0.1.0",
  parent: "100000000000000000000000",
  dataCatalog: mockDataCatalog,
  parameters: [],
  status: "SUCCESS",
  tags: [{"name":"author", "value": "opensean"}],
  taskId: "",
  taskName: "run_pipeline",
  taskArgs: "",
  taskKwargs: "",
  taskRequest: "",
  taskException: "",
  taskTraceback: "",
  taskEinfo: "",
  taskResult: "",
  template: "",
  describe: "#### Pipeline execution order ####\nInputs: parameters, params:example, text_in\n\necho_node\n\nOutputs: text_out\n##################################",
  nodes: []
};

export const mockPiplines: PlainPipeline[] = [
    mockPipeline
];