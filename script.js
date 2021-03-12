$(function () {});

$("input").on("input", (e) => {
  let input = e.target;
  if (input.value.length > 1) {
    input.value = input.value.slice(1);
  }
});
