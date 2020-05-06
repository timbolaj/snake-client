//IP Address 192.168.1.88
//Port 50541
const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit()
    }
  }
  
  stdin.on('data', (data) => {
    handleUserInput(data);
  }) 
  return stdin;
}

const { connect } = require('./client');
console.log('Connecting ...');
setUpInput();
connect()