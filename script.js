// alert("dzialam");
var timerIsOn = false;
var timer = 0;
var seconds = 0;

function timerRun(){
    seconds++;

    document.getElementById('moj_div').innerHTML =   "00 : " + seconds;

    // setTimeout("timerRun()", 1000);
    timer = setTimeout("timerRun()", 1000);
}

function toggleTimer(){
    timerIsOn = !timerIsOn;

    if(timerIsOn){
        document.getElementById('startStop').innerHTML = 'Stop';
        setTimeout('timerRun()', 1000);
    } else {
        document.getElementById('startStop').innerHTML = 'Start';
        clearTimeout(timer);
    }
}
