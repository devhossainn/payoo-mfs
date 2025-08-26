const addMoneyBtn = document.getElementById("add-money-btn");

addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const bank = document.getElementById("bank").value;
  const bankNumber = document.getElementById("bank-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  const amountMoney = parseInt(document.getElementById("amount-money").value);
  const balanceElm = document.getElementById("balance");
  const balance = parseInt(balanceElm.innerText);
  const totalBalance = amountMoney + balance;

  balanceElm.innerText = totalBalance;
});
