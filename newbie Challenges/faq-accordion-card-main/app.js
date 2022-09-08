const answers = document.querySelectorAll(".answers");
const question = document.querySelectorAll(".question");
const faq = document.querySelectorAll(".FAQ");

question.forEach((item, index) => {
  item.addEventListener("click", function () {
    hideAllContents();

    if (item.classList.contains("show")) {
      item.classList.remove("show");
      answers[index].classList.remove("show");
      faq[index].classList.remove("show");
    } else {
      item.classList.add("show");
      answers[index].classList.add("show");
      faq[index].classList.add("show");
    }
  });
});

function hideAllContents() {
  answers.forEach((content) => content.classList.remove("show"));
  faq.forEach((content) => content.classList.remove("show"));
}
