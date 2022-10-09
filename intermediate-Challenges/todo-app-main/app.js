// TOGGLE THEME

const darkmode = document.querySelector(".darkmode");
const lightmode = document.querySelector(".lightmode");

toggleThemeModes();
function toggleThemeModes() {
  darkmode.addEventListener("click", () => {
    document.body.classList.add("dark");
    console.log(12);
    lightmode.style.display = "block";
    darkmode.style.display = "none";
  });
  lightmode.addEventListener("click", () => {
    document.body.classList.remove("dark");
    lightmode.style.display = "none";
    darkmode.style.display = "block";
  });
}

// ADD ITEMS TO TODO
const form = document.getElementById("form");
const input = document.querySelector(".input");
const todoGroup = document.querySelector(".todo__group");

const active = document.getElementById("active");
const all = document.getElementById("all");
const complete = document.getElementById("complete");

const clear = document.getElementById("clear");
const itemsLeft = document.getElementById("dynamic__num");

// load todo listeners
loadListeners();
function loadListeners() {
  // add todo
  form.addEventListener("submit", addTodo);
  //   remove todo
  todoGroup.addEventListener("click", removeTodoItem);

  //   Show Active Todos
  active.addEventListener("click", showActive);

  // Show All Todos
  all.addEventListener("click", showAll);

  // Show Completed Todos
  complete.addEventListener("click", completedTodos);

  //   clear completed todos
  clear.addEventListener("click", clearTodos);
}

// Add Todo
function addTodo(e) {
  // create list item
  const list = document.createElement("li");
  list.className = "todo__list";
  //   create input
  const inputText = document.createElement("input");
  inputText.className = "checkbox";
  inputText.type = "checkbox";
  //   create p element
  const text = document.createElement("p");
  text.className = "todo__text";
  text.appendChild(document.createTextNode(input.value));
  //   create link
  const link = document.createElement("a");
  link.className = "remove__todo";
  //   append img to link
  link.innerHTML = `<img src="/images/icon-cross.svg" alt="delete icon">`;
  //   append all items to list item
  list.appendChild(inputText);
  list.appendChild(text);
  list.appendChild(link);
  //   append list to ul
  todoGroup.appendChild(list);
  // ITEMS LEFT
  itemsLeft.textContent = todoGroup.childElementCount;
  // clear input
  input.value = "";

  e.preventDefault();
}

// DELETE SINGLE TODO
function removeTodoItem(e) {
  if (e.target.parentElement.classList.contains("remove__todo")) {
    e.target.parentElement.parentElement.remove();
    console.log(e.target);
    // ITEMS LEFT
    itemsLeft.textContent = todoGroup.childElementCount;
  }
}

// // CLEAR TODO
// function clearTodos() {
//   while (todoGroup.firstChild) {
//     todoGroup.removeChild(todoGroup.firstChild);
//   }
// }

// SHOW ALL TODOS

function showAll(e) {
  document.querySelectorAll(".todo__list").forEach((list) => {
    list.style.display = "flex";
    all.classList.add("all");
    active.classList.remove("active");
    complete.classList.remove("complete");
  });
  e.preventDefault();
}

// SHOW ACTIVE TODOS
function showActive(e) {
  document.querySelectorAll(".checkbox").forEach((check) => {
    if (!check.checked) {
      check.parentElement.style.display = "flex";
    } else {
      check.parentElement.style.display = "none";
    }
    active.classList.add("active");
    all.classList.remove("all");
    complete.classList.remove("complete");
  });
  //   console.log(1112);
  e.preventDefault();
}

// SHOW COMPLETED TODOS

function completedTodos(e) {
  document.querySelectorAll(".checkbox").forEach((check) => {
    if (check.checked) {
      check.parentElement.style.display = "flex";
    } else {
      check.parentElement.style.display = "none";
    }
    complete.classList.add("complete");
    all.classList.remove("all");
    active.classList.remove("active");
  });
  e.preventDefault();
}

// CLEAR COMPLETED TODOS
function clearTodos(e) {
  document.querySelectorAll(".checkbox").forEach((check) => {
    if (check.checked) {
      check.parentElement.remove();
      // ITEMS LEFT
      itemsLeft.textContent = todoGroup.childElementCount;
    }
  });
  e.preventDefault();
}
