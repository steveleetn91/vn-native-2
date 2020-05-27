let config = new Object;
config.env = 'dev'; // prod || dev 
config.api = function(){
    return '';
}
config.devSupport = {
    "adressLocal" : "localhost" // localhost or ip
}
export default config;