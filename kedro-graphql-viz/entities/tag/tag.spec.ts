import { ok } from 'node:assert';
import { Tag } from './tag';
import { mockTag } from './tag.mock';

it('has a Tag.from() method', () => {
  ok(Tag.from);
});

it('tag.toObject() should be ' + JSON.stringify(mockTag), () => {
  expect(Tag.from(mockTag).toObject()).toEqual(mockTag);
});