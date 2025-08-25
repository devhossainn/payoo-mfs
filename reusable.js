const logOutBtn = document.getElementById("logOut");
const addMoney = document.getElementById("addMoney");
const cashOut = document.getElementById("cashOut");
const transferMoney = document.getElementById("transferMoney");
const getBonus = document.getElementById("getBonus");
const payBill = document.getElementById("payBill");
const transactions = document.getElementById("transactions");

logOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
});
addMoney.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./addMoney.html";
});
cashOut.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./cashOut.html";
});
transferMoney.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./transferMoney.html";
});
getBonus.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./bonus.html";
});
payBill.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./payBill.html";
});
transactions.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./transaction.html";
});
