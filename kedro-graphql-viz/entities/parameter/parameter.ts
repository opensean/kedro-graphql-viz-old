
export type PlainParameter = {
  /**
   * name of the parameter
   */
  name: string;
  /**
   * value of the parameter
   */
  value: string;
  /**
   * type used to cast parameter
   */
  type: string;
}

export class Parameter {
  constructor(
    {name,
     value,
     type
    }: PlainParameter
  ) {
    this.name = name;
    this.value = value;
    this.type = type;
  }

  /**
   * serialize a Parameter into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      value: this.value,
      type: this.type
    };
  }

  /**
   * create a Parameter object from a 
   * plain object.
   */
  static from(plainParameter: PlainParameter) {
    return new Parameter(
      plainParameter
    );
  }
}
