class Core {
    constructor(config){
        this.data = config;
    }
    render(){
        this.route().then((data) => {
            console.log(data);
        });
    }
    route(){
        return new Promise((resole,reject) => {
            let route = document.getElementById("vn-native-router");
            let html;
            if(this.data.routers.length > 0) {
                this.data.routers.forEach(element => {
                        if(element.url === window.location.hash) {
                            html = element.component.render();
                        }
                });
            }
            route.appendChild(html);
            return resole(true);
        });
    }
}
export default Core;