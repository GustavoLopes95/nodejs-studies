const net = require('net');

const connections = [];
net.createServer((connection) => {
    connections.push(connection);
    connection.write("Hello I'm the server");
    connection.on('data', (message) => {
        const command = message.toString();
        if(command.indexOf('/nickname') === 0) {
            const nickname = command.replace('/nickname ', '');
            broadcast(`${connection.nickname} is now ${nickname}`);
            connection.nickname = nickname;
            return;
        }
        connection.nickname = 'Anonymo';
        broadcast(`${connection.nickname}: ${message}`, connection);
    });
    connection.on('end', () => {
        broadcast(`${connection.nickname} was left!`, connection);
        connections.splice(connections.indexOf(connection), 1);
    });
}).listen(3000);

const broadcast = (message, origin) => {
    connections.forEach((conn) => {
        if(conn === origin) return;
        conn.write(message);
    })
}
