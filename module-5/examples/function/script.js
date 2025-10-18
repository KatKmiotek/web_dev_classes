let total = 0;
console.log("Total is: ", total);

function addNumber(numberToAdd) {
  console.log("Parameter is", numberToAdd);
  total += numberToAdd;
}

addNumber(1);
console.log("New total is: ", total);

addNumber(20);
console.log("New total is: ", total);

addNumber(2);
console.log("New total is: ", total);

addNumber(20000);
console.log("New total is: ", total);
