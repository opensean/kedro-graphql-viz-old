import type { PlainPipeline } from './pipeline.js';
import { mockDataCatalog } from '@opensean/kedro-graphql-viz.entities.data-catalog';
import { mockParameters } from '@opensean/kedro-graphql-viz.entities.parameter';
import { mockNodes } from '@opensean/kedro-graphql-viz.entities.node';
import { mockTags } from '@opensean/kedro-graphql-viz.entities.tag';
import { mockPipelineTemplate } from '@opensean/kedro-graphql-viz.entities.pipeline-template';

export const mockPipeline = {
  id: "100000000000000000000001",
  name: "example00",
  version: "0.1.0",
  parent: "100000000000000000000000",
  dataCatalog: mockDataCatalog,
  parameters: mockParameters,
  status: "SUCCESS",
  tags: mockTags,
  taskId: "",
  taskName: "run_pipeline",
  taskArgs: "",
  taskKwargs: "",
  taskRequest: "",
  taskException: "",
  taskTraceback: "",
  taskEinfo: "",
  taskResult: "",
  template: mockPipelineTemplate,
  describe: "#### Pipeline execution order ####\nInputs: parameters, params:example, text_in\n\necho_node\n\nOutputs: text_out\n##################################",
  nodes: mockNodes
};

export const mockPipelines: PlainPipeline[] = [
    mockPipeline
];