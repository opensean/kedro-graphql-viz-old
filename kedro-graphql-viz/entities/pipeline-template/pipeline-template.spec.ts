import { ok } from 'node:assert';
import { PipelineTemplate } from './pipeline-template';
import { mockPipelineTemplate } from './pipeline-template.mock';

it('has a PipelineTemplate.from() method', () => {
  ok(PipelineTemplate.from);
});

it('tag.toObject() should be ' + JSON.stringify(mockPipelineTemplate), () => {
  expect(PipelineTemplate.from(mockPipelineTemplate).toObject()).toEqual(mockPipelineTemplate);
});