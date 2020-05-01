let aboutScreen = new Object;
aboutScreen.render = function(){
        let home = document.createElement('div');
        home.innerText = "About Component";
        let link = document.createElement("a");
        link.href = "/";
        link.innerText = "Home";
        home.appendChild(link);
        return home;
}
export default aboutScreen;