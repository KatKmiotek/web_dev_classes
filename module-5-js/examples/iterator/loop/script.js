// example 1

for (let i = 0; i < 5; i++) {
  console.log("Number is: ", i)
}

// example 2
let wallet = 0;
console.log(`starting with £${wallet} in my wallet`)
const numberOfPpl = 5;
const pricePerPerson = 15;
for (let i = 1; i <= numberOfPpl; i++) {
  console.log(`Person number ${i} paid £${pricePerPerson}`);
  wallet += pricePerPerson
  console.log(`Now I have £${wallet} in my wallet`)
}
