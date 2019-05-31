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
});
