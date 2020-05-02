import VnNativeJs from 'vn-native-js';
import header from '../components/header.js';
import general from '../css/general.js';
import running from '../components/running.js';
let aboutScreen = new Object;
aboutScreen.render = function(){
        let aboutBody = document.createElement('div');
        aboutBody.appendChild(header('About'));
        aboutBody.appendChild(running());
        return aboutBody;
}
export default aboutScreen;