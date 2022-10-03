// SMALL NAV
const smallnavBtn = document.querySelector(".smallnav__control");
const smallnavContents = document.querySelector(".smallnav");

openAndCloseSmallnav();
function openAndCloseSmallnav() {
  smallnavBtn.addEventListener("click", () => {
    smallnavContents.classList.toggle("show");
    console.log(123);
  });
}

// URL SHORTEN
// url form validation

const input = document.querySelector(".url__input");
const errorMsg = document.querySelector(".url__error--msg");
const form = document.getElementById("form");
const urlContainer = document.querySelector(".url__list");
const urlSection = document.querySelector(".url");

validation();
function validation() {
  form.addEventListener("submit", (e) => {
    let link = input.value;
    if (link == "") {
      input.classList.add("error");
      errorMsg.classList.add("alert");
    } else {
      input.classList.remove("error");
      errorMsg.classList.remove("alert");
      input.value = "";
      short(link);
      copyClipboard(link);
      addToLocalStorage(link);
      getLocalStorage(link);
    }
    e.preventDefault();
  });
}
// FETCH SHORTCODE API
async function short(input) {
  const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
  const response = await fetch(url);
  const data = await response.json();

  // grant ui function access to api
  showUrl(data);
  getLocalStorage(data);
}
// URL UI
function showUrl(data) {
  const original_link = data.result.original_link;
  const short_url = data.result.full_short_link;
  // dynamically add html to DOM and UI
  const article = document.createElement("article");

  article.className = "url__shorten";
  article.innerHTML = `<div class="url__original">
              <p class="url__text">
              ${original_link}
              </p>
            </div>
           <div class="url__after">
              <p class="url__after--text">
              ${short_url}
              </p>
              <button class="url__clipboard">
                Copy
              </button>
              <a href="#" class="url__delete">
                <i class="bi bi-trash3"></i></a>
            </div>`;
  urlSection.appendChild(article);

  // copy shortend link funtion
  copyClipboard(article);
  // delete url
  deleteUrl(article);
  // LOCAL STORAGE
  addToLocalStorage(article);
  getLocalStorage(article);
}
// DELETE URL FROM DISPLAY AND LS
function deleteUrl(e) {
  const articleContainer = document.querySelectorAll(".url__shorten");
  const deleteBtn = document.querySelectorAll(".url__delete");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (e) => {
      articleContainer[i].remove();
      removeLocalStorage();
      e.preventDefault();
    });
  }
}

// COPY SHORTENED URL TO CLIPBOARD
function copyClipboard(e) {
  const copyLink = document.querySelectorAll(".url__clipboard");
  const shortLink = document.querySelectorAll(".url__after--text");
  for (let i = 0; i < copyLink.length; i++) {
    copyLink[i].addEventListener("click", (e) => {
      navigator.clipboard.writeText(shortLink[i].textContent);
      copyLink[i].style.background = "hsl(257, 27%, 26%)";
      copyLink[i].textContent = "Copied!";
      e.preventDefault();
    });
  }
}

// LOCAL STORAGE
function addToLocalStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("DOMContentLoaded", getLocalStorage);

function getLocalStorage(data, article) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // const original_link = data.result.original_link;
  // const short_url = data.result.full_short_link;
  todos.forEach((todo) => {
    // const original_link = data.result.original_link;
    // const short_url = data.result.full_short_link;
    // dynamically add html to DOM and UI
    const article = document.createElement("article");

    article.className = "url__shorten";
    article.innerHTML = `<div class="url__original">
              <p class="url__text">
              ${todo}
              </p>
            </div>
           <div class="url__after">
              <p class="url__after--text">
              ${todo}
              </p>
              <button class="url__clipboard">
                Copy
              </button>
              <a href="#" class="url__delete">
                <i class="bi bi-trash3"></i></a>
            </div>`;
    urlSection.appendChild(article);
  });
}

function removeLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // const todoIndex = todo.children[0].innerText;
  // todos.splice(todos.indexOf(todoIndex), 1);
  // localStorage.setItem("todos", JSON.stringify(todos));
}
