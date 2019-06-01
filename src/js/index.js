/** @format */

import "../css/main.scss";

$(document).ready(function main() {
  const $plusIcon = $(".fa-plus-circle");
  const $newTodoInput = $(".new-todo");
  const $todoList = $(".list");
  const trashIconClass = "fa-trash";
  const trashIcon = `<i class='fa ${trashIconClass} fa-1g'></i>`;

  $todoList.on("mouseenter", ".list__item", function showTrashIcon() {
    $(this).prepend(trashIcon);
  });

  $todoList.on("mouseleave", ".list__item", function hideTrashIcon() {
    $(this)
      .find(`.${trashIconClass}`)
      .remove();
  });

  $todoList.on("click", ".list__item", function processCompleted(e) {
    if (e.target.nodeName.toLowerCase() === "li") {
      $(this).toggleClass("completed");
    } else if (e.target.nodeName.toLowerCase() === "i") {
      $(this).fadeOut("400", function fn() {
        $(this)
          .closest("li")
          .remove();
      });
    }
  });

  $newTodoInput.keypress(function addNewTodo(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const $input = $(this);
      $todoList.append(`<li class='list__item'>${$input.val()}</li>`);
      $input.val("");
    }
  });

  $plusIcon.click(function toggleInputVisibility() {
    $newTodoInput.toggleClass("hidden");
  });
});
