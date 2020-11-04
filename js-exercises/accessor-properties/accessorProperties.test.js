import { accessorProperties } from './accessorProperties';

describe('Template Test', () => {
  test('Should return an object', () => {
    const returnedObj = accessorProperties();
    expect(typeof returnedObj).toBe('object');
  });
  test('Checks for accurate binary number', () => {
    const returnedObj = accessorProperties();
    returnedObj.number = 36;
    expect(returnedObj.number).toBe(100100);
    returnedObj.number = 256;
    expect(returnedObj.number).toBe(100000000);
  });
});
