
export type PlainDataCatalog = {
  datasets: []
  parameters: []
}

export class DataCatalog {
  constructor(
    /**
     * array of the DataSet objects.
     */
    readonly datasets: [],
    /**
     * array of the Parameter objects.
     */
    readonly parameters: []
  ) {}

  /**
   * serialize a DataCatalog into
   * a serializable object.
   */
  toObject() {
    return {
      datasets: this.datasets,
      parameters: this.parameters,
    };
  }

  /**
   * create a DataCatalog object from a 
   * plain object.
   */
  static from(plainDataCatalog: PlainDataCatalog) {
    return new DataCatalog(
      plainDataCatalog.datasets,
      plainDataCatalog.parameters
    );
  }
}
