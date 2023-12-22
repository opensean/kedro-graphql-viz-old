
export type PlainPipelineTemplate = {
  name: string;
}

export class PipelineTemplate {
  constructor(
    /**
     * name of the instance
     */
    readonly name: string
  ) {}

  /**
   * serialize a PipelineTemplate into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name
    };
  }

  /**
   * create a PipelineTemplate object from a 
   * plain object.
   */
  static from(plainPipelineTemplate: PlainPipelineTemplate) {
    return new PipelineTemplate(
      plainPipelineTemplate.name
    );
  }
}
