import { ok } from 'node:assert';
import { PipelineTemplate } from './pipeline-template';

it('has a PipelineTemplate.from() method', () => {
  ok(PipelineTemplate.from);
});
