import { ok } from 'node:assert';
import { Pipeline } from './pipeline';
import { mockPipeline } from './pipeline.mock';

it('has a Pipeline.from() method', () => {
  ok(Pipeline.from);
});

it('pipeline.toObject() should be ' + JSON.stringify(mockPipeline), () => {
  console.log(mockPipeline);
  expect(Pipeline.from(mockPipeline).toObject()).toEqual(mockPipeline);
});