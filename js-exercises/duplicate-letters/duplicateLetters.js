function duplicateLetters(...args) {
  const alphabetCount = {};
  const string = args[0];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (alphabetCount[character] === undefined) {
      alphabetCount[character] = 1;
    } else {
      alphabetCount[character] += 1;
    }
  }
  let max = 1;
  for (const char in alphabetCount) {
    if (alphabetCount[char] > max) max = alphabetCount[char];
  }
  if (max === 1) return false;
  return max;
}

export { duplicateLetters };
