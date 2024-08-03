const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const closeBtn = document.querySelector(".close");
const resetBtn = document.querySelector(".reset");
const timeBtn = document.querySelector(".times");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const timeList = document.querySelector(".time-list");
const time = document.querySelector(".time");
const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = () => {
    clearInterval(countTime);
  countTime =
    setInterval(() => {
      if(seconds  < 9 ) {
        seconds++;
        stopwatch.textContent = `${minutes}:0${seconds}`;
      } else if (seconds >= 9 && seconds < 59){
        seconds++;
        stopwatch.textContent = `${minutes}:${seconds}`;
      }
      else{
        minutes++;
        seconds = 0;
        stopwatch.textContent = `${minutes}:00`;
      }
      
      
    },100);
};

const handlePause = () => {
    clearInterval(countTime);

}

const handleStop = () => {

time.innerHTML = `Ostatni czas ${stopwatch.textContent}`;

    if(stopwatch.textContent !== '00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
       
    }
    clear();
}

const handleReset = () => {
time.style.visibility= 'hidden';
timesArr = [];
    clear();
}

const clear = () => {
    handlePause();
    stopwatch.textContent= '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showHistory = () => {
    timeList.textContent = '';
    let result = 1;
    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Wynik nr ${result++}: <span>${time}</span>`
        timeList.appendChild(newTime);
    })
}

const showModal = () => {
        if(!(modalShadow.style.display === 'block')){
            modalShadow.style.display = 'block';
        }else {
            modalShadow.style.display = 'none';
        }

        modalShadow.classList.toggle('modal-animation');

}

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener('click',handlePause);
stopBtn.addEventListener('click',handleStop);
resetBtn.addEventListener('click',handleReset);
historyBtn.addEventListener('click',showHistory);
infoBtn.addEventListener('click',showModal);
closeBtn.addEventListener('click',showModal);

window.addEventListener('click', e => e.target === modalShadow ? showModal() :false)