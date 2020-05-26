import VnNativeJs from 'vn-native-js';
import VnNativeCore from 'vn-native-js/VnNativeCore';
import componentObject from 'vn-native-js/componentObject';
import header from '../components/header.js';
import general from '../css/general.js';
import running from '../components/running.js';
let aboutScreen = new Object;
aboutScreen.render = function(){
        let aboutBody = new componentObject;
        aboutBody.create();
        aboutBody.childComponent(header('About'));
        aboutBody.childComponent(running());
        return aboutBody.get();
}
export default aboutScreen;