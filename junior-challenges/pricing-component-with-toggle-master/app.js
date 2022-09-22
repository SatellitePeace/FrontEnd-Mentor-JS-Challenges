const toggleBtn = document.getElementById("checkbox");
const toggleAmountTextContent = document.querySelectorAll(".toggle__amount");

// toggle btn listener
toggleAmount();
function toggleAmount() {
  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.checked === true) {
      monthlyCost();
    } else {
      yearlyCost();
    }
  });
}

//  variable and function for monthly cost
const monthlyMoney = ["$19.99", "$24.99", "$39.99"];
function monthlyCost() {
  toggleAmountTextContent.forEach((content, index) => {
    setTimeout(() => {
      content.textContent = monthlyMoney[index];
    }, 400);
  });
}
//  variable and function for yearly cost
const yearlyMoney = ["$199.99", "$249.99", "$399.99"];
function yearlyCost() {
  toggleAmountTextContent.forEach((content, index) => {
    setTimeout(() => {
      content.textContent = yearlyMoney[index];
    }, 400);
  });
}
