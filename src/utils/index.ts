export function calculateCount() {
	return new Promise((resolve, reject) => {
		let counter = 0;
		for (let i = 0; i < 20_000_000_000; i++) {
			counter++;
		}
		resolve(counter);
	});
}

export function delay(time: number) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

export function blockForTime(time: number) {
	const start = Date.now();
	while (Date.now() - start < time) {
		// Busy-wait loop to block the event loop
	}
}
