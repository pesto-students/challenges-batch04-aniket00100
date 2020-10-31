import { bind } from './bindMethod';

describe('bind method', () => {
  // Feel free to add more test cases
  test('should return a function', () => {
    const foo = function (x) {
      return x;
    };
    const obj = { a: 10 };
    expect(typeof bind(foo, obj)).toBe('function');
  });
  test('should hard bind a function to new context', () => {
    const foo = function (x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    var y = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(20);
  });
  test('should return proper value', () => {
    const foo = function (a, b) {
      return a + b + this.c;
    };
    const obj = { c: 2 };
    const bar = bind(foo, obj);
    expect(bar(5, 3)).toBe(10);
  });
  test('should greet Satyam', () => {
    const foo = function () {
      return `${this.greeting} ${this.name}!`;
    };
    const obj = { greeting: 'Hello', name: 'Satyam' };
    const bar = bind(foo, obj);
    expect(bar()).toBe(`${obj.greeting} ${obj.name}!`);
  });
  test('should return proper context', () => {
    const foo = function () {
      return this;
    };
    const obj = { dummy: 'Somethig Awesome!' };
    const bar = bind(foo, obj);
    expect(bar()).toBe(obj);
  });
});
