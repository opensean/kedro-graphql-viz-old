import { ok } from 'node:assert';
import { Parameter } from './parameter';
import { mockParameter } from './parameter.mock';

it('has a Parameter.from() method', () => {
  ok(Parameter.from);
});

it('Parameter.from() should be ' + JSON.stringify(mockParameter), () => {
  expect(Parameter.from(mockParameter).toObject()).toEqual(mockParameter);
});
