const { rejects } = require('assert');
const fb = require('fibonacci');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const runFibonacci = workerData => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData });
        worker.on('message', (message) => resolve(message));
        worker.on('error', (err) => reject(err));
        worker.on('exit', code => {
            if(code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

if(!isMainThread) {
    const result = fb.iterate(workerData.iterations);
    parentPort.postMessage(result);
}

module.exports = runFibonacci;