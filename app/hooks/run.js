let fs = require('fs');
let webpackConfig = require('../vnnative.config');
var cmd = require('node-cmd');
/**
 * Serve 
 */
fs.readFile("./config.xml",(err,data) => {
    if (err) {
        return console.log(err);
    }
    data = data.toString();
    let custom = data.replace('index.html', 'http://localhost:' + webpackConfig.devServer.port);
    fs.writeFile('./config.xml', custom, 'utf8', function (err) {
        if (err) return console.log(err);
     });
});