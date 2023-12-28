import type { PlainDataset } from '@opensean/kedro-graphql-viz.entities.dataset';
import { Dataset } from '@opensean/kedro-graphql-viz.entities.dataset';

export type PlainDataCatalog = {
  /**
  * array of the DataSet objects.
  */
  datasets: PlainDataset[]
}

export class DataCatalog {
  constructor(
      /**
      * array of the DataSet objects.
      */
      {datasets}: PlainDataCatalog,
  ) {
    this.datasets = datasets.map((dataset) => Dataset.from(dataset));
  }


  /**
   * serialize a DataCatalog into
   * a serializable object.
   */
  toObject() {
    return {
      datasets: this.datasets.map((dataset) => dataset.toObject()),
    };
  }

  /**
   * create a DataCatalog object from a 
   * plain object.
   */
  static from(plainDataCatalog: PlainDataCatalog) {
    return new DataCatalog(plainDataCatalog);
  }
}
