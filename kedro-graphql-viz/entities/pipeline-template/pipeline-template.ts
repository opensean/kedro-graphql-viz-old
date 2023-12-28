import { PlainParameter, Parameter } from "@opensean/kedro-graphql-viz.entities.parameter"
import { PlainNode, Node } from "@opensean/kedro-graphql-viz.entities.node"

export type PlainPipelineTemplate = {
  id: string;
  name: string;
  version: string;
  describe: string;
  nodes: PlainNode[];
  parameters: PlainParameter[];
  inputs: string[];
  outputs: string[];
}

export class PipelineTemplate {
  constructor({
    id,
    name,
    version,
    describe,
    nodes,
    parameters,
    inputs,
    outputs
  }: PlainPipelineTemplate) {
    this.id = id;
    this.name = name;
    this.version = version;
    this.describe = describe;
    this.nodes = nodes.map((n) => Node.from(n));
    this.parameters = parameters.map((p) => Parameter.from(p));
    this.inputs = inputs;
    this.outputs = outputs;
  }

  /**
   * serialize a PipelineTemplate into
   * a serializable object.
   */
  toObject() {
    return {
      id: this.id,
      name: this.name,
      version: this.version,
      describe: this.describe,
      nodes: this.nodes.map((n) => n.toObject()),
      parameters: this.parameters.map((p) => p.toObject()),
      inputs: this.inputs,
      outputs: this.outputs
    };
  }

  /**
   * create a PipelineTemplate object from a 
   * plain object.
   */
  static from(plainPipelineTemplate: PlainPipelineTemplate) {
    return new PipelineTemplate(
      plainPipelineTemplate
    );
  }
}
