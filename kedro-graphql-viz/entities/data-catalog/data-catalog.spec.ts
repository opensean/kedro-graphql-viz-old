import { ok } from 'node:assert';
import { DataCatalog } from './data-catalog';
import { mockDataCatalog } from './data-catalog.mock';

it('has a DataCatalog.from() method', () => {
  ok(DataCatalog.from);
});

it('len of datasets should be 1', () => {
  expect(DataCatalog.from(mockDataCatalog).datasets.length).toEqual(1);
});

it('dataset should have a name', () => {
  ok(DataCatalog.from(mockDataCatalog).datasets[0].name);
});

it('dataCatalog.toObject() should be ' + JSON.stringify(mockDataCatalog), () => {
  expect(DataCatalog.from(mockDataCatalog).toObject()).toEqual(mockDataCatalog);
});

