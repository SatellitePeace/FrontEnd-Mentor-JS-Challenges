const openSmallNav = document.querySelector(".open__menu");
const closeSmallNav = document.querySelector(".close__menu");
const smallNav = document.querySelector(".smallnav");
// ADD REWARD TO TOTAL AMOUNT INCREAMENT BACKERS BY 1 To Stats
const amountRaised = document.getElementById("amountRaised");
const donors = document.getElementById("donors");
const donatedMoney = document.querySelectorAll(".money");

openAndCloseSmallNav();

function openAndCloseSmallNav() {
  openSmallNav.addEventListener("click", () => {
    openSmallNav.style.display = "none";
    closeSmallNav.style.display = "block";
    smallNav.classList.add("open");
  });
  closeSmallNav.addEventListener("click", () => {
    closeSmallNav.style.display = "none";
    openSmallNav.style.display = "block";
    smallNav.classList.remove("open");
  });
}

// Book Style function
boomarkStyle();
function boomarkStyle() {
  const bookmark = document.querySelector(".bookmark__btn");
  const bookmarkBtnTwo = document.querySelector(".bookmark__item--2");
  const circle = document.querySelector("circle");

  bookmark.addEventListener("click", () => {
    circle.classList.toggle("mark");
    bookmarkBtnTwo.classList.toggle("mar");
  });
}

// MAIN MODEL

const mainModal = document.getElementById("modalOne");
const closeMainModalBtn = document.getElementById("closeModal");
const overlay = document.querySelector(".overlay");

// add overlays
function showdarkOverlay() {
  overlay.classList.add("darken");
}

function removeDarkOverlay() {
  overlay.classList.remove("darken");
}
// open main modal function
function openMainModal() {
  mainModal.classList.add("display");
  showdarkOverlay();
}
// close main modal function
function closeMainModal() {
  mainModal.classList.remove("display");
  removeDarkOverlay();
}

// Close Main Modal Listener
closeMainModalBtn.addEventListener("click", () => {
  closeMainModal();
});

//Add And Remove Plegde Section From Main Modal by toggling radion btns
const plegdeForm = document.querySelectorAll(".modal__pledge--form");
const radios = document.querySelectorAll(".radio");
const plegdeSections = document.querySelectorAll(".modal__article");
toggleRadioBtn();

function toggleRadioBtn() {
  radios[0].addEventListener("click", () => {
    console.log("formless");
  });

  radios[1].addEventListener("click", () => {
    plegdeForm[0].classList.toggle("active");
    plegdeSections[1].style.border = "2px solid hsl(176, 72%, 28%)";
    if (!plegdeForm[0].classList.contains("active")) {
      radios[1].checked = false;
      plegdeSections[1].style.border = "2px solid  hsl(0, 0%, 48%)";
    }
    if (plegdeForm[0].classList.contains("active")) {
      plegdeForm[1].classList.remove("active");
      radios[0].checked = false;
      radios[2].checked = false;
      plegdeSections[2].style.border = "2px solid  hsl(0, 0%, 48%)";
    }
  });

  radios[2].addEventListener("click", () => {
    plegdeForm[1].classList.toggle("active");
    plegdeSections[2].style.border = "2px solid hsl(176, 72%, 28%)";
    if (!plegdeForm[1].classList.contains("active")) {
      radios[2].checked = false;
      plegdeSections[2].style.border = "2px solid  hsl(0, 0%, 48%)";
    }
    if (plegdeForm[1].classList.contains("active")) {
      plegdeForm[0].classList.remove("active");
      radios[0].checked = false;
      radios[1].checked = false;
      plegdeSections[1].style.border = "2px solid  hsl(0, 0%, 48%)";
    }
  });
}

function plegdeFormToggle() {
  plegdeForm.forEach((plegde) => {
    plegde.classList.add("active");
  });
}
// ATTACH MODALS TO BOOKMARK PROJECT BUTTON
bookmark();

function bookmark() {
  const bookmarkBtn = document.getElementById("bookmark");
  bookmarkBtn.addEventListener("click", () => {
    openMainModal();
  });
}

// THANK YOU MODAL
const successMsg = document.querySelector(".success");
// open thank you modal
function openThankyouModal() {
  successMsg.classList.add("show");
  showdarkOverlay();
}
// close thank you modal
closeThankyouModal();

function closeThankyouModal() {
  const successBtn = document.querySelector(".success__btn");
  successBtn.addEventListener("click", () => {
    successMsg.classList.remove("show");
    incrementAllStats();
    removeDarkOverlay();
  });
}

// Attach Thank You Modal To Main Modal
const subModal = document.querySelectorAll(".modal__pledge--form");

secondModal();

function secondModal() {
  subModal.forEach((modal) => {
    modal.addEventListener("submit", (e) => {
      openThankyouModal();
      closeMainModal();
      showdarkOverlay();
      e.preventDefault();
    });
  });
}

// ADD MODALS TO REWARD BUTTONS
const rewardBtn = document.querySelectorAll(".about__article--btn");

rewardModal();

function rewardModal() {
  rewardBtn.forEach((reward) => {
    reward.addEventListener("click", () => {
      openMainModal();
    });
  });
}

// Function To Increament Number Of Donors And Amount Raised
// Increase range Slider when donors abd prices increase
const range = document.getElementById("range");
function incrementAllStats() {
  // increament donors
  ++donors.textContent;
  // increment range
  range.value = parseInt(amountRaised.textContent) / 1000;
  // update total stats
  donatedMoney.forEach((dm) => {
    amountRaised.textContent =
      parseInt(amountRaised.textContent) + parseInt(dm.value);
  });
}
