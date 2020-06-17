let config = new Object;
let configJson = require('../config/config.json');
config.env = configJson.env; // prod || dev 
/**
 * Return API endpoint
 */
config.api = function(){
    return config.env === 'prod' ? configJson.api.prod : configJson.api.dev;
}
/**
 * You can custom logic for developer server 
 */
config.devSupport = {
    "adressLocal" : configJson.ip
}
export default config;