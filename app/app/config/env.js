let config = new Object;
config.env = 'dev'; // prod || dev 
config.api = function(){
    return '';
}
config.devSupport = {
    "adressLocal" : "http://localhost:8000" // no change port , only change adress
}
export default config;