import { ok } from 'node:assert';
import { Dataset } from './dataset';

import { mockDataset } from './dataset.mock';

it('has a Dataset.from() method', () => {
  ok(Dataset.from);
});

it('name of dataset should be example01', () => {
  expect(Dataset.from(mockDataset).name).toEqual("example01");
});

it('dataset.toObject() should be ' + JSON.stringify(mockDataset), () => {
  expect(Dataset.from(mockDataset).toObject()).toEqual(mockDataset);
});