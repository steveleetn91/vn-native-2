let fs = require('fs');
let webpackConfig = require('../vnnative.config');
fs.readFile("./config.xml",(err,data) => {
    if (err) {
        return console.log(err);
    }
    data = data.toString();
    let custom = data.replace('http://localhost:' + webpackConfig.devServer.port, 'index.html');
    fs.writeFile('./config.xml', custom, 'utf8', function (err) {
        if (err) return console.log(err);
     });
});