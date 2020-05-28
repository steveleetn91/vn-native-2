import componentObject from 'vn-native-js/componentObject';
let runningUpdate = function(canvas){
    let times = 0;
    let stringLoading = " .";
    setInterval(() => {
        if(times < 4) {
            times += 1;
            stringLoading += ".";
        } else {
            times=0;
            stringLoading = " .";
        }
        let getContext = canvas.getContext('2d');
        getContext.clearRect(0, 0, canvas.width, canvas.height);
        getContext.beginPath();
        getContext.font = "20px Arial";
        getContext.fillStyle = "green";
        getContext.fillText("Runing " + stringLoading,window.innerWidth/2 - (26 + times),canvas.height/2 + 2);
    },400);
}
let running = function(){
    let create = new componentObject();
    create.create('canvas');
    let canvas = create.get();
    canvas.width = window.innerWidth;
    canvas.height = 150;
    runningUpdate(canvas);
    return canvas;
}
export default running;