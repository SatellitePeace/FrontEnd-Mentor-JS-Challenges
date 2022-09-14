const form = document.getElementById("form");
const input = document.getElementById("input");
const alert = document.getElementById("alert");

// form event listener
form.addEventListener("click", (e) => {
  validateForm();
  e.preventDefault();
});

// Validate Form function
function validateForm() {
  const inputValue = input.value;
  const validEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!inputValue == "" && validEmail.test(inputValue)) {
    addSuccessAlert();
  } else if (!inputValue === validEmail.test(inputValue)) {
    showCorrectEmailFormat();
  } else {
    addRedAlert();
  }
}

//Diffrent Alert Messages
function addRedAlert() {
  alert.classList.add("show");
  alert.innerHTML = "Whoops! It looks like you forgot to add your email";
  input.classList.add("show");
  input.focus();
}

function showCorrectEmailFormat() {
  alert.innerHTML = "Please provide a valid email address";
  input.value = "email@example.com";
  input.focus();
}

function addSuccessAlert() {
  alert.classList.add("show__success");
  alert.innerHTML = "Email Address Submitted Successfully";
  input.classList.add("show__success");
  input.value = "";
  removeAlertTimeout();
}

function removeAlertTimeout() {
  setTimeout(() => {
    alert.innerHTML = "";
    window.location.reload();
  }, 3000);
}
