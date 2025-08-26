// features
const addMoneyElm = document.getElementById("add-money-feature");
const cashOutElm = document.getElementById("cash-out-feature");
const transferMoneyElm = document.getElementById("transfer-money-feature");
const getBonusElm = document.getElementById("get-bonus-feature");
const payBillElm = document.getElementById("pay-bill-feature");
const transactionElm = document.getElementById("transaction-feature");

// feature functionality

// toggling service feature
function hideAllFeature() {
  addMoneyElm.classList.replace("block", "hidden");
  cashOutElm.classList.replace("block", "hidden");
  transferMoneyElm.classList.replace("block", "hidden");
  getBonusElm.classList.replace("block", "hidden");
  payBillElm.classList.replace("block", "hidden");
  transactionElm.classList.replace("block", "hidden");
}

document
  .getElementById("add-money-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    addMoneyElm.classList.replace("hidden", "block");
  });
document
  .getElementById("cash-out-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    cashOutElm.classList.replace("hidden", "block");
  });
document
  .getElementById("transfer-money-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    transferMoneyElm.classList.replace("hidden", "block");
  });
document
  .getElementById("get-bonus-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    getBonusElm.classList.replace("hidden", "block");
  });
document
  .getElementById("pay-bill-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    payBillElm.classList.replace("hidden", "block");
  });
document
  .getElementById("transaction-service-btn")
  .addEventListener("click", function (e) {
    hideAllFeature();
    transactionElm.classList.replace("hidden", "block");
  });
