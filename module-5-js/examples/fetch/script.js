const walks = require("./data.json");

for (const walk of walks) {
  console.log(`Walk title is: ${walk.title}`);
  console.log(`It is a ${walk.distance} walk`);
}

// instruction: open Terminal -> New Terminal and type: node module-5-js/examples/fetch/script.js
// this will execute above script and print output in terminal
