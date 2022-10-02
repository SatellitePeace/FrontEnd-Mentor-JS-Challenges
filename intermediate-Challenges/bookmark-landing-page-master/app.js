// SMALL NAVBAR CONTROLS
const smallnavContainer = document.querySelector(".smallnav");
const openSmallnavBtn = document.querySelector(".smallnav__open");
const closeSmallnavBtn = document.querySelector(".smallnav__close");

openAndCloseSmallnavbar();
function openAndCloseSmallnavbar() {
  openSmallnavBtn.addEventListener("click", () => {
    smallnavContainer.classList.add("display");
  });
  closeSmallnavBtn.addEventListener("click", () => {
    smallnavContainer.classList.remove("display");
  });
}

// FEATURES TABS SECTIONS
const tabsBtn = document.querySelectorAll(".features__btn");
const tabsImg = document.querySelector(".tabs__img");
const tabsHeading = document.getElementById("tabsHeading");
const tabsText = document.getElementById("tabsText");
const tabOne = document.getElementById("tabOne");

changeTabs();
function changeTabs() {
  tabsBtn[0].addEventListener("click", (e) => {
    tabsImg.src = "/images/illustration-features-tab-1.svg";
    tabsHeading.textContent = "Bookmark in one click";
    tabsText.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface
    gives you complete control over how you manage your favourite sites.`;
    tabOne.classList.add("active");
    e.preventDefault();
  });
  // tab 2
  tabsBtn[1].addEventListener("click", (e) => {
    tabsImg.src = "/images/illustration-features-tab-2.svg";
    tabsHeading.textContent = "Intelligent search";
    tabsText.textContent = `Our powerful search feature will help you find saved sites in no time at all.
    No need to trawl through all of your bookmarks.`;
    removeActiveClass();
    e.preventDefault();
  });
  // tab 3
  tabsBtn[2].addEventListener("click", (e) => {
    tabsImg.src = "/images/illustration-features-tab-3.svg";
    tabsHeading.textContent = "Share your bookmarks";
    tabsText.textContent = `Easily share your bookmarks and collections with others. Create a shareable
    link that you can send at the click of a button.`;
    removeActiveClass();
    e.preventDefault();
  });
}
// remove active class from first tab btn
function removeActiveClass() {
  tabOne.classList.remove("active");
}

// FAQ SECTION
const answers = document.querySelectorAll(".faq__answer");
const showAnswer = document.querySelectorAll(".faq__open");
const closeFaq = document.querySelectorAll(".faq__control");

openFaq();

function openFaq(e) {
  for (let i = 0; i < showAnswer.length; i++) {
    showAnswer[i].addEventListener("click", (e) => {
      // hideFaqs();
      answers[i].classList.toggle("open");
      closeFaq[i].classList.toggle("active");
      e.preventDefault();
    });
  }
}

function hideFaqs() {
  answers.forEach((ans) => {
    ans.classList.remove("open");
  });
}

function showFaqs() {
  answers.forEach((ans) => {
    ans.classList.add("open");
  });
}

// CALL TO ACTION SECTION
const form = document.getElementById("form");
const input = document.querySelector(".input");
const ctaContainer = document.querySelector(".cta__input");
const ctaBtn = document.querySelector(".cta__btn");
const errorMsg = document.querySelector(".cta__error");
const errorIcon = document.querySelector(".cta__error--icon");

showError();
function showError() {
  form.addEventListener("submit", (e) => {
    const regEx = /\S+@\S+\.\S+/;
    if (!regEx.test(input.value) || input.value == "") {
      errorMsg.classList.add("alert");
      ctaContainer.classList.add("error");
      ctaBtn.classList.add("showError");
      errorIcon.classList.add("error");
      input.style.border = "2px solid hsl(0, 94%, 66%)";
      input.value = "email@example.com ";
    } else {
      errorMsg.classList.remove("alert");
      input.classList.remove("error");
      ctaBtn.classList.remove("showError");
      errorIcon.classList.remove("error");
      input.style.border = "none";
      input.value = "";
    }
    e.preventDefault();
  });
}
