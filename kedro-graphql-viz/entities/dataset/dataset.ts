
export type PlainDataset = {
  name: string;
  config: {};
}

export class Dataset {
  constructor(
    /**
     * name of the dataset
     */
    readonly name: string

    /**
     * the dataset configuration
     */
    readonly config: {}
  ) {}

  /**
   * serialize a Dataset into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      config: this.config
    };
  }

  /**
   * create a Dataset object from a 
   * plain object.
   */
  static from(plainDataset: PlainDataset) {
    return new Dataset(
      plainDataset.name,
      plainDataset.config
    );
  }
}
