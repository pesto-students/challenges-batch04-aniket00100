const deepCopyObject = (objToCopy) => {
  if (objToCopy instanceof Array) {
    return objToCopy.map((item) => deepCopyObject(item));
  }
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }
  const objToReturn = {};
  Object.keys(objToCopy).map((key) => {
    objToReturn[key] = deepCopyObject(objToCopy[key]);
    return true;
  });
  return objToReturn;
};

// const obj = {
//   level1: {
//     key1: 'value1',
//     level2: {
//       key2: 'value2',
//       level3: {
//         key3: [{ level4: 'value4' }],
//       },
//     },
//   },
// };

// const newObj = deepCopyObject(obj);

// console.log(newObj);

// console.log(newObj.level1.level2.level3);

// console.log(obj.level1.level2.level3 === newObj.level1.level2.level3);

export { deepCopyObject };
