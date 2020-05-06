//IP Address 192.168.1.88
//Port 50541

const { connect } = require('./client');
const { setUpInput } = require('./input');
console.log('Connecting ...');
setUpInput();
connect()