function balancedBraces(str) {
  if (typeof str !== 'string') {
    throw new Error('Expected string. Got ', typeof str);
  }
  const bracesStack = [];
  let topOfTheStack;

  for (const character of str) {
    switch (character) {
      case '(':
        bracesStack.push('(');
        break;
      case '[':
        bracesStack.push('[');
        break;
      case '{':
        bracesStack.push('{');
        break;
      case ')':
        topOfTheStack = bracesStack.pop();
        if (topOfTheStack !== '(') {
          return false;
        }
        break;
      case ']':
        topOfTheStack = bracesStack.pop();
        if (topOfTheStack !== '[') {
          return false;
        }
        break;
      case '}':
        topOfTheStack = bracesStack.pop();
        if (topOfTheStack !== '{') {
          return false;
        }
        break;
      default:
        break;
    }
  }
  if (bracesStack.length) {
    return false;
  }
  return true;
}

export { balancedBraces };
