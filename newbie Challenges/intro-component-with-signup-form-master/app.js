const form = document.getElementById("form");
const input = document.querySelectorAll("input");
const alerts = document.querySelectorAll(".alert");

const first = document.querySelector(".first");
const last = document.querySelector(".last");
const emailAdd = document.querySelector(".Email");
const password = document.querySelector(".Password");

validateForm();

function validateForm() {
  form.addEventListener("submit", function (e) {
    // show error and correct email format
    if (emailAdd.value == "") {
      emailAdd.setAttribute("value", "email@example.com");
    }
    // validate all input fields

    input.forEach(function (item) {
      const inputValue = item.value;
      console.log(inputValue);
      if (inputValue === "") {
        showAlertAndErrorIcon();
        item.removeAttribute("placeholder");
      } else {
        removeAlertAndErrorIcon();
      }
    });

    // VALIDATE INDIVIDUAL INPUT FIELDS
    first.addEventListener("input", () => {
      if (first.value == "") {
        first.setAttribute("placeholder", "First Name");
      } else {
        first.style.borderColor = "hsl(249, 10%, 26%)";
        removeAlertAndErrorIcon();
        first.setAttribute("placeholder", "First Name");
      }
    });
    // validate last name
    last.addEventListener("input", () => {
      if (last.value == "") {
        last.setAttribute("placeholder", "Last Name");
      } else {
        last.style.borderColor = "hsl(249, 10%, 26%)";
      }
    });

    // validate email
    emailAdd.addEventListener("input", () => {
      if (emailAdd.value == "") {
        emailAdd.setAttribute("placeholder", "Email Address");
        emailAdd.setAttribute("value", "yes");
      } else {
        emailAdd.style.borderColor = "hsl(249, 10%, 26%)";
      }
    });
    // validate password
    password.addEventListener("input", () => {
      if (password.value == "") {
        password.setAttribute("placeholder", "Password");
      } else {
        password.style.borderColor = "hsl(249, 10%, 26%)";
      }
    });

    e.preventDefault();
  });
}

// show and remove errors
function showAlertAndErrorIcon() {
  alerts.forEach((alert) => {
    alert.classList.add("show");
  });
  //   show red input border colour
  input.forEach(function (alert) {
    alert.classList.add("show");
  });
  // show  error icon
  document.querySelectorAll(".error__icon").forEach(function (icon) {
    icon.classList.add("show");
  });
}

function removeAlertAndErrorIcon() {
  const error = document.querySelectorAll(".alert").forEach(function (alert) {
    alert.classList.remove("show");
  });
  //  remove red input border colour
  input.forEach(function (alert) {
    alert.classList.remove("show");
  });
  // remove error icon
  document.querySelectorAll(".error__icon").forEach(function (icon) {
    icon.classList.remove("show");
  });
}
