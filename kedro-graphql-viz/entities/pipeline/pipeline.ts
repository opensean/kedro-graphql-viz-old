import type { PlainDataCatalog } from "@opensean/kedro-graphql-viz.entities.data-catalog"
import { DataCatalog } from "@opensean/kedro-graphql-viz.entities.data-catalog"
import { PlainParameter, Parameter } from "@opensean/kedro-graphql-viz.entities.parameter"
import { PlainNode, Node } from "@opensean/kedro-graphql-viz.entities.node"
import { PlainTag, Tag } from "@opensean/kedro-graphql-viz.entities.tag"
import { PlainPipelineTemplate, PipelineTemplate } from "@opensean/kedro-graphql-viz.entities.pipeline-template"

export type PlainPipeline = {
    /**
     * ID of the instance
     */
    id: string,

    /**
     * name of the instance
     */
    name: string,

    /**
     * version of the instance
     */
    version: string,

    /**
     * parent of the instance
     */
    parent: string,

    /**
     * data catalog
     */
    dataCatalog: PlainDataCatalog,

    /**
     * parameters
     */
    parameters: PlainParameter[],

    /**
     * status
     */
    status: string,

    /**
     * tags
     */
    tags: PlainTag[],

    /**
     * task id
     */
    taskId: string,

    /**
     * task name
     */
    taskName: string,

    /**
     * task args
     */
    taskArgs: string,

    /**
     * task kwargs
     */
    taskKwargs: string,

    /**
     * task request
     */
    taskRequest: string,

    /**
     * task exception
     */
    taskException: string,

    /**
     * task traceback
     */
    taskTraceback: string,

    /**
     * task exception information
     */
    taskEinfo: string,

    /**
     * task result
     */
    taskResult: string,

    /**
     * pipeline template
     */
    template: PlainPipelineTemplate,

    /**
     * description
     */
    describe: string,

    /**
     * nodes
     */
    nodes: PlainNode[]
}

export class Pipeline {
  constructor({
    id,
    name,
    version,
    parent,
    dataCatalog,
    parameters,
    status,
    tags,
    taskId,
    taskName,
    taskArgs,
    taskKwargs,
    taskRequest,
    taskException,
    taskTraceback,
    taskEinfo,
    taskResult,
    template,
    describe,
    nodes}: PlainPipeline


  ) {
      this.id = id;
      this.name = name;
      this.version = version;
      this.parent = parent;
      this.dataCatalog = DataCatalog.from(dataCatalog);
      this.parameters = parameters.map((p) => Parameter.from(p));
      this.status = status;
      this.tags = tags.map((t) => Tag.from(t));
      this.taskId = taskId;
      this.taskName = taskName;
      this.taskArgs = taskArgs;
      this.taskKwargs = taskKwargs;
      this.taskRequest = taskRequest;
      this.taskException = taskException;
      this.taskTraceback = taskTraceback;
      this.taskEinfo = taskEinfo;
      this.taskResult = taskResult;
      this.template = PipelineTemplate.from(template);
      this.describe = describe;
      this.nodes = nodes.map((n) => Node.from(n));
  }

  /**
   * serialize a Pipeline into
   * a serializable object.
   */
  toObject() {
    return {
      id: this.id,
      name: this.name,
      version: this.version,
      parent: this.parent,
      dataCatalog: this.dataCatalog.toObject(),
      parameters: this.parameters.map((p) => p.toObject()),
      status: this.status,
      tags: this.tags.map((t) => t.toObject()),
      taskId: this.taskId,
      taskName: this.taskName,
      taskArgs: this.taskArgs,
      taskKwargs: this.taskKwargs,
      taskRequest: this.taskRequest,
      taskException: this.taskException,
      taskTraceback: this.taskTraceback,
      taskEinfo: this.taskEinfo,
      taskResult: this.taskResult,
      template: this.template.toObject(),
      describe: this.describe,
      nodes: this.nodes.map((n) => n.toObject()),

    };
  }

  /**
   * create a Pipeline object from a 
   * plain object.
   */
  static from(plainPipeline: PlainPipeline) {
    return new Pipeline(
      plainPipeline)
  }
}