import { isMainThread, parentPort, workerData } from "node:worker_threads";

if (!isMainThread && parentPort) {
	const { start, end } = workerData;
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	parentPort.postMessage(sum); // Send the result back to the main thread
}
