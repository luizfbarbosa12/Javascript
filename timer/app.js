// new Date(0); = data inicial/timestamp zero.

const getTimeSeconds = (seconds) => {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BT", { hour12: false, timeZone: "GMT" });
};

const timer = document.querySelector("#timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const zero = document.querySelector(".zero");
let seconds = 0;
let time;

const startClock = () => {
  time = setInterval(function () {
    seconds++;
    timer.innerHTML = getTimeSeconds(seconds);
  }, 1000);
};

document.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("zero")) {
    clearInterval(time);
    timer.innerHTML = "00:00:00";
    seconds = 0;
    timer.classList.remove("paused");
  }

  if (element.classList.contains("start")) {
    timer.classList.remove("paused");
    clearInterval(time);
    startClock();
  }

  if (element.classList.contains("pause")) {
    clearInterval(time);
    timer.classList.add("paused");
  }
});



