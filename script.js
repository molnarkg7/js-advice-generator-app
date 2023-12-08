const advice_title = document.getElementById("advice-header");
const advice_body = document.getElementById("advice-p");
const button = document.getElementById("dice");

function getAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      advice_title.innerHTML = `${data.slip.id}`;
      advice_body.innerHTML = `${data.slip.advice}`;
    });
}
document.body.addEventListener("load", getAdvice());
button.addEventListener("click", getAdvice);
