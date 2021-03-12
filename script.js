//Only allow 1 number to be entered
$("input").on("input", (e) => {
  let input = e.target;
  if (input.value.length > 1) {
    input.value = input.value.slice(1);
  }
});

const board = [];

// adds values to board array
$(".submit").click(() => {
  for (var i = 0; i < $("input").length; i++) {
    const currentBlock = Math.floor(i / 9);
    const localRow = Math.floor(i / 3);
    const currentRow = (localRow % 3) + Math.floor(currentBlock / 3) * 3;
    board[currentRow].push($("input")[i].value);
  }
});
