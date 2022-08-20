const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const Greeting = document.querySelector('#greeting');

const hiddenClassName = "hidden";
const userNameKey = "이름";

function onLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add(hiddenClassName);
  const username = loginInput.value;
  localStorage.setItem(userNameKey, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  Greeting.innerText = `안녕 ${username}`; //string이랑 함께 넣을때 ${} 필수
  Greeting.classList.remove(hiddenClassName);
}

const savedUserName = localStorage.getItem(userNameKey);

if (savedUserName === null) {
  //입력창 보이기
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //인삿말 보이기
  paintGreetings(savedUserName);
}