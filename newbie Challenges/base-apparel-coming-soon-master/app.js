const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const formSubmit = document.querySelector(".input__submit");
const formAlert = document.querySelector(".form__alert");

form.addEventListener("submit", function (e) {
  // get form input value
  const inputValue = formInput.value;
  console.log(inputValue);

  // Validate email address
  if (inputValue == "") {
    formInput.classList.add("error");
    formAlert.innerHTML = `<small class="alert alert-danger">
              <i class="bi bi-exclamation-circle-fill"></i> Please fill email field!
            </small>`;
    removeAlert();
  } else if (inputValue.length < 10 || inputValue.length > 30) {
    formInput.classList.add("warning");
    formAlert.innerHTML = ` 
            <small class="alert alert-warning">
               <i class="bi bi-exclamation-circle-fill"></i>  Please fill email field!
            </small>
            `;
    removeAlert();
  } else {
    if (!inputValue.includes("@") || !inputValue.includes(".")) {
      formInput.classList.add("warning");
      formAlert.innerHTML = `<small class="alert alert-warning">
     
      <i class="bi bi-exclamation-circle-fill"></i>  Please include an @ and an .
            </small>`;
      removeAlert();
    } else {
      formInput.classList.add("success");
      formAlert.innerHTML = `<small class="alert alert-primary">
<i class="bi bi-check-circle-fill"></i> form is valid
            </small>`;
      removeAlert();
    }
  }

  e.preventDefault();
});

// remove alert
function removeAlert() {
  setTimeout(() => {
    formAlert.innerHTML = "";
    formInput.classList.remove("error");
    formInput.classList.remove("warning");
    formInput.classList.remove("success");
  }, 3000);
}
