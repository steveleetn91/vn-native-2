import homeComponent from '../screens/home.js';
import aboutComponent from '../screens/about.js';
let MainRouterConfig = {
    layout : "index.html",
    routers :[
        {
            url:'',
            component : homeComponent
        },
        {
            url:'index.html',
            component : homeComponent
        },
        {
            url:'about.html',
            component : aboutComponent
        }
    ]
}
export default MainRouterConfig;