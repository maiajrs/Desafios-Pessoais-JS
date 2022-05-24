const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");

let contadorSeconds = 0;
let contadorMinutes = 0;
let intervalRef;

const btnStart = document.querySelector(".iniciar");
console.log(btnStart);
const btnStop = document.querySelector(".pausar");
const btnRestart = document.querySelector(".reiniciar");

function startWatch() {
  intervalRef = setInterval(() => {
    if (contadorSeconds > 9) {
      contadorSeconds = 0;
      contadorMinutes++;
      if (contadorMinutes > 9) {
        minutes.innerHTML = contadorMinutes;
      } else {
        minutes.innerHTML = "0" + contadorMinutes;
      }
    }
    if (contadorSeconds < 9) {
        console.log(seconds.innerHTML, contadorSeconds);
      seconds.innerHTML = "0" + ++contadorSeconds;
    } else {
      seconds.innerHTML = ++contadorSeconds;
      console.log(contadorSeconds);
    }
  }, 1000);
  btnStart.setAttribute("disabled", "disabled");
}

function stopWatch() {
  clearInterval(intervalRef);
  btnStart.removeAttribute("disabled");
  if (contadorSeconds > 0) {
    btnStart.innerHTML = "Retomar";
  }
}

function restartWatch() {
  clearInterval(intervalRef);
  btnStart.removeAttribute("disabled");
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  btnStart.innerHTML = "Iniciar";
  contadorSeconds = 0;
  contadorMinutes = 0;
}

btnStart.addEventListener("click", startWatch);
btnStop.addEventListener("click", stopWatch);
btnRestart.addEventListener("click", restartWatch);
