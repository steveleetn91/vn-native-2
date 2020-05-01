import VnNativeJs from 'vn-native-js';
import header from '../components/header.js';
import general from '../css/general.js';
import running from '../components/running.js';
let homeScreen = new Object;
homeScreen.render = function(){
        let homeBody = document.createElement('div');
        homeBody.appendChild(header());
        homeBody.appendChild(running());
        let link = document.createElement("a");
        link.addEventListener("click",(e) => {
                let router = new VnNativeJs;
                router.activeRouter('/#/about');
        });
        link.innerText = "Home";
        homeBody.appendChild(link);
        return homeBody;
}
export default homeScreen;