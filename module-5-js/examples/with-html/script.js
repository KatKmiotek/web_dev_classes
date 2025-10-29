document.addEventListener('DOMContentLoaded', () => {
	let value = 0;

	const countEl = document.getElementById('count');
	const incBtn = document.getElementById('inc');
	const decBtn = document.getElementById('dec');
	const resetBtn = document.getElementById('reset');

	function render() {
		if (countEl) countEl.textContent = value;
		console.log('Rendered value:', value);
	}

	if (incBtn) incBtn.addEventListener('click', () => { value += 1; console.log('Increment ->', value); render(); });
	if (decBtn) decBtn.addEventListener('click', () => { value -= 1; console.log('Decrement ->', value); render(); });
	if (resetBtn) resetBtn.addEventListener('click', () => { value = 0; console.log('Reset ->', value); render(); });

	render();
});
