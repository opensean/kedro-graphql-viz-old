import type { PlainDataset } from './dataset.js';

export const mockDataset = {
  name:'example01',
  config:  {"type": "text.TextDataSet", "filepath": "/tmp/text01.txt"}
};

export const mockDatsets: PlainDataset[] = [
  {
    name: "example00",
    config: {"type": "text.TextDataset", "filepath": "/tmp/text00.txt"},
  },
  mockDataset,
];