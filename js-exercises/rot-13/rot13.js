function rot13(...args) {
  const encodedString = args[0];
  let decodedString = '';
  const asciiValueA = 'A'.charCodeAt();
  const asciiValueZ = 'Z'.charCodeAt();
  for (const char of encodedString) {
    const currentCharAscii = char.charCodeAt();
    if (currentCharAscii > asciiValueZ || currentCharAscii < asciiValueA) {
      decodedString += char;
    } else {
      let requiredCharCode = currentCharAscii - 13;
      if (requiredCharCode < asciiValueA) {
        requiredCharCode = 1 + asciiValueZ - (asciiValueA - requiredCharCode);
      }
      decodedString += String.fromCharCode(requiredCharCode);
    }
  }
  return decodedString;
}

export { rot13 };
