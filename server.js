console.log('hello world');
var os = require('os');
const mth = require('./maths');
const fs = require('fs');
const path = require('path');
const string = require('./string');
const event = require('events');
const x = new event.EventEmitter();

let eventhandler = function(){
  console.log('i am screeming');
}
x.on("screem", eventhandler);
x.emit('screem');
//console.log(os.type());
//console.log(os.version());
//console.log(os.homedir());
//console.log(os.hostname());
//console.log(mth.add(3, 5));
//console.log(mth.mul(3, 5));
//console.log(mth.div(10, 2));
//console.log(__filename);
fs.readFile(path.join(__dirname, 'files', 'mytxt.txt'), 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
  });
  fs.writeFile(path.join(__dirname, 'files', 'mytxt2.txt'), 'testing node', function(err){
    if (err) throw err;
    console.log('completed');
  });
  fs.appendFile(path.join(__dirname, 'files', 'mytxt2.txt'), '\n\n javascript is sweet', function(err){
    if (err) throw err;
    console.log('completed');
  });
 //console.log(string.name('mark'));
 console.log(string.name('Daniel'));
 console.log(os.userInfo());
 console.log(os.uptime());
 console.log(`the release date is ${os.release()}`);
 console.log(mth.mod(10, 3));
 console.log(`echo "hello" people`);