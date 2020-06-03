let fs = require('fs');
let configJson = require('../app/config/config.json');
var cmd = require('node-cmd');
/**
 * Serve 
 */
fs.readFile("./config.xml",(err,data) => {
    if (err) {
        return console.log(err);
    }
    data = data.toString();
    let custom = data.replace('index.html', 'http://' + configJson.ip + ':' + configJson.port);
    custom = custom.replace('http://localhost:' + configJson.port, 'http://' + configJson.ip + ':' + configJson.port);
    fs.writeFile('./config.xml', custom, 'utf8', function (err) {
        if (err) return console.log(err);
     });
});