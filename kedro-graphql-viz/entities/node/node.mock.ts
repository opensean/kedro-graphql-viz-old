import type { PlainNode } from './node.js';

export const mockNode = {
    "name": "echo_node",
    "inputs": [
      "text_in",
      "params:example",
      "parameters"
    ],
    "outputs": [
      "text_out"
    ],
    "tags": ["example_tag"]
  }

export const mockNodes: PlainNode[] = [
  mockNode
];