// declarations
let total = 2;
console.log("Total is: ", total);

function addNumber(numberToAdd) {
  console.log("Parameter passed to addNumber: ", numberToAdd);
  total += numberToAdd;
};

// multiply by value passed as parameter
function multiplyNumber(multiplier) {
  console.log("Parameter passed to multiplyNumber: ", multiplier)
  total = total * multiplier
}

function combineNames(firstName, secondName) {
  console.log(`${firstName} and ${secondName} are friends. `) 
}

function getGreetingMessage(myName) {
  const greeting = `Hello ${myName}`
  return greeting;
}

const myTotal = 20
function getTotal() {
  const result = myTotal + 2;
  return result
}



const totalValue = getTotal();
console.log("value of total is: ", totalValue)

combineNames("Anna", "Tom");
const greetingMessage = getGreetingMessage("Kat");
console.log("Greeting message is: ", greetingMessage)





multiplyNumber(2);
console.log("Now total is: ", total);

multiplyNumber(3);
console.log("Now total is: ", total);

addNumber(1);
console.log("Now total is: ", total);

multiplyNumber(4);
console.log("Now total is: ", total);

multiplyNumber(5);
console.log("Now total is: ", total);


addNumber(20);
console.log("Now total is: ", total);

addNumber(2);
console.log("Now total is: ", total);

addNumber(20000);
console.log("Now total is: ", total);
