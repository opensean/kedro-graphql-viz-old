import type { PlainDataCatalog } from "@opensean/kedro-graphql-viz.entities.data-catalog"
import { DataCatalog } from "@opensean/kedro-graphql-viz.entities.data-catalog"
import { Parameter } from "@opensean/kedro-graphql-viz.entities.parameter"

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
    parameters: Parameter[],

    /**
     * status
     */
    status: string,

    /**
     * tags
     */
    tags: [],

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
    template: string,

    /**
     * description
     */
    describe: string,

    /**
     * nodes
     */
    nodes: []
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
      console.log(dataCatalog);
      this.id = id;
      this.name = name;
      this.version = version;
      this.parent = parent;
      this.dataCatalog = DataCatalog.from(dataCatalog);
      this.parameters = parameters.map((p) => Parameter.from(p));
      this.status = status;
      this.tags = tags;
      this.taskId = taskId;
      this.taskName = taskName;
      this.taskArgs = taskArgs;
      this.taskKwargs = taskKwargs;
      this.taskRequest = taskRequest;
      this.taskException = taskException;
      this.taskTraceback = taskTraceback;
      this.taskEinfo = taskEinfo;
      this.taskResult = taskResult;
      this.template = template;
      this.describe = describe;
      this.nodes = nodes;
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
      tags: this.tags,
      taskId: this.taskId,
      taskName: this.taskName,
      taskArgs: this.taskArgs,
      taskKwargs: this.taskKwargs,
      taskRequest: this.taskRequest,
      taskException: this.taskException,
      taskTraceback: this.taskTraceback,
      taskEinfo: this.taskEinfo,
      taskResult: this.taskResult,
      template: this.template,
      describe: this.describe,
      nodes: this.nodes,

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