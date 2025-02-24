console.log(`ba${2 / undefined}a`);

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

let userNum = Number(prompt("Enter a decimal number"));

console.log(decimalToBinary(userNum));
alert(decimalToBinary(userNum));
