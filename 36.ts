let input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: true;

function isAnyThingInRow(
  num: string,
  row: string[][],
  index: { x: number; y: number }
): boolean {
  let currentRow = row[index.x];
  for (let i = 0; i < currentRow.length; i++) {
    if (i !== index.y && currentRow[i] === num) {
      return false;
    }
  }
  return true;
}

function isAnyThingInColumn(
  num: string,
  row: string[],
  index: { x: number; y: number }
): boolean {
  let rdir = [1, 0]; // y
  let searchedNum = row[index.y];
  let searchLen = row.length - index.y;
  while (searchLen > 0) {
    if (searchedNum == num) {
      return false;
    } else {
      searchLen--;
    }
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  return true;
}

console.log(
  isAnyThingInRow("4", input, {
    x: 0,
    y: 0,
  })
); // false
