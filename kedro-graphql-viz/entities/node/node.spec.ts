import { ok } from 'node:assert';
import { Node } from './node';
import { mockNode } from './node.mock';

it('has a Node.from() method', () => {
  ok(Node.from);
});

it('node.toObject() should be ' + JSON.stringify(mockNode), () => {
  expect(Node.from(mockNode).toObject()).toEqual(mockNode);
});