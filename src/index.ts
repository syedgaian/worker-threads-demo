import express from "express";
import { Worker } from "node:worker_threads";

const app = express();

app.get("/", async (req, res) => {
	console.log("Started Processing");
	const worker = new Worker("./src/worker.ts", {
		workerData: { start: 1, end: 1e6 },
	});
	worker.on("message", (data) => {
		res.status(200).send(`result is ${data}`);
	});
	worker.on("error", (msg) => {
		res.status(404).send(`An error occurred: ${msg}`);
	});
	worker.on("exit", (code) => {
		console.log(`Worker exited with code: ${code}`);
	});
});

app.listen(3000, () => {
	console.log("listening at port 3000");
});
