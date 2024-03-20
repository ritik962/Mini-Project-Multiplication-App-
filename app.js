const inputEl = document.querySelector("#input");
const formEl = document.querySelector(".container");
const quesEl = document.querySelector(".ques");
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const scoreEl = document.querySelector(".score");

quesEl.innerText = `What is ${num1} multiply by ${num2}?`;
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score : ${score}`;

const correctAns = num1 * num2;

const mulFunc = () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updataLocalStorage();
  } else {
    score--;
    updataLocalStorage();
  }
};

formEl.addEventListener("submit", mulFunc);

function updataLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
