'use strict';

const { deepClone } = require('./');

describe('deepClone()', function() {
  it('should clone arrays', function() {
    expect(deepClone(['alpha', 'beta', 'gamma'])).toEqual([
      'alpha',
      'beta',
      'gamma'
    ]);
    expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]);

    const a = [{ a: 0 }, { b: 1 }];
    const b = deepClone(a);

    expect(b).toEqual(a);
    expect(b[0]).toEqual(a[0]);

    const val = [0, 'a', {}, [{}], [function() {}], function() {}];
    expect(deepClone(val)).toEqual(val);
  });

  it('should deeply clone an array', function() {
    const fixture = [[{ a: 'b' }], [{ a: 'b' }]];
    const result = deepClone(fixture);

    expect(fixture !== result).toBe(true);
    expect(fixture[0] !== result[0]).toBe(true);
    expect(fixture[1] !== result[1]).toBe(true);
    expect(fixture).toEqual(result);
  });

  it('should deeply clone object', function() {
    const one = { a: 'b' };
    const two = deepClone(one);
    two.c = 'd';
    expect(one !== two).toBe(true);
  });

  it('should deeply clone arrays', function() {
    const one = { a: 'b' };
    const arr1 = [one];
    const arr2 = deepClone(arr1);
    one.c = 'd';
    expect(arr1 !== arr2).toBe(true);
  });

  it('should deeply clone Set', function() {
    const a = new Set([2, 1, 3]);
    const b = deepClone(a);
    a.add(8);
    expect(Array.from(a) !== Array.from(b)).toBe(true);
  });

  it('should return primitives', function() {
    expect(deepClone(0)).toEqual(0);
    expect(deepClone('foo')).toEqual('foo');
  });

  it('should clone objects', function() {
    expect(deepClone({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should deeply clone objects', function() {
    expect(
      deepClone({
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 }
      })
    ).toEqual({
      a: { a: 1, b: 2, c: 3 },
      b: { a: 1, b: 2, c: 3 },
      c: { a: 1, b: 2, c: 3 }
    });
  });
});
