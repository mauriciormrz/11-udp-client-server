const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const host = '127.0.0.1';
const port = 41100;

server.on('error', (err) => {
    console.log(err.stack);
    server.close();
});

server.on('message', (msg, rinfo) => {

    console.log(`Recibido: ${msg} from ${rinfo.address}:${rinfo.port}`);
    const reply = new Buffer('Hello Client');

    server.send(reply, 0, reply.length, rinfo.port, rinfo.address, (err, bytes) => {
        if (err) {
            console.log(err.stack);
        }
        console.log(`Enviado : ${reply} to   ${rinfo.address}:${rinfo.port}`);
    });
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor: Corriendo en      ${address.address}:${address.port}`);
});

server.bind(port, host);

// const dgram = require('dgram');
// const server = dgram.createSocket('udp4');

// const host = '127.0.0.1';
// const port = 41100;

// const clients = [];

// server.on('error', (err) => {
//     console.log(err.stack);
//     server.close();
// });

// server.on('message', (msg, rinfo) => {
//     console.log(`Connected client at ${rinfo.address}:${rinfo.port}`);
//     clients.push(rinfo);
// });

// server.on('listening', () => {
//     const address = server.address();
//     console.log(`server listening ${address.address}:${address.port}`);
// });

// setInterval(() => {
//     const price = Math.floor(1000 + Math.random() * 100);
//     const time = Date.now();
//     const data = new Buffer(price + ',' + time);

//     clients.forEach((rinfo) => {
//         server.send(data, 0, data.length, rinfo.port, rinfo.address, (err, bytes) => {
//             if (err) {
//                 console.log(err.stack);
//             }
//         });
//     })
// }, 1000);

// server.bind(port, host);