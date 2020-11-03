// implementation 1
// using filter method;

function dropElements(elements, predicate) {
  const arrayAfterDroppingElements = elements.filter(predicate);
  return arrayAfterDroppingElements;
}

// implementation 2
// without filter

// function dropElements(elements, predicate) {
//   const arrayAfterDroppingElements = [];
//   for (const element of elements) {
//     const notDropped = predicate(element);
//     if (notDropped) {
//       arrayAfterDroppingElements.push(element);
//     }
//   }
//   return arrayAfterDroppingElements;
// }

export { dropElements };
