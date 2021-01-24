function getTravelTime(from, to) {
  const fromRow = Math.floor(from / 3);
  const toRow = Math.floor(to / 3);

  // eslint-disable-next-line no-nested-ternary
  const toColumn = to % 3 === 0 ? 0 : to % 3 === 1 ? 1 : 2;
  // eslint-disable-next-line no-nested-ternary
  const fromColumn = from % 3 === 0 ? 0 : from % 3 === 1 ? 1 : 2;

  const { max, min } = Math;
  // eslint-disable-next-line operator-linebreak
  const columnDifference =
    max(fromColumn, toColumn) - min(fromColumn, toColumn);
  const rowDifference = max(fromRow, toRow) - min(fromRow, toRow);
  if (columnDifference === 0) {
    if (rowDifference === 0) return 0;
    if (rowDifference === 1) return 1;
    if (rowDifference === 2) return 2;
  }
  if (columnDifference === 1) {
    if (rowDifference === 2) {
      return 2;
    }
    return 1;
  }
  if (columnDifference === 2) {
    return 2;
  }

  // eslint-disable-next-line object-curly-newline
  return { fromRow, toRow, toColumn, fromColumn };
}

function getTotalTime(passcode, keypadStr) {
  let timeRequired = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < passcode.length; i++) {
    const fromIndex = keypadStr.indexOf(passcode[i - 1]);
    const toIndex = keypadStr.indexOf(passcode[i]);
    timeRequired += getTravelTime(fromIndex, toIndex);
  }
  return timeRequired;
}

export { getTotalTime };
