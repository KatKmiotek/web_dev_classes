// example 1

for (let i = 1; i <= 25; i++) {
  console.log(`Today I am opening advent calendar day ${i}`);
}

// example 2
let wallet = 0;
console.log(`starting with £${wallet} in my wallet`);
const numberOfPpl = 5;
const pricePerPerson = 15;
for (let i = 1; i <= numberOfPpl; i++) {
  console.log(`Person number ${i} paid £${pricePerPerson}`);
  wallet += pricePerPerson;
  console.log(`Now I have £${wallet} in my wallet`);
}

// example 3
function greet(friendNames) {
  console.log(`Hello ${friendNames}`);
}
const friendsNames = ["Anna", "Tom", "Julia"];
const petNames = ["Pop", "Nano", "Maks"];

for (let i = 0; i < petNames.length; i++) {
  greet(petNames[i]);
}

for (let i = 0; i < friendsNames.length; i++) {
  greet(friendsNames[i]); // greet("Anna")
}
