import { getTotalTime } from './liftKeypad.js';

describe('getTotalTime', () => {
  it('get Total time to enter the passcode', () => {
    expect(getTotalTime('423692', '923857614')).toEqual(8);
    expect(getTotalTime('5111', '752961348')).toEqual(1);
    expect(getTotalTime('91566165', '639485712')).toEqual(11);
  });
  // write test case for error and edge cases
});
