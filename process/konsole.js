const Konsole = {
    log: function(msg) {
        process.stdout.write(`${msg}\n`);
    },
    error: function(msg) {
        process.stderr.write(`${msg}\n`);
    }
}
Konsole.log('Reescrevendo o console.log');
Konsole.error('Reescrevendo o console.error');