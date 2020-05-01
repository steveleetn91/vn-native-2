let aboutComponent = new Object;
aboutComponent.render = function(){
        let home = document.createElement('div');
        home.innerText = "About Component";
        return home;
}
export default aboutComponent;