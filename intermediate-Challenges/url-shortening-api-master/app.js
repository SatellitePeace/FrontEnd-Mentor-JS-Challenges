// SMALL NAV
const smallnavBtn = document.querySelector(".smallnav__control");
const smallnavContents = document.querySelector(".smallnav");

openAndCloseSmallnav();
function openAndCloseSmallnav() {
  smallnavBtn.addEventListener("click", () => {
    smallnavContents.classList.toggle("show");
  });
}

// URL SHORTEN
// url form validation

const input = document.querySelector(".url__input");
const errorMsg = document.querySelector(".url__error--msg");
const form = document.getElementById("form");
const urlContainer = document.querySelector(".url__list");
const urlSection = document.querySelector(".url");

validateForm();
function validateForm() {
  form.addEventListener("submit", (e) => {
    const inputValue = input.value;
    if (inputValue === "") {
      input.classList.add("error");
      errorMsg.classList.add("alert");
    } else {
      input.classList.remove("error");
      errorMsg.classList.remove("alert");
      input.value = "";
      shortenUrl(inputValue);
      addToLocalStorage(inputValue);
    }
    e.preventDefault();
  });
}

async function shortenUrl(input) {
  const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
  const response = await fetch(url);
  const data = await response.json();
  displayURl(data);
}

function displayURl(data) {
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
  copyToClipboard(article);
  // delete url
  deleteUrl(article);
}

// COPY SHORT URL TO CLIPBOARD

function copyToClipboard() {
  const copyLink = document.querySelectorAll(".url__clipboard");
  const shortLink = document.querySelectorAll(".url__after--text");
  for (let i = 0; i < copyLink.length; i++) {
    copyLink[i].addEventListener("click", (e) => {
      navigator.clipboard.writeText(shortLink[i].textContent);
      copyLink[i].style.background = "hsl(257, 27%, 26%)";
      copyLink[i].textContent = "Copied!";
      // remove new button styles after 2s
      setTimeout(() => {
        copyLink[i].style.background = "hsl(180, 66%, 49%)";
        copyLink[i].textContent = "Copy";
      }, 2000);
      e.preventDefault();
    });
  }
}

// DELETE URL FROM DISPLAY AND LS
function deleteUrl() {
  const articleContainer = document.querySelectorAll(".url__shorten");
  const deleteBtn = document.querySelectorAll(".url__delete");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (e) => {
      articleContainer[i].remove();
      e.preventDefault();
    });
  }
}

// ADD TO LOCAL STORAGE
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
