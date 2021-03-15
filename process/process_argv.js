const option = process.argv.slice(2);
if(option < 1) {
    return;
}
console.log(option);
switch (option.shift()) {
    case 'arch':
        console.log(`Arch: ${process.arch}`);
        break;
    case 'platform':
        console.log(`Platform: ${process.platform}`);
    default:
        break;
}