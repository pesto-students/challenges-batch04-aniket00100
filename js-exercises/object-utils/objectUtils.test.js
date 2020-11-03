import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases
describe('Testing map()', () => {
  test('Should return a proper modified object', () => {
    const obj = {
      apples: 10,
      oranges: 6,
      mangoes: 9,
    };
    const callbackFn = ([key, value]) => [key.toUpperCase(), value * 10];
    const returnedObject = map(obj, callbackFn);
    expect(returnedObject).toEqual({ APPLES: 100, ORANGES: 60, MANGOES: 90 });
  });
});

describe('Testing filter()', () => {
  test('Should return a proper filtered object', () => {
    const obj = {
      apples: 10,
      oranges: 6,
      mangoes: 9,
      banana: 12,
    };
    // eslint-disable-next-line no-unused-vars
    let callbackFn = ([key, value]) => key === 'mangoes';
    let returnedObject = filter(obj, callbackFn);
    expect(returnedObject).toEqual({ mangoes: 9 });

    callbackFn = ([, value]) => value >= 10;
    returnedObject = filter(obj, callbackFn);
    expect(returnedObject).toEqual({ banana: 12, apples: 10 });
  });
});

describe('Testing invert()', () => {
  test('Should return an object with inverted key-value pairs', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
    };

    const returnedObject = invert(obj);
    expect(returnedObject).toEqual({
      value1: 'key1',
      value2: 'key2',
      value3: 'key3',
      value4: 'key4',
    });
  });
});

describe('Testing merge()', () => {
  test('Should return a combined object', () => {
    const person = {
      firstname: 'Aniket',
      lastname: 'Kale',
      age: '25',
    };
    const address = {
      city: 'Akola',
      state: 'Maharashtra',
    };
    const interests = {
      tech: ['React', 'Redux', 'Express', 'MongoDB', 'Python3'],
      hobbies: ['Cooking', 'Traveling', 'etcetra'],
      favouriteQuotes: [
        'The first setp towards solving any problem is recognizing that there exists one!',
        'If you keep doing what you are doing, you will keep getting what you are getting',
      ],
    };
    const returnedObject = merge(person, address, interests);
    const combinedObject = { ...person, ...address, ...interests };
    expect(returnedObject).toEqual(combinedObject);
  });
});

describe('Testing all()', () => {
  test('Should return if all the key-value pairs satisfy the condition', () => {
    let obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
    };
    const callbackFn = ([, value]) => typeof value === 'string';
    let allPairsSatisfy = all(obj, callbackFn);
    expect(allPairsSatisfy).toBe(true);
    obj = { ...obj, array: [1, 2, 3] };
    allPairsSatisfy = all(obj, callbackFn);
    expect(allPairsSatisfy).toBe(false);
  });
});

describe('Testing some()', () => {
  test('Should return if at least one of the key-value pairs satisfy the condition', () => {
    const obj = {
      apples: 10,
      oranges: 6,
      mangoes: 9,
      banana: 12,
    };
    let callbackFn = ([, value]) => value >= 10;
    let returnedObject = some(obj, callbackFn);
    expect(returnedObject).toBe(true);
    callbackFn = ([key, value]) => key === 'name' || value >= 50;
    returnedObject = some(obj, callbackFn);
    expect(returnedObject).toBe(false);
  });
});
