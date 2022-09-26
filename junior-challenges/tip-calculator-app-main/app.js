const bill = document.getElementById("tipInput");
const tipPercent = document.querySelectorAll(".btn__values");
const customTipPercent = document.querySelector(".input__tip");
const numOfPeople = document.querySelector(".form__people--num");
const tipAmount = document.getElementById("tipAmount");
const tipTotal = document.getElementById("tipTotal");
const resetBtn = document.getElementById("reset");
const alert = document.querySelector(".alert");

function tips() {
  // define values
  let billValue;
  let personsValue;
  let serviceTip;
  let tipPersons;

  //   bill listener
  bill.addEventListener("input", () => {
    billValue = bill.value;
  });

  // get value of num of people to be tipped
  //   divide tip by number of persons
  numOfPeople.addEventListener("input", () => {
    personsValue = numOfPeople.value;
  });

  // loop through tip percent options
  for (let i = 0; i < tipPercent.length; i++) {
    let customerTip = tipPercent[i].textContent;
    // add listener to tp buttons
    tipPercent[i].parentNode.addEventListener("click", () => {
      serviceTip = parseFloat(billValue) / parseFloat(customerTip);
      console.log(serviceTip);
      tipAmount.textContent = serviceTip.toFixed(2);
    });
    // add listener for tipped persons numbers
    numOfPeople.addEventListener("input", () => {
      personsValue = numOfPeople.value;
      tipPersons = serviceTip / parseFloat(personsValue);
      console.log(tipPersons);
      myTotalTip = tipPersons + parseFloat(billValue);
      tipTotal.textContent = myTotalTip.toFixed(2);
    });
  }
}

tips();

function customTip() {
  let customServiceTip;
  let customPersonsValue;
  let customTipPersons;

  customTipPercent.addEventListener("input", () => {
    customServiceTip =
      parseFloat(bill.value) / parseFloat(customTipPercent.value);

    customPersonsValue = numOfPeople.value;

    customTipPersons = customServiceTip / parseFloat(customPersonsValue);

    tipAmount.textContent = customServiceTip.toFixed(2);
    // nested event listner for customer number of persons to be tipped
    numOfPeople.addEventListener("input", () => {
      customPersonsValue = numOfPeople.value;
      customTipPersons = customServiceTip / parseFloat(customPersonsValue);
      tipPersonPlusTotalAmount = customTipPersons + parseFloat(bill.value);
      tipTotal.textContent = tipPersonPlusTotalAmount.toFixed(2);
    });
  });
}

customTip();

// Error alert function
errorAlert();
function errorAlert() {
  numOfPeople.addEventListener("blur", () => {
    if (numOfPeople.value === "" || numOfPeople.value <= 0) {
      alert.classList.add("show");
      numOfPeople.classList.add("alertmsg");
    } else {
      alert.classList.remove("show");
      numOfPeople.classList.remove("alertmsg");
    }
  });
}

// Reset All Fields function
resetAllField();
function resetAllField() {
  resetBtn.addEventListener("click", () => {
    tipAmount.innerText = "0.00";
    tipTotal.innerText = "0.00";
    bill.value = "";
    numOfPeople.value = "";
    customTipPercent.value = "";
  });
}
