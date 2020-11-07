import componentObject from 'vn-native-js/componentObject';
let lang = require('../languages/en.json');
/**   
 * Layout  
 */
let homeScreen = new Object;
homeScreen.render = function(){
        let screen = new componentObject();
        screen.create();
        screen.cssObject({
                height: "100vh",
                width: "100%",
                justifyContent: "center",
                textAlign:"center"
        });
        /**
         * Logo 
         */
        let logo_height = 150;
        let logo = new componentObject();
        logo.create('img');
        logo.attr('src','/img/logo_full.png');
        logo.cssObject({
                maxWidth: "100%",
                marginTop:100,
                marginTop: ( window.outerHeight / 2 ) - ( logo_height / 2 ),
                height:logo_height
        });
        screen.childComponent(logo.get());
        return screen.get();
}
export default homeScreen;