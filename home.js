// features
const addMoneyElm = document.getElementById("add-money-feature");
const cashOutElm = document.getElementById("cash-out-feature");
const transferMoneyElm = document.getElementById("transfer-money-feature");
const getBonusElm = document.getElementById("get-bonus-feature");
const payBillElm = document.getElementById("pay-bill-feature");
const transactionElm = document.getElementById("transaction-feature");

// AddMoney feature functionality
document
  .getElementById("add-money-feature-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const balanceElm = document.getElementById("balance");
    const balance = parseInt(balanceElm.innerText);
    const amountMoney = parseInt(
      document.getElementById("add-money-amount").value
    );
    const totalBalance = balance + amountMoney;
    const bankNumber = document.getElementById("bank-number").value;
    const pinNumber = document.getElementById(
      "add-money-user-pin-number"
    ).value;
    if (bankNumber.length < 11) {
      alert("Your Bank number is not validate");
      return;
    }
    if (pinNumber.length < 4) {
      alert("Your pin number is not validate");
      return;
    }

    balanceElm.innerText = totalBalance;
  });
// cash out feature functionality
document
  .getElementById("cash-out-feature-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const balanceElm = document.getElementById("balance");
    const balance = parseInt(balanceElm.innerText);
    const amountMoney = parseInt(
      document.getElementById("cash-out-amount").value
    );
    const agentNumber = document.getElementById("cash-out-agent-number").value;
    const agentPinNumber = document.getElementById("cash-out-user-pin-number").value;
    const totalBalance = balance - amountMoney;
    if (agentNumber.length < 11) {
      alert("Your Bank number is not validate");
      return;
    }
    if (agentPinNumber.length < 4) {
      alert("Your pin number is not validate");
      return;
    }

    balanceElm.innerText = totalBalance;
  });
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
