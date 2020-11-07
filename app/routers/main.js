import homeComponent from '../screens/home.js';
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
        }
    ]
}
export default MainRouterConfig;