let input1 = "";
let input2 = "";
let result = 0;
let sign = "";
let finish = false;
const digit = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "/", "*"];

function clear() {
  input1 = "";
  input2 = "";
  sign = "";
  finish = false;
  screnResult.textContent = input1;
}
document.getElementById("numberOne").onclick = function btn1() {
  if (finish === false) {
    input1 += "1";
    screnResult.textContent = input1;
  } else {
    input2 += "1";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberTwo").onclick = function btn2() {
  if (finish === false) {
    input1 += "2";
    screnResult.textContent = input1;
  } else {
    input2 += "2";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("plus").onclick = function btnPlus() {
  finish = true;
  sign = "+";
};
document.getElementById("minus").onclick = function btnMinus() {
  finish = true;
  sign = "-";
};
document.getElementById("divide").onclick = function btnDivide() {
  finish = true;
  sign = "/";
};
document.getElementById("multiply").onclick = function btnMultiply() {
  finish = true;
  sign = "*";
};
