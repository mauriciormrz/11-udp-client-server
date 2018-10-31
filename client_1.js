const dgram = require('dgram');
const client = dgram.createSocket('udp4');
var moment = require('moment');

moment.locale();

const host = '127.0.0.1';
const port = 9000;

//const message = new Buffer('Hello Server');


//const message = new Buffer('003D0003124D0AE5C1D90100015BC48CFC0000D3A5E27C03DE817704F7140A0F001E06080605011B1B02000300AD010400021D70221E0F22014103F859A400E237');

const message = new Buffer('Client_1');
client.on('message', (message, remote) => {
    console.log(`Recibido: ${message}`);
});

client.send(message, 0, message.length, port, host, (err, bytes) => {
    if (err) {
        throw err;
    }

    console.log(`Enviado : ${message}`);
});


// const dgram = require('dgram');
// const client = dgram.createSocket('udp4');

// const host = '0.0.0.0';
// const port = 41100;

// const message = new Buffer('Hello Server');

// const parseTick = (message) => {
//     const parts = message.toString().split(',').map((part) => +part);
//     return {
//         price: parts[0],
//         time: parts[1]
//     }
// };

// let latestTickTime = -1;

// client.on('message', (message, remote) => {
//     const tick = parseTick(message);

//     if (tick.time > latestTickTime) {
//         console.log('Price is', tick.price);
//         latestTickTime = tick.time
//     } else {
//         console.log('Price is outdated, discard');
//     }
// });

// client.send(message, 0, message.length, port, host, (err, bytes) => {
//     if (err) {
//         throw err;
//     }

//     console.log('Message sent');
// });