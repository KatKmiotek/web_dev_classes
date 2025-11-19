let fruits = ["apple", "banana", "orange"];
fruits.push("pear")
fruits.push("pineapple")
console.log("fruits - pear is added", fruits)
const len = fruits.length
console.log("Fruits array has elements: ", len)
console.log("1st element of fruits array", fruits[0])

function printArrayItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArrayItems(fruits); // prints each fruit in the array
