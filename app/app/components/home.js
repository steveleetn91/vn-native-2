let homeComponent = new Object;
homeComponent.render = function(){
        let home = document.createElement('h2');
        home.innerText = "Home Component";
        home.addEventListener("click",() => {
                alert("OK 2");
        });
        return home;
}
export default homeComponent;