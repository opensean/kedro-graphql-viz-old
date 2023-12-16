import { ok } from 'node:assert';
import { DataCatalog } from './data-catalog';

import { mockDataCatalog } from './data-catalog.mock.ts';

it('has a DataCatalog.from() method', () => {
  ok(DataCatalog.from);
});

it('len of datasets should be 0', () => {
  expect(DataCatalog.from(mockDataCatalog).datasets.length).toEqual(0);
});

