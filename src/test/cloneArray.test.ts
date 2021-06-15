const cloneArray = require('../functions/cloneArray');

test('properly clones the array', () => {
  const array = [1,2,3];
  expect(cloneArray(array)).toEqual(array);
})

test('values in array should be the same', () =>{
  const array = [1, 2, 3];
  expect(cloneArray(array)).not.toBe([1,3,4]);
})