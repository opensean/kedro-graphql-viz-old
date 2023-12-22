
export type PlainDataset = {
  /**
   * name of the dataset
   */
  name: string;
  /**
   * the dataset configuration
   */
  config: {};
}

//{ firstName, lastName, age } : { firstName: string, lastName: string, age: number }
export class Dataset {
  constructor({name, config}: PlainDataset) 
  {
    this.name = name;
    this.config = config;
  }

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
    return new Dataset(plainDataset);
  }
}
