import VnNativeJs from 'vn-native-js';
import VnNativeCore from 'vn-native-js/VnNativeCore';
import componentObject from 'vn-native-js/componentObject';
import header from '../components/header.js';
import general from '../css/general.js';
import running from '../components/running.js';
import AppEnv from '../config/env.js';
/**
 * Native 
 */
VnNativeCore.setup(AppEnv.env,AppEnv.devSupport.adressLocal);
/**
 * Layout 
 */
let homeScreen = new Object;
homeScreen.render = function(){
        let component = new componentObject();
        component.create();
        component.childComponent(header());
        component.childComponent(running());
        return component.get();
}
export default homeScreen;