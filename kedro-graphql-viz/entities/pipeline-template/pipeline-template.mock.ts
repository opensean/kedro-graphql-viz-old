import type { PlainPipelineTemplate } from './pipeline-template.js';
import { mockParameters } from '@opensean/kedro-graphql-viz.entities.parameter';
import { mockNodes } from '@opensean/kedro-graphql-viz.entities.node';

export const mockPipelineTemplate = {
  id: "100000000000000000000001",
  name: "example00",
  version: "0.1.0",
  describe: "#### Pipeline execution order ####\nInputs: parameters, params:example, text_in\n\necho_node\n\nOutputs: text_out\n##################################",
  nodes: mockNodes,
  parameters: mockParameters,
  inputs: [
    "text_in",
    "params:example",
    "parameters"
  ],
  outputs: [
    "text_out"
  ]
};

export const mockPipelineTemplates: PlainPipelineTemplate[] = [
  mockPipelineTemplate
];