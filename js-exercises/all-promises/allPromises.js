// attempt 2

const allPromises = (values) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });

// attempt 1

// Promise.all = function promiseAllRecursive(values) {
//     // Base case.
//     if (values.length === 0) {
//         return Promise.resolve([]);
//     }
//
//     const [first, ...rest] = values;
//
//     // Calling Promise.resolve on the first value because it could
//     // be either a Promise or an actual value.
//     return Promise.resolve(first).then(firstResult => {
//         return promiseAllRecursive(rest).then(restResults => {
//             return [firstResult, ...restResults];
//         });
//     });
// }

export { allPromises };
