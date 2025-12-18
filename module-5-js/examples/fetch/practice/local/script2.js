const products = require('./products.json');

const shoppingList = "milk, apple"
let totalPrice = 0;

for (const product of products) {
    if (shoppingList.includes(product.name)) {
        totalPrice += product.price
    }
}

console.log(`Total price to pay is £${totalPrice}`)

