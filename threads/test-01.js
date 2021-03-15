const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

console.log('Teste');
if(isMainThread) {
    const worker = new Worker(__filename, { workerData: 1 });
    worker.on('message', (message) => {
        console.log('message:', message);
    });
} else {
    const someMath = workerData + 1;
    parentPort.postMessage(someMath);
}