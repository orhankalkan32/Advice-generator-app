const dice = document.querySelector("#dice");
const adviceid = document.querySelector("#adviceid");
const advice = document.querySelector("#advice");

dice.addEventListener("click", function () {
  axios.get("https://api.adviceslip.com/advice").then((res) => {
    adviceid.textContent = res.data.slip.id;
    advice.textContent = res.data.slip.advice;
  });
});
