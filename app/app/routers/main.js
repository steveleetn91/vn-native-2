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
            url:'#/home',
            component : homeComponent
        },
        {
            url:'#/about',
            component : aboutComponent
        }
    ]
}
export default MainRouterConfig;