const bill = document.querySelector(".bill");
const tips = document.querySelectorAll(".tip_buttons button");
const custom = document.querySelector(".custom");
const peopleCount = document.querySelector("#People");
const tipPerPerson = document.querySelector(".tip_amount");
const totalPerPerson = document.querySelector(".total_amount");
const reset = document.querySelector(".reset");

bill.value = 142.55;
peopleCount.value = 5;
tipPerPerson.innerHTML = "$" + (4.27).toFixed(2);
totalPerPerson.innerHTML = "$" + (32.79).toFixed(2);

let billValue = 142.55;
let peopleValue = 5;
let tipValue = 0.15;

bill.addEventListener("input", () => {
  billValue = parseFloat(bill.value);

  calcTip(billValue, tipValue, peopleValue);
});

tips.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    tips.forEach((tip) => {
      tip.classList.remove("active");
      if (e.target.innerHTML == tip.innerHTML) {
        tip.classList.toggle("active");
        tipValue = parseFloat(tip.innerHTML) / 100;
        calcTip(billValue, tipValue, peopleValue);
      }
    });
  });
});

custom.addEventListener("input", () => {
  if (custom.value) {
    tipValue = parseFloat(custom.value) / 100;

    calcTip(billValue, tipValue, peopleValue);
  }
});

peopleCount.addEventListener("input", () => {
  if (peopleCount.value) {
    peopleValue = parseFloat(peopleCount.value);
    if (peopleValue === 0) {
      document.querySelector(".msg").style.display = "block";
      peopleCount.style.outline = "3px solid red";
    } else {
      document.querySelector(".msg").style.display = "none";
      peopleCount.style.outline = "none";
      calcTip(billValue, tipValue, peopleValue);
    }
  }
});
const calcTip = (billValue, tipValue, peopleValue) => {
  let tipAmount = (billValue * tipValue) / peopleValue;
  let total = (billValue + tipValue) / peopleValue;

  tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);

  totalPerPerson.innerHTML = "$" + total.toFixed(2);
};

reset.addEventListener("click", (e) => {
  bill.value = 142.55;
  peopleCount.value = 5;
  tipPerPerson.innerHTML = "$" + (4.27).toFixed(2);
  totalPerPerson.innerHTML = "$" + (32.79).toFixed(2);
});
