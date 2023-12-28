
export type PlainTag = {
  /**
   * name of tag
   */
  name: string;
  /**
   * value of tag
   */
  value: string;
}

export class Tag {
  constructor({
    name,
    value}: PlainTag
  ) {
    this.name = name;
    this.value = value;
  }

  /**
   * serialize a Tag into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      value: this.value
    };
  }

  /**
   * create a Tag object from a 
   * plain object.
   */
  static from(plainTag: PlainTag) {
    return new Tag(
      plainTag
    );
  }
}
