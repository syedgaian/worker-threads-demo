import express from "express";

const app = express();

function delay(time: number) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function blockForTime(time: number) {
	const start = Date.now();
	while (Date.now() - start < time) {
		// Busy-wait loop to block the event loop
	}
}
function calculateCount() {
	return new Promise((resolve, reject) => {
		let counter = 0;
		for (let i = 0; i < 20_000_000_000; i++) {
			counter++;
		}
		resolve(counter);
	});
}
app.get("/", async (req, res) => {
	console.log("processing started");
	const counter = await calculateCount();
	res.send("Hello" + counter);
});

app.listen(3000, () => {
	console.log("listening at port 3000");
});
