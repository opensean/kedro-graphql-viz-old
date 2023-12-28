
export type PlainNode = {
  /**
   * name of the node
   */
  name: string;
  /**
   * node inputs
   */
  inputs: string[];
  /**
   * node outputs
   */
  outputs: string[];
  /**
   * node tags
   */
  tags: string[];
}

export class Node {
  constructor({
    name,
    inputs,
    outputs,
    tags
  }: PlainNode
  ) {
    this.name = name;
    this.inputs = inputs;
    this.outputs = outputs;
    this.tags = tags;
  }

  /**
   * serialize a Node into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      inputs: this.inputs,
      outputs: this.outputs,
      tags: this.tags
    };
  }

  /**
   * create a Node object from a 
   * plain object.
   */
  static from(plainNode: PlainNode) {
    return new Node(
      plainNode
    );
  }
}
