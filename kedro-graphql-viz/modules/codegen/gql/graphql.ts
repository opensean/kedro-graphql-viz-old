/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

export type DataSet = {
  __typename?: 'DataSet';
  config?: Maybe<Scalars['String']['output']>;
  credentials?: Maybe<Scalars['String']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  filepath?: Maybe<Scalars['String']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  loadArgs?: Maybe<Array<Parameter>>;
  name: Scalars['String']['output'];
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  saveArgs?: Maybe<Array<Parameter>>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  type?: Maybe<Scalars['String']['output']>;
};

export type DataSetInput = {
  config?: InputMaybe<Scalars['String']['input']>;
  credentials?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  helloWorld: Scalars['String']['output'];
  /** Execute a pipeline. */
  pipeline: Pipeline;
};


export type MutationHelloWorldArgs = {
  message?: Scalars['String']['input'];
};


export type MutationPipelineArgs = {
  pipeline: PipelineInput;
};

export type Node = {
  __typename?: 'Node';
  inputs: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  outputs: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
};

export type PageMeta = {
  __typename?: 'PageMeta';
  /** Total number of items. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The next cursor to continue with. */
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type Parameter = {
  __typename?: 'Parameter';
  name: Scalars['String']['output'];
  type?: Maybe<ParameterType>;
  value: Scalars['String']['output'];
};

export type ParameterInput = {
  name: Scalars['String']['input'];
  type?: InputMaybe<ParameterType>;
  value: Scalars['String']['input'];
};

export enum ParameterType {
  Boolean = 'BOOLEAN',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  String = 'STRING'
}

export type Pipeline = {
  __typename?: 'Pipeline';
  dataCatalog?: Maybe<Array<DataSet>>;
  describe: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  inputs?: Maybe<Array<DataSet>>;
  name: Scalars['String']['output'];
  nodes: Array<Node>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  outputs?: Maybe<Array<DataSet>>;
  parameters: Array<Parameter>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  taskArgs?: Maybe<Scalars['String']['output']>;
  taskEinfo?: Maybe<Scalars['String']['output']>;
  taskException?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  taskKwargs?: Maybe<Scalars['String']['output']>;
  taskName?: Maybe<Scalars['String']['output']>;
  taskRequest?: Maybe<Scalars['String']['output']>;
  taskResult?: Maybe<Scalars['String']['output']>;
  taskTraceback?: Maybe<Scalars['String']['output']>;
  template: PipelineTemplate;
};

export type PipelineEvent = {
  __typename?: 'PipelineEvent';
  id: Scalars['String']['output'];
  result?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  traceback?: Maybe<Scalars['String']['output']>;
};

/** PipelineInput */
export type PipelineInput = {
  dataCatalog?: InputMaybe<Array<DataSetInput>>;
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Array<ParameterInput>>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type PipelineLogMessage = {
  __typename?: 'PipelineLogMessage';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

/** PipelineTemplates are definitions of Pipelines.  They represent the supported interface for executing a Pipeline. */
export type PipelineTemplate = {
  __typename?: 'PipelineTemplate';
  describe: Scalars['String']['output'];
  /** ID of the pipeline template. */
  id: Scalars['String']['output'];
  inputs: Array<DataSet>;
  name: Scalars['String']['output'];
  nodes: Array<Node>;
  outputs: Array<DataSet>;
  parameters: Array<Parameter>;
};

export type PipelineTemplates = {
  __typename?: 'PipelineTemplates';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of pipeline templates. */
  pipelineTemplates: Array<PipelineTemplate>;
};

export type Pipelines = {
  __typename?: 'Pipelines';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of pipeline instances. */
  pipelines: Array<Pipeline>;
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String']['output'];
  /** Get a pipeline instance. */
  pipeline: Pipeline;
  /** Get a pipeline template. */
  pipelineTemplate: PipelineTemplate;
  /** Get a list of pipeline templates. */
  pipelineTemplates: PipelineTemplates;
  /** Get a list of pipeline instances. */
  pipelines: Pipelines;
};


export type QueryPipelineArgs = {
  id: Scalars['String']['input'];
};


export type QueryPipelineTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryPipelineTemplatesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};


export type QueryPipelinesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  limit: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  helloWorld: Scalars['String']['output'];
  /** Subscribe to pipeline events. */
  pipeline: PipelineEvent;
  /** Subscribe to pipeline logs. */
  pipelineLogs: PipelineLogMessage;
};


export type SubscriptionHelloWorldArgs = {
  message?: Scalars['String']['input'];
  target?: Scalars['Int']['input'];
};


export type SubscriptionPipelineArgs = {
  id: Scalars['String']['input'];
  interval?: Scalars['Float']['input'];
};


export type SubscriptionPipelineLogsArgs = {
  id: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TagInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PipelinesQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type PipelinesQuery = { __typename?: 'Query', pipelines: { __typename?: 'Pipelines', pageMeta: { __typename?: 'PageMeta', nextCursor?: string | null, count?: number | null }, pipelines: Array<{ __typename?: 'Pipeline', id?: any | null, name: string, status?: string | null, parameters: Array<{ __typename?: 'Parameter', name: string, type?: ParameterType | null, value: string }>, dataCatalog?: Array<{ __typename?: 'DataSet', name: string, config?: string | null }> | null, tags?: Array<{ __typename?: 'Tag', key: string, value: string }> | null }> } };


export const PipelinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pipelines"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pipelines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pipelines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dataCatalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"config"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PipelinesQuery, PipelinesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

export type DataSet = {
  __typename?: 'DataSet';
  config?: Maybe<Scalars['String']['output']>;
  credentials?: Maybe<Scalars['String']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  filepath?: Maybe<Scalars['String']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  loadArgs?: Maybe<Array<Parameter>>;
  name: Scalars['String']['output'];
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  saveArgs?: Maybe<Array<Parameter>>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  type?: Maybe<Scalars['String']['output']>;
};

export type DataSetInput = {
  config?: InputMaybe<Scalars['String']['input']>;
  credentials?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  helloWorld: Scalars['String']['output'];
  /** Execute a pipeline. */
  pipeline: Pipeline;
};


export type MutationHelloWorldArgs = {
  message?: Scalars['String']['input'];
};


export type MutationPipelineArgs = {
  pipeline: PipelineInput;
};

export type Node = {
  __typename?: 'Node';
  inputs: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  outputs: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
};

export type PageMeta = {
  __typename?: 'PageMeta';
  /** Total number of items. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The next cursor to continue with. */
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type Parameter = {
  __typename?: 'Parameter';
  name: Scalars['String']['output'];
  type?: Maybe<ParameterType>;
  value: Scalars['String']['output'];
};

export type ParameterInput = {
  name: Scalars['String']['input'];
  type?: InputMaybe<ParameterType>;
  value: Scalars['String']['input'];
};

export enum ParameterType {
  Boolean = 'BOOLEAN',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  String = 'STRING'
}

export type Pipeline = {
  __typename?: 'Pipeline';
  dataCatalog?: Maybe<Array<DataSet>>;
  describe: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  inputs?: Maybe<Array<DataSet>>;
  name: Scalars['String']['output'];
  nodes: Array<Node>;
  /** @deprecated see https://github.com/opensean/kedro-graphql/blob/main/README.md#deprecations */
  outputs?: Maybe<Array<DataSet>>;
  parameters: Array<Parameter>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  taskArgs?: Maybe<Scalars['String']['output']>;
  taskEinfo?: Maybe<Scalars['String']['output']>;
  taskException?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  taskKwargs?: Maybe<Scalars['String']['output']>;
  taskName?: Maybe<Scalars['String']['output']>;
  taskRequest?: Maybe<Scalars['String']['output']>;
  taskResult?: Maybe<Scalars['String']['output']>;
  taskTraceback?: Maybe<Scalars['String']['output']>;
  template: PipelineTemplate;
};

export type PipelineEvent = {
  __typename?: 'PipelineEvent';
  id: Scalars['String']['output'];
  result?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  traceback?: Maybe<Scalars['String']['output']>;
};

/** PipelineInput */
export type PipelineInput = {
  dataCatalog?: InputMaybe<Array<DataSetInput>>;
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Array<ParameterInput>>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type PipelineLogMessage = {
  __typename?: 'PipelineLogMessage';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

/** PipelineTemplates are definitions of Pipelines.  They represent the supported interface for executing a Pipeline. */
export type PipelineTemplate = {
  __typename?: 'PipelineTemplate';
  describe: Scalars['String']['output'];
  /** ID of the pipeline template. */
  id: Scalars['String']['output'];
  inputs: Array<DataSet>;
  name: Scalars['String']['output'];
  nodes: Array<Node>;
  outputs: Array<DataSet>;
  parameters: Array<Parameter>;
};

export type PipelineTemplates = {
  __typename?: 'PipelineTemplates';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of pipeline templates. */
  pipelineTemplates: Array<PipelineTemplate>;
};

export type Pipelines = {
  __typename?: 'Pipelines';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of pipeline instances. */
  pipelines: Array<Pipeline>;
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String']['output'];
  /** Get a pipeline instance. */
  pipeline: Pipeline;
  /** Get a pipeline template. */
  pipelineTemplate: PipelineTemplate;
  /** Get a list of pipeline templates. */
  pipelineTemplates: PipelineTemplates;
  /** Get a list of pipeline instances. */
  pipelines: Pipelines;
};


export type QueryPipelineArgs = {
  id: Scalars['String']['input'];
};


export type QueryPipelineTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryPipelineTemplatesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};


export type QueryPipelinesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  limit: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  helloWorld: Scalars['String']['output'];
  /** Subscribe to pipeline events. */
  pipeline: PipelineEvent;
  /** Subscribe to pipeline logs. */
  pipelineLogs: PipelineLogMessage;
};


export type SubscriptionHelloWorldArgs = {
  message?: Scalars['String']['input'];
  target?: Scalars['Int']['input'];
};


export type SubscriptionPipelineArgs = {
  id: Scalars['String']['input'];
  interval?: Scalars['Float']['input'];
};


export type SubscriptionPipelineLogsArgs = {
  id: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TagInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PipelinesQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type PipelinesQuery = { __typename?: 'Query', pipelines: { __typename?: 'Pipelines', pageMeta: { __typename?: 'PageMeta', nextCursor?: string | null, count?: number | null }, pipelines: Array<{ __typename?: 'Pipeline', id?: any | null, name: string, status?: string | null, parameters: Array<{ __typename?: 'Parameter', name: string, type?: ParameterType | null, value: string }>, dataCatalog?: Array<{ __typename?: 'DataSet', name: string, config?: string | null }> | null, tags?: Array<{ __typename?: 'Tag', key: string, value: string }> | null }> } };


export const PipelinesDocument = gql`
    query pipelines($limit: Int!, $filter: [String!], $cursor: String) {
  pipelines(limit: $limit, cursor: $cursor, filter: $filter) {
    pageMeta {
      nextCursor
      count
    }
    pipelines {
      id
      name
      status
      parameters {
        name
        type
        value
      }
      dataCatalog {
        name
        config
      }
      tags {
        key
        value
      }
    }
  }
}
    `;

/**
 * __usePipelinesQuery__
 *
 * To run a query within a Vue component, call `usePipelinesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePipelinesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePipelinesQuery({
 *   limit: // value for 'limit'
 *   filter: // value for 'filter'
 *   cursor: // value for 'cursor'
 * });
 */
export function usePipelinesQuery(variables: PipelinesQueryVariables | VueCompositionApi.Ref<PipelinesQueryVariables> | ReactiveFunction<PipelinesQueryVariables>, options: VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PipelinesQuery, PipelinesQueryVariables>(PipelinesDocument, variables, options);
}
export function usePipelinesLazyQuery(variables: PipelinesQueryVariables | VueCompositionApi.Ref<PipelinesQueryVariables> | ReactiveFunction<PipelinesQueryVariables>, options: VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PipelinesQuery, PipelinesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PipelinesQuery, PipelinesQueryVariables>(PipelinesDocument, variables, options);
}
export type PipelinesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PipelinesQuery, PipelinesQueryVariables>;