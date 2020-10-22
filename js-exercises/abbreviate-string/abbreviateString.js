// import { isString } from 'util';

function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw Error();
  }
  const words = str.split(' ');
  const abbreviation = `${words[0]} ${words[
    words.length - 1
  ][0].toUpperCase()}.`;
  return abbreviation;
}

export { abbreviateString };
