import { ok } from 'node:assert';
import { Dataset } from './dataset';

it('has a Dataset.from() method', () => {
  ok(Dataset.from);
});
