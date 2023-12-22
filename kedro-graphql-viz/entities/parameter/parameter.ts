
export type PlainParameter = {
  name: string;
}

export class Parameter {
  constructor(
    /**
     * name of the parameter
     */
    readonly name: string,
    /**
     * value of the parameter
     */
    readonly value: string
  ) {
    this.name = name;
    this.value = value;
  }

  /**
   * serialize a Parameter into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      value: this.value
    };
  }

  /**
   * create a Parameter object from a 
   * plain object.
   */
  static from(plainParameter: PlainParameter) {
    return new Parameter(
      plainParameter.name,
      plainParameter.value,
    );
  }
}
