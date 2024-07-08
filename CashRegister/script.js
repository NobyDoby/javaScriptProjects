let currencyUnit = [
  { name: "ONE HUNDRED", val: 10000 },
  { name: "TWENTY", val: 2000 },
  { name: "TEN", val: 1000 },
  { name: "FIVE", val: 500 },
  { name: "ONE", val: 100 },
  { name: "QUARTER", val: 25 },
  { name: "DIME", val: 10 },
  { name: "NICKEL", val: 5 },
  { name: "PENNY", val: 1 },
];

let price = 1.86;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

function checkCashRegister(price, cash, cid) {
  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = "";
  let cidSum = 0;

  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem, index) => {
    let currName = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0;

    let unit = currencyUnit.find((unit) => unit.name === currName).val;

    while (changeSum >= unit && currSum > 0) {
      amount += unit;
      changeSum -= unit;
      currSum -= unit;
    }
    if (amount !== 0) {
      change.push([currName, amount / 100]);
    }
  });

  console.log(changeSum);
  console.log(changeSumCheck);
  console.log(cidSum);
  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = "CLOSED";
    change = filteredCid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

document.getElementById("purchase-btn").addEventListener("click", function () {
  let cashElement = document.getElementById("cash");
  let cash = parseFloat(cashElement.value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else {
    if (price === cash) {
      document.getElementById("change-due").innerHTML =
        "No change due - customer paid with exact cash";
      return;
    }
    let result = checkCashRegister(price, cash, cid);
    let statusText =
      "Status: " +
      result.status +
      " " +
      result.change.map((item) => item[0] + ": $" + item[1]).join(", ");
    if (status == "INSUFFICIENT_FUNDS") {
      document.getElementById("change-due").innerHTML =
        "Status: " + result.status;
    }
    document.getElementById("change-due").innerHTML = statusText;
  }
});
