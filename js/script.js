// login page validation

const loginBtn = document.getElementById("loginBtn");
const inputNumber = document.getElementById("numberInput");
const inputPin = document.getElementById("pinNumberInput");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputNumberValue = inputNumber.value;
  const inputPinValue = inputPin.value;
  if (
    inputNumberValue.length === 11 &&
    inputNumberValue.startsWith("01") &&
    inputPinValue.length >= 4
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Your number is not valid or password incorrect");
  }
});

