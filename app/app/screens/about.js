import componentObject from 'vn-native-js/componentObject';
import header from '../components/header.js';
import running from '../components/running.js';
import VnNativeJs from 'vn-native-js';
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
        let vnnati = new VnNativeJs();
        let homeLink = new componentObject();
        homeLink.create('button');
        homeLink.attr('class','btn btn-danger');
        homeLink.setEvent('click',() => {
                vnnati.activeRoute({url:'index.html'});
        })
        homeLink.content('home page');
        homeLink.cssObject({
                marginLeft:50
        });
        // build 
        screen.childComponent(header('About'));
        screen.childComponent(content.get());
        screen.childComponent(homeLink.get());
        screen.childComponent(running());
        return screen.get();
}
export default aboutScreen;