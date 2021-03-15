const { connect } = require('http2');
const net = require('net');

const client = net.connect(3000);
client.on('connect', () => {
    client.write("Hello I'm the client");
});

client.on('data', (message) => {
    console.log(message.toString());
});
client.on('end', () => {
    process.exit();
})

process.stdin.on('readable', () => {
    let message = process.stdin.read();
    if(!message) return;
    message = message.toString().replace(/\n/, '');
    client.write(message);
})
 