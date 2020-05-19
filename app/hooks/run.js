let fs = require('fs');
let webpackConfig = require('../webpack.config');
var cmd = require('node-cmd');
cmd.get('cordova serve',function(err,data) {
    if(err) {
        console.error("Hidden server can not start at port :8000");
    }
});
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