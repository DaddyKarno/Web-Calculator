let input1 = "";
let input2 = "";
let result = 0;
let sign = "";
let finish = false;

const screnResult = document.getElementById("result");
function clear() {
  input1 = "";
  input2 = "";
  sign = "";
  finish = false;
  screnResult.textContent = input1;
}

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
document.getElementById("resultBtn").onclick = function btnResult() {
  if (sign === "+") {
    result = Number(input1) + Number(input2);
    screnResult.textContent = result;
  } else if (sign === "-") {
    result = Number(input1) - Number(input2);
    screnResult.textContent = result;
  } else if (sign === "*") {
    result = Number(input1) * Number(input2);
    screnResult.textContent = result;
  } else if (sign === "/") {
    result = Number(input1) / Number(input2);
    screnResult.textContent = result;
  }
};
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

document.getElementById("numberThree").onclick = function btn3() {
  if (finish === false) {
    input1 += "3";
    screnResult.textContent = input1;
  } else {
    input2 += "3";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberFour").onclick = function btn4() {
  if (finish === false) {
    input1 += "4";
    screnResult.textContent = input1;
  } else {
    input2 += "4";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberFive").onclick = function btn5() {
  if (finish === false) {
    input1 += "5";
    screnResult.textContent = input1;
  } else {
    input2 += "5";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberSix").onclick = function btn6() {
  if (finish === false) {
    input1 += "6";
    screnResult.textContent = input1;
  } else {
    input2 += "6";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberSeven").onclick = function btn7() {
  if (finish === false) {
    input1 += "7";
    screnResult.textContent = input1;
  } else {
    input2 += "7";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberEight").onclick = function btn8() {
  if (finish === false) {
    input1 += "8";
    screnResult.textContent = input1;
  } else {
    input2 += "8";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberNine").onclick = function btn9() {
  if (finish === false) {
    input1 += "9";
    screnResult.textContent = input1;
  } else {
    input2 += "9";
    screnResult.textContent = input2;
  }
  console.log(input1);
};
document.getElementById("numberZero").onclick = function btn0() {
  if (finish === false) {
    input1 += "0";
    screnResult.textContent = input1;
  } else {
    input2 += "0";
    screnResult.textContent = input2;
  }
  console.log(input1);
};

document.getElementById("clearBtn").onclick = clear;
