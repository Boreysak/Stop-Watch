let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector('.time-display');
let x = null

document.querySelector('#start-time').addEventListener('click', ()=>{
  if(x !== null){
    x = clearInterval(x);
  }
  x = setInterval(displayTime, 10);
});

document.querySelector('#pause-time').addEventListener('click', ()=>{
  x = clearInterval(x);
});

document.querySelector('#reset-button').addEventListener('click', ()=>{
  x = clearInterval(x);
  timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTime(){
  milliseconds += 10;
  if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;
    if(seconds == 60){
      seconds = 0;
      minutes++;
      if(minutes == 60);
      minutes = 0;
      hours++;
      if(hours == 24){
        hours = 0;
        timeRef.innerHTML = "00 : 00 : 00 : 000"
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds
      : milliseconds < 100 ? "0" + milliseconds
      :milliseconds;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}