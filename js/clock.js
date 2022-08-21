const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침시 함수 발동되기까지 걸리는 시간 단축

//setInterval(함수, 시간); 지정시간마다 해당 함수 발동
//setTimeout(함수, 시간); 1회성 타이머
setInterval(getClock, 1000);