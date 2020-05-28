import VnNativeCore from 'vn-native-js/VnNativeCore';
import componentObject from 'vn-native-js/componentObject';
import header from '../components/header.js';
import running from '../components/running.js';
import AppEnv from '../config/env.js';
let lang = require('../languages/en.json');
/**
 * Native 
 */
VnNativeCore.setup(AppEnv.env,AppEnv.devSupport.adressLocal);
/**
 * Layout 
 */
let homeScreen = new Object;
homeScreen.render = function(){
        let screen = new componentObject();
        screen.create();
        /**
         * Some information
         */
        let content = new componentObject();
        content.create('section');
        content.attr('class','container');
        content.cssObject({
                padding:50
        });
        content.content(lang.homeIntro);
        // about home link 
        let aboutLink = new componentObject();
        aboutLink.create('a');
        aboutLink.attr('href','about.html');
        aboutLink.content('About page');
        aboutLink.cssObject({
                paddingLeft:50
        });
        // build 
        screen.childComponent(header());
        screen.childComponent(content.get());
        screen.childComponent(aboutLink.get());
        screen.childComponent(running());
        return screen.get();
}
export default homeScreen;