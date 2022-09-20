const smallNavItems = document.querySelector(".small__nav--items");
const openSmallNavMenu = document.querySelector(".bi-list");
const closeSmallNavMenu = document.querySelector(".bi-x-square");

// TOGGLE SMALL NAVBAR FUNTION

toggleSmallNavMenu();

function toggleSmallNavMenu() {
  openSmallNavMenu.addEventListener("click", () => {
    smallNavItems.style.transform = "scale(1)";
    closeSmallNavMenu.style.display = "block";
    openSmallNavMenu.style.display = "none";
  });
  closeSmallNavMenu.addEventListener("click", () => {
    smallNavItems.style.transform = "scale(0)";
    openSmallNavMenu.style.display = "block";
    closeSmallNavMenu.style.display = "none";
  });
}

// CALL TO CATION FORM EMAIL VALDATION

const form = document.getElementById("form");
const email = document.getElementById("email");

callToActionFormValidation();

function callToActionFormValidation() {
  form.addEventListener("submit", (e) => {
    console.log(123);
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(email.value)) {
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      alert("email submitted successfuly");
      email.value = "";
    }
    e.preventDefault();
  });
}
