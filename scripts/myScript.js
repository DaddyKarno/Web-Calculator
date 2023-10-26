let input1 = "";
let input2 = "";
let result;
let sign = "";
let finish = false;
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "/", "*"];
let intermediateInput = document.getElementById("intermediateInput");

const screnResult = document.getElementById("result");
function endCalculate() {
  finish = false;
  input1 = String(result);
  input2 = "";
}
function clear() {
  input1 = "";
  input2 = "";
  sign = "";
  finish = false;
  screnResult.textContent = input1;
  intermediateInput.textContent = "0";
}
function handleNumberClick(digit) {
  if (finish === false) {
    input1 += digit;
    screnResult.textContent = input1;
  } else {
    input2 += digit;
    screnResult.textContent = input2;
  }
  intermediateInput.textContent = input1 + sign + input2;
}
function handleActionClick(action) {
  finish = true;
  sign = action;
}
function saveResult() {
  localStorage.setItem("result:", result.toString());
}
document.getElementById("plus").onclick = () => handleActionClick("+");
document.getElementById("minus").onclick = () => handleActionClick("-");
document.getElementById("divide").onclick = () => handleActionClick("/");
document.getElementById("multiply").onclick = () => handleActionClick("*");
document.getElementById("numberOne").onclick = () => handleNumberClick("1");
document.getElementById("numberTwo").onclick = () => handleNumberClick("2");
document.getElementById("numberThree").onclick = () => handleNumberClick("3");
document.getElementById("numberFour").onclick = () => handleNumberClick("4");
document.getElementById("numberFive").onclick = () => handleNumberClick("5");
document.getElementById("numberSix").onclick = () => handleNumberClick("6");
document.getElementById("numberSeven").onclick = () => handleNumberClick("7");
document.getElementById("numberEight").onclick = () => handleNumberClick("8");
document.getElementById("numberNine").onclick = () => handleNumberClick("9");
document.getElementById("numberZero").onclick = () => handleNumberClick("0");
document.getElementById("clearBtn").onclick = clear;
document.getElementById("resultBtn").onclick = function btnResult() {
  switch (sign) {
    case "+": {
      result = Number(input1) + Number(input2);
      screnResult.textContent = result;
      break;
    }
    case "-": {
      result = Number(input1) - Number(input2);
      screnResult.textContent = result;
      break;
    }
    case "/": {
      if (input2 === "0") {
        screnResult.textContent = "Ошибка! Делить на 0 нельзя";
        return;
      }
      result = Number(input1) / Number(input2);
      screnResult.textContent = result;
      break;
    }
    case "*": {
      result = Number(input1) * Number(input2);
      screnResult.textContent = result;
      break;
    }
  }
  intermediateInput.textContent = "0";
  endCalculate();
  saveResult();
};
