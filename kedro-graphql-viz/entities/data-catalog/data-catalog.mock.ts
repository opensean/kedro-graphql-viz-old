import type { PlainDataCatalog } from './data-catalog.js';

export const mockDataCatalog: PlainDataCatalog = {
  datasets: [],
  parameters: []
};

export const mockDataCatalogs: PlainDataCatalog[] = [
  [
    {
      datasets: [],
      parameters: []
    },
    mockDataCatalog,
  ]
];