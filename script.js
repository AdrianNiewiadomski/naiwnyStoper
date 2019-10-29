// alert("dzialam");
var timerIsOn = false;
var seconds = 0;

function timerRun(){
    seconds++;

    document.getElementById('moj_div').innerHTML =   "00 : " + seconds;
}

function toggleTimer(){
    timerIsOn = !timerIsOn;

    if(timerIsOn){
        document.getElementById('startStop').innerHTML = 'Stop';
        setTimeout('timerRun()', 1000);
    } else {
        document.getElementById('startStop').innerHTML = 'Start';
    }
}
