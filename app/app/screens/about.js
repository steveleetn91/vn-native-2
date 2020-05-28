import componentObject from 'vn-native-js/componentObject';
import header from '../components/header.js';
import running from '../components/running.js';
let lang = require('../languages/en.json');
let aboutScreen = new Object;
aboutScreen.render = function(){
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
        content.content(lang.aboutIntro);
        // about home link 
        let aboutLink = new componentObject();
        aboutLink.create('a');
        aboutLink.attr('href','index.html');
        aboutLink.content('home page');
        aboutLink.cssObject({
                paddingLeft:50
        });
        // build 
        screen.childComponent(header('About'));
        screen.childComponent(content.get());
        screen.childComponent(aboutLink.get());
        screen.childComponent(running());
        return screen.get();
}
export default aboutScreen;