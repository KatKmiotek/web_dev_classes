const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log('Starting iterator demo — items:', items);

for (let i = 0; i < items.length; i++) {
	const item = items[i];
	console.log(`for-loop index ${i}:`, item);

	if (item.length % 2 === 0) {
		console.log(`  -> "${item}" has an even number of letters (${item.length})`);
	} else {
		console.log(`  -> "${item}" has an odd number of letters (${item.length})`);
	}
}


console.log('Iterator demo complete');
