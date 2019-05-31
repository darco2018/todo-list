/** @format */

import "../css/main.scss";

$(document).ready(function main() {
  const $plusIcon = $(".fa-plus-circle");
  const $newTodoInput = $(".new-todo");
  const $todolist = $(".list");
  const $todoItems = $(".list__item");
  const $trashIcon = $(".fa-trash");
  const trashIconClass = "fa-trash";
  const trashIcon = `<i class='fa ${trashIconClass}'></i>`;

  // we define in 2nd arg:'this' (note: we skip $())
  $todolist.on("mouseenter", ".list__item", function showTrash() {
    // console.log($(this).text());
    $(this).prepend(trashIcon);
  });

  $todolist.on("mouseleave", ".list__item", function hideTrash() {
    $(this)
      .find(`.${trashIconClass}`)
      .remove();
  });

  $todolist.on("click", ".list__item", function hideTrash() {
    console.log("completed");

    $(this).toggleClass("completed");
  });

  $newTodoInput.keypress(function fn(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const $input = $(this);
      $todolist.append(`<li class='list__item'>${$input.val()}</li>`);
      $input.val("");
    }
  });
});
