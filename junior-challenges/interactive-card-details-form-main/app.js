// GET IDs FOR ALL INPUT FIELDS
document.getElementById("name").addEventListener("blur", validateName);

document
  .getElementById("card__number")
  .addEventListener("blur", validateNumber);

document.getElementById("month").addEventListener("blur", validateMonth);

document.getElementById("year").addEventListener("blur", validateYear);

document.getElementById("cvc").addEventListener("blur", validateCvc);
//
const formSubmit = document.getElementById("form");
const input = document.querySelectorAll("input");

// VALIDATE INDIVIDUAL INPUT USING REGEX
// validate name
function validateName() {
  const name = document.getElementById("name");
  const regex = /(^[-'a-zA-ZÀ-ÖØ-öø-ſ\s]{5,30}$)/;
  if (!regex.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("borderColor");
  }
}
// validate number
function validateNumber() {
  const cardNumber = document.getElementById("card__number");
  const regex = /^\(?\d{4}\)?[ ]?\d{4}[ ]?\d{4}?[ ]?\d{4}$/;

  if (!regex.test(cardNumber.value)) {
    cardNumber.classList.add("is-invalid");
  } else {
    cardNumber.classList.remove("is-invalid");
    cardNumber.classList.add("borderColor");
  }
}
// validate month
function validateMonth() {
  const month = document.getElementById("month");
  const regex =
    /\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)/gi;
  if (!regex.test(month.value)) {
    month.classList.add("is-invalid");
  } else {
    month.classList.remove("is-invalid");
    month.classList.add("borderColor");
  }
}
// validate year
function validateYear() {
  const year = document.getElementById("year");
  const regex = /^[12][0-9]{3}$/;
  if (!regex.test(year.value)) {
    year.classList.add("is-invalid");
  } else {
    year.classList.remove("is-invalid");
    year.classList.add("borderColor");
  }
}
// validate cvc number
function validateCvc() {
  const cvc = document.getElementById("cvc");
  const regex = /^[0-9]{3,4}$/;
  if (!regex.test(cvc.value)) {
    cvc.classList.add("is-invalid");
  } else {
    cvc.classList.remove("is-invalid");
    cvc.classList.add("borderColor");
  }
}

// VALIDATE INPUT COLLECTIVELY

// form submit event listener
formSubmit.addEventListener("submit", (e) => {
  validateAllInput();
  e.preventDefault();
});

// form submit function
function validateAllInput() {
  input.forEach((item) => {
    if (item.value === "") {
      item.style.borderColor = "hsl(0, 100%, 66%)";
      timeout();
    } else {
      formSubmit.innerHTML = ` <div class="thank__you--popup" role="alertdialog">
        <figure>
          <img src="/images/icon-complete.svg" alt="Thank you message image" class="thank__you">
        </figure>
        <h1>Thank you!</h1>
        <p class="thanks__message">
          We've added your card details
        </p>
        <button class="button" id="reload__btn">
          Continue
        </button>
      </div> `;
    }
  });
}
// remove the thank you message and reload page on click
document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "reload__btn") {
    window.location.reload();
  }
});

// set timeout for removing red border colour
function timeout() {
  input.forEach((item) => {
    setTimeout(() => {
      item.style.borderColor = "";
      item.classList.remove("input__valid");
    }, 2000);
  });
}
