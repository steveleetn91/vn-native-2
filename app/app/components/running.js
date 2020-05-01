import style from '../css/style.js';
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
        getContext.fillText("Runing " + stringLoading,window.innerWidth/2 - (26 + times),window.innerHeight/2 + 2);
    },1000);
}
let running = function(){
    let canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    runningUpdate(canvas);
    return canvas;
}
export default running;