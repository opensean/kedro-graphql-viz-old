
export const aDataSet = (overrides?: Partial<DataSet>): { __typename: 'DataSet' } & DataSet => {
    return {
        __typename: 'DataSet',
        config: overrides && overrides.hasOwnProperty('config') ? overrides.config! : 'fugiat',
        credentials: overrides && overrides.hasOwnProperty('credentials') ? overrides.credentials! : 'et',
        filepath: overrides && overrides.hasOwnProperty('filepath') ? overrides.filepath! : 'assumenda',
        loadArgs: overrides && overrides.hasOwnProperty('loadArgs') ? overrides.loadArgs! : [aParameter()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nam',
        saveArgs: overrides && overrides.hasOwnProperty('saveArgs') ? overrides.saveArgs! : [aParameter()],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'officiis',
    };
};

export const aDataSetInput = (overrides?: Partial<DataSetInput>): DataSetInput => {
    return {
        config: overrides && overrides.hasOwnProperty('config') ? overrides.config! : 'officiis',
        credentials: overrides && overrides.hasOwnProperty('credentials') ? overrides.credentials! : 'laborum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'explicabo',
    };
};

export const aMutation = (overrides?: Partial<Mutation>): { __typename: 'Mutation' } & Mutation => {
    return {
        __typename: 'Mutation',
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'eum',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipeline(),
    };
};

export const aNode = (overrides?: Partial<Node>): { __typename: 'Node' } & Node => {
    return {
        __typename: 'Node',
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : ['porro'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'perferendis',
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : ['exercitationem'],
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : ['et'],
    };
};

export const aPageMeta = (overrides?: Partial<PageMeta>): { __typename: 'PageMeta' } & PageMeta => {
    return {
        __typename: 'PageMeta',
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 645,
        nextCursor: overrides && overrides.hasOwnProperty('nextCursor') ? overrides.nextCursor! : 'earum',
    };
};

export const aParameter = (overrides?: Partial<Parameter>): { __typename: 'Parameter' } & Parameter => {
    return {
        __typename: 'Parameter',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'facere',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ParameterType.Boolean,
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'assumenda',
    };
};

export const aParameterInput = (overrides?: Partial<ParameterInput>): ParameterInput => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'rerum',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ParameterType.Boolean,
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'adipisci',
    };
};

export const aPipeline = (overrides?: Partial<Pipeline>): { __typename: 'Pipeline' } & Pipeline => {
    return {
        __typename: 'Pipeline',
        dataCatalog: overrides && overrides.hasOwnProperty('dataCatalog') ? overrides.dataCatalog! : [aDataSet()],
        describe: overrides && overrides.hasOwnProperty('describe') ? overrides.describe! : 'minus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'debitis',
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : [aDataSet()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'veritatis',
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [aNode()],
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : [aDataSet()],
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameter()],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'aut',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : [aTag()],
        taskArgs: overrides && overrides.hasOwnProperty('taskArgs') ? overrides.taskArgs! : 'iste',
        taskEinfo: overrides && overrides.hasOwnProperty('taskEinfo') ? overrides.taskEinfo! : 'non',
        taskException: overrides && overrides.hasOwnProperty('taskException') ? overrides.taskException! : 'atque',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'consequatur',
        taskKwargs: overrides && overrides.hasOwnProperty('taskKwargs') ? overrides.taskKwargs! : 'quis',
        taskName: overrides && overrides.hasOwnProperty('taskName') ? overrides.taskName! : 'est',
        taskRequest: overrides && overrides.hasOwnProperty('taskRequest') ? overrides.taskRequest! : 'nesciunt',
        taskResult: overrides && overrides.hasOwnProperty('taskResult') ? overrides.taskResult! : 'eos',
        taskTraceback: overrides && overrides.hasOwnProperty('taskTraceback') ? overrides.taskTraceback! : 'sunt',
        template: overrides && overrides.hasOwnProperty('template') ? overrides.template! : aPipelineTemplate(),
    };
};

