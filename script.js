// alert("dzialam");
var timerIsOn = false;

function toggleTimer(){
    timerIsOn = !timerIsOn;

    if(timerIsOn){
        document.getElementById('startStop').innerHTML = 'Stop';
    } else {
        document.getElementById('startStop').innerHTML = 'Start';
    }
}
