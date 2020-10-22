import { flipped } from './flipArgs';

describe('flipArgs', () => {
  test('should return an array of reversed arguments', () => {
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
    expect(flipped(1, 2, 3)).toEqual([3, 2, 1]);
  });
});