export const aPipelineEvent = (overrides?: Partial<PipelineEvent>): { __typename: 'PipelineEvent' } & PipelineEvent => {
    return {
        __typename: 'PipelineEvent',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ad',
        result: overrides && overrides.hasOwnProperty('result') ? overrides.result! : 'et',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'debitis',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'nisi',
        timestamp: overrides && overrides.hasOwnProperty('timestamp') ? overrides.timestamp! : 'et',
        traceback: overrides && overrides.hasOwnProperty('traceback') ? overrides.traceback! : 'ea',
    };
};

export const aPipelineInput = (overrides?: Partial<PipelineInput>): PipelineInput => {
    return {
        dataCatalog: overrides && overrides.hasOwnProperty('dataCatalog') ? overrides.dataCatalog! : [aDataSetInput()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'enim',
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameterInput()],
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : [aTagInput()],
    };
};

export const aPipelineLogMessage = (overrides?: Partial<PipelineLogMessage>): { __typename: 'PipelineLogMessage' } & PipelineLogMessage => {
    return {
        __typename: 'PipelineLogMessage',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'pariatur',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'aliquid',
        messageId: overrides && overrides.hasOwnProperty('messageId') ? overrides.messageId! : 'ratione',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'dolores',
        time: overrides && overrides.hasOwnProperty('time') ? overrides.time! : 'libero',
    };
};

export const aPipelineTemplate = (overrides?: Partial<PipelineTemplate>): { __typename: 'PipelineTemplate' } & PipelineTemplate => {
    return {
        __typename: 'PipelineTemplate',
        describe: overrides && overrides.hasOwnProperty('describe') ? overrides.describe! : 'quam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quae',
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : [aDataSet()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'molestiae',
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [aNode()],
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : [aDataSet()],
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameter()],
    };
};

export const aPipelineTemplates = (overrides?: Partial<PipelineTemplates>): { __typename: 'PipelineTemplates' } & PipelineTemplates => {
    return {
        __typename: 'PipelineTemplates',
        pageMeta: overrides && overrides.hasOwnProperty('pageMeta') ? overrides.pageMeta! : aPageMeta(),
        pipelineTemplates: overrides && overrides.hasOwnProperty('pipelineTemplates') ? overrides.pipelineTemplates! : [aPipelineTemplate()],
    };
};

export const aPipelines = (overrides?: Partial<Pipelines>): { __typename: 'Pipelines' } & Pipelines => {
    return {
        __typename: 'Pipelines',
        pageMeta: overrides && overrides.hasOwnProperty('pageMeta') ? overrides.pageMeta! : aPageMeta(),
        pipelines: overrides && overrides.hasOwnProperty('pipelines') ? overrides.pipelines! : [aPipeline()],
    };
};

export const aQuery = (overrides?: Partial<Query>): { __typename: 'Query' } & Query => {
    return {
        __typename: 'Query',
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'quo',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipeline(),
        pipelineTemplate: overrides && overrides.hasOwnProperty('pipelineTemplate') ? overrides.pipelineTemplate! : aPipelineTemplate(),
        pipelineTemplates: overrides && overrides.hasOwnProperty('pipelineTemplates') ? overrides.pipelineTemplates! : aPipelineTemplates(),
        pipelines: overrides && overrides.hasOwnProperty('pipelines') ? overrides.pipelines! : aPipelines(),
    };
};

export const aSubscription = (overrides?: Partial<Subscription>): { __typename: 'Subscription' } & Subscription => {
    return {
        __typename: 'Subscription',
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'esse',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipelineEvent(),
        pipelineLogs: overrides && overrides.hasOwnProperty('pipelineLogs') ? overrides.pipelineLogs! : aPipelineLogMessage(),
    };
};

export const aTag = (overrides?: Partial<Tag>): { __typename: 'Tag' } & Tag => {
    return {
        __typename: 'Tag',
        key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'et',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'culpa',
    };
};

export const aTagInput = (overrides?: Partial<TagInput>): TagInput => {
    return {
        key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'ut',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'nostrum',
    };
};
