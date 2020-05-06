const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  })

  conn.on('connect', (connect) => {
    console.log("You're connected fam");
  })

  conn.on('connect', () => {
    conn.write(`Name: ABG`);
  })

  conn.on('data', (data) => {
    console.log("You have been terminated");
  })

  conn.setEncoding('utf8');
  return conn;
}

module.exports = { connect };