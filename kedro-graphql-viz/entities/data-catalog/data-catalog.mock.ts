import type { PlainDataCatalog } from './data-catalog.js';
import { mockDataset } from '@opensean/kedro-graphql-viz.entities.dataset';

export const mockDataCatalog = {
  datasets: [mockDataset],
};


export const mockDataCatalogs: PlainDataCatalog[] = [
    mockDataCatalog,
];
