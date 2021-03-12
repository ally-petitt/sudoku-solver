//Only allow 1 number to be entered
$("input").on("input", (e) => {
  let input = e.target;
  if (input.value.length > 1) {
    input.value = input.value.slice(1);
  }
});

const board = [];
defineBoard();

function defineBoard() {
  numOfRows = 9;
  for (var i = 0; i < numOfRows; i++) {
    board[i] = [];
  }
}

$(".newPuzzle").click(() => document.querySelector("form").reset());

$(".submit").click(() => {
  setBoard();
  solve(board);
  updateBoardDisplay();
});

function setBoard() {
  const inputs = $("input");
  for (var i = 0; i < inputs.length; i++) {
    const currentBlock = Math.floor(i / 9);
    const localRow = Math.floor(i / 3);
    const currentRow = (localRow % 3) + Math.floor(currentBlock / 3) * 3;

    inputs[i].value == undefined
      ? board[currentRow].push("")
      : board[currentRow].push(inputs[i].value);
  }
}

function updateBoardDisplay() {
  const inputs = $("input");
  for (var i = 0; i < inputs.length; i++) {
    const currentBlock = Math.floor(i / 9);
    const localRow = Math.floor(i / 3);
    const currentRow = (localRow % 3) + Math.floor(currentBlock / 3) * 3;

    const rowIndex = Math.floor(i % 3) + Math.floor(currentBlock % 3) * 3;

    inputs[i].value = board[currentRow][rowIndex];
  }
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == "") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, i, j, k)) {
            board[i][j] = k.toString();
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = "";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}
