// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { SerialPort } = require('serialport')
const tableify = require('tableify')
const {ReadlineParser} = require('@serialport/parser-readline'); //added for clean parsing

async function listSerialPorts() {
  await SerialPort.list().then((ports, err) => {
    if(err) {
      document.getElementById('error').textContent = err.message
      return
    } else {
      document.getElementById('error').textContent = ''
    }
    console.log('ports', ports);

    if (ports.length === 0) {
      document.getElementById('error').textContent = 'No ports discovered'
    }

    tableHTML = tableify(ports)
    document.getElementById('ports').innerHTML = tableHTML
  })
}

function listPorts() {
  listSerialPorts();
  setTimeout(listPorts, 2000);
}

function testSensor() {

  const { SerialPort } = require('serialport');
  const sPort1 = new SerialPort({ path: '/dev/tty.usbmodem11201', baudRate: 9600})
  
  const sPort2 = new SerialPort({ path: '/dev/tty.usbmodem11401', baudRate: 9600})

  const parser1 = sPort1.pipe( new ReadlineParser({  //parser for first arduino
    delimiter: "\r\n"
  }));

  const parser2 = sPort2.pipe( new ReadlineParser({  //parser for second arduino
    delimiter: "\r\n"
  }));
  
  parser1.on('data', function(data) {  
    console.log(data);

    document.getElementById('s1console').innerHTML = data
  })

  parser2.on('data', function(data) {  
    console.log(data);

    document.getElementById('s2console').innerHTML = data
  })

}


// Set a timeout that will check for new serialPorts every 2 seconds.
// This timeout reschedules itself.
setTimeout(listPorts, 2000);

listSerialPorts();
testSensor();