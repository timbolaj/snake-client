//IP Address 192.168.1.88
//Port 50541

const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  })

  conn.on('data', (data) => {
    console.log("You ded cuz you idled");
  })

  conn.setEncoding('utf8');
  return conn;
}

console.log('Connecting ...');
connect()