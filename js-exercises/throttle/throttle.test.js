import { throttle } from './throttle';

jest.useFakeTimers();

describe('throttle', () => {
  test('Should be called only once', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 1000);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      throttledFn();
    }
    jest.runAllTimers();
    expect(fn).toBeCalledTimes(1);
  });
  test('Should be called after the timeout', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 1000);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      throttledFn();
    }
    const throttledFn2 = throttle(fn, 2000);
    throttledFn2();
    jest.runAllTimers();
    expect(fn).toBeCalledTimes(2);
  });
});
