let fs = require('fs');
let webpackConfig = require('../webpack.config');
var cmd = require('node-cmd');
cmd.get('npm run start:dev',
function(err, data, stderr){
    if(err) {
        console.log('Watch server error : ',err);
    } else {
        console.log('Watch server running .. : ',data)
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