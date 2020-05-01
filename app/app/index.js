import Core from './library.js';
import homeComponent from './components/home.js';
import aboutComponent from './components/about.js';
let app = new Core({
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
});
setTimeout(() => {
    app.render();
},100);