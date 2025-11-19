const items = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("Starting iterator demo — items:", items);

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log(`for-loop index ${i}:`, item);

  if (item.length % 2 === 0) {
    console.log(
      `  -> "${item}" has an even number of letters (${item.length})`
    );
  } else {
    console.log(`  -> "${item}" has an odd number of letters (${item.length})`);
  }
}

console.log("Iterator demo complete");

function describeWalks(walkNames, walkDistances) {
  console.log("Walks summary:");
  const maxLen = Math.min(walkNames.length, walkDistances.length);
  for (let i = 0; i < maxLen; i++) {
    const name = walkNames[i];
    const dist = walkDistances[i];

    let suggestion = "";
    if (dist === "short") {
      suggestion = "Short walk — roughly 30–90 minutes. Good for beginners.";
    } else if (dist === "long") {
      suggestion = "Long walk — allow several hours, bring water and snacks.";
    } else {
      suggestion = "Unknown distance — check details before you go.";
    }

    console.log(`${i + 1}. ${name} — ${dist}. ${suggestion}`);
  }

  console.log("Walk names:");
  for (const walk of walkNames) {
    console.log(" -", walk);
  }
  for (let i = 0; i < walkNames.length; i++) {
    console.log(" -", walk);
  }
}

const walks = ["Glen Loin Loop", "The Cobbler", "3 Lochs Way"];
const distance = ["short", "long", "short"];

describeWalks(walks, distance);
