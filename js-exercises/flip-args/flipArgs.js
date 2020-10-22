// not entirely sure about the question. Have 3 ideas as to what it could mean.
// keeping the one which I think might be the expected answer.
// commenting out the other 2

// Implementation 1
function func(reversedArguments) {
  return reversedArguments;
}

// eslint-disable-next-line func-names
const flipped = function (...args) {
  // The args.reverse() will reverse all the arguments recieved by flipped
  return func(args.reverse());
};
// As per the instructions, flipped is a function that takes arguments
// and invokes another function called func with reversed arguments
// and returns the recieved arguments.

export { flipped };

// Implementation 2

// const flipped2 = function (...args) {
//   args.reverse();
//   return (function (reversedArguments) {
//     return reversedArguments;
//   }(args));
// };

// flipped2('a', 'b', 'c', 'd'); => ['d', 'c', 'b', 'a']

// Implementation 3

// const flipArgs = () => (...args) => args.reverse();

// const flipped = flipArgs();

// flipped('a', 'b', 'c', 'd'); => ['d', 'c', 'b', 'a']
