const rangeSlide = document.getElementById("range");
const checkboxSlide = document.getElementById("checkbox");
const pageviews = document.getElementById("pageviews");
const price = document.getElementById("price");
const rangeValue = document.querySelector(".range__value");

// amount to be inserted dynamically
const amount = [8, 12, 16, 24, 36];
// views
const views = [
  "10K pageviews",
  "50K pageviews",
  "100K pageviews",
  "500k pageviews",
  "1M pageviews",
];

// SLIDER FUNCTION FOR DYNAMICALLY ADDING PRICE AND PAGEVIEWS
rangeOfViews();

function rangeOfViews() {
  // range slide listener
  rangeSlide.addEventListener("input", (e) => {
    rangeValue.innerHTML = e.target.value;
    if (rangeSlide.value === 10000 || rangeSlide.value < 50000) {
      price.textContent = amount[0];
      pageviews.textContent = views[0];
    } else if (rangeSlide.value === 50000 || rangeSlide.value < 100000) {
      price.textContent = amount[1];
      pageviews.textContent = views[1];
    } else if (rangeSlide.value === 100000 || rangeSlide.value < 500000) {
      price.textContent = amount[2];
      pageviews.textContent = views[2];
    } else if (rangeSlide.value === 500000 || rangeSlide.value < 1000000) {
      price.textContent = amount[3];
      pageviews.textContent = views[3];
    } else {
      price.textContent = amount[4];
      pageviews.textContent = views[4];
    }
  });
}

// FUNCTION FOR DISCOUNT TOGGLE
discountToggle();
let yearlyBill = 25;
let discount = [
  amount[0] / yearlyBill,
  amount[1] / yearlyBill,
  amount[2] / yearlyBill,
  amount[3] / yearlyBill,
  amount[4] / yearlyBill,
];
function discountToggle() {
  checkboxSlide.addEventListener("click", () => {
    if (checkboxSlide.checked === true) {
      if (price.textContent == amount[0]) {
        price.textContent = discount[0];
        timeout();
      } else if (price.textContent == amount[1]) {
        price.textContent = discount[1];
        timeout();
      } else if (price.textContent == amount[2]) {
        price.textContent = discount[2];
        timeout();
      } else if (price.textContent == amount[3]) {
        price.textContent = discount[3];
        timeout();
      } else {
        price.textContent = discount[4];
        timeout();
      }
    } else {
      price.textContent = rangeSlide.value;
    }
  });
}

// function to uncheck checkbox
function timeout() {
  setTimeout(() => {
    checkboxSlide.checked = false;
  }, 1000);
}
