import VnNativeJs from 'vn-native-js';
import header from '../components/header.js';
import general from '../css/general.js';
import running from '../components/running.js';
let homeScreen = new Object;
homeScreen.render = function(){
        let homeBody = document.createElement('div');
        homeBody.appendChild(header());
        homeBody.appendChild(running());
        return homeBody;
}
export default homeScreen;