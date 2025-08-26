document.addEventListener("DOMContentLoaded", function () {
  const logOutBtn = document.getElementById("logOut");
  const addMoney = document.getElementById("addMoney");
  const cashOut = document.getElementById("cashOut");
  const transferMoney = document.getElementById("transferMoney");
  const getBonus = document.getElementById("getBonus");
  const payBill = document.getElementById("payBill");
  const transactions = document.getElementById("transactions");

  if (logOutBtn) {
    logOutBtn.addEventListener("click", function (e) {
      window.location.href = "./index.html";
    });
  }
  if (addMoney) {
    addMoney.addEventListener("click", function (e) {
      window.location.href = "./addMoney.html";
    });
  }
  if (cashOut) {
    cashOut.addEventListener("click", function (e) {
      window.location.href = "./cashOut.html";
    });
  }
  if (transferMoney) {
    transferMoney.addEventListener("click", function (e) {
      window.location.href = "./transferMoney.html";
    });
  }
  if (getBonus) {
    getBonus.addEventListener("click", function (e) {
      window.location.href = "./bonus.html";
    });
  }
  if (payBill) {
    payBill.addEventListener("click", function (e) {
      window.location.href = "./payBill.html";
    });
  }
  if (transactions) {
    transactions.addEventListener("click", function (e) {
      window.location.href = "./transaction.html";
    });
  }
});

/**
 * সব button element কে page-specific না হলে check করা উচিত (if (addMoney))।
এটা করলে, যদি কোনো পেজে সেই button না থাকে, তখন error আসবে না।
Reusable JS একাধিক পেজে safe ভাবে ব্যবহার করা যাবে।
 */
/** shortage method of previous code 
 * 
 * document.addEventListener("DOMContentLoaded", function () {
  // কোন button কোন page এ যাবে
  const buttons = {
    logOut: "./index.html",
    addMoney: "./addMoney.html",
    cashOut: "./cashOut.html",
    transferMoney: "./transferMoney.html",
    getBonus: "./bonus.html",
    payBill: "./payBill.html",
    transactions: "./transaction.html"
  };

  // সব button এ eventListener attach করা
  for (let id in buttons) {
    const btn = document.getElementById(id);
    if (btn) { // button যদি page এ থাকে
      btn.addEventListener("click", function () {
        window.location.href = buttons[id]; // redirect
      });
    }
  }
});

 */
